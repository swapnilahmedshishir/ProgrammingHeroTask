require("dotenv").config();
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cloudinary = require("cloudinary").v2;
// Connect to MongoDB database
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

const app = express();
const port = process.env.port || 3001;

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:5174",
  "https://newswebsite-3a348.web.app",
  "https://newswebsite-3a348.firebaseapp.com",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.error(`CORS blocked for origin: ${origin}`);
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
// Middleware for parsing URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.get("/", (req, res) => {
  res.send("<h1>welcome to the newsportal website</h1>");
});
// token verify
const verifyToken = (req, res, next) => {
  const token = req?.headers?.authorization;

  if (!token) {
    return res
      .status(401)
      .send({ message: "Unauthorized. No token provided." });
  }
  const tokenString = token.split(" ")[1];
  jwt.verify(tokenString, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Forbidden. Invalid token." });
    }
    req.decoded = decoded;
    next();
  });
};

const uri = `mongodb+srv://${process.env.DB_userName}:${process.env.DB_Password}@cluster0.xtnxv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

    const database = client.db("newshub");
    const articles = database.collection("articles");
    const userInfo = database.collection("userInfo");
    const publishers = database.collection("publishers");

    // veryfy the admin
    const verifyAdmin = async (req, res, next) => {
      const email = req?.decoded.email;
      const user = await userInfo.findOne({ email });
      const isAdmin = user?.isAdmin === true;
      if (!isAdmin) {
        return res.status(403).json({ message: "Forbidden" });
      }
      next();
    };

    // all post method
    // Auth related APIs
    app.post("/api/jwt", async (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "1d",
      });
      res
        .cookie("token", token, {
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
          sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
        })
        .send({ success: true, token });
    });

    // user register
    app.post("/api/register", async (req, res) => {
      const { uid, email, displayName, photoURL } = req.body;

      try {
        // Check if the user already exists
        const query = { email: email };
        const existingUser = await userInfo.findOne(query);
        if (existingUser) {
          // return res.status(400).json({ message: "User already exists" });
          return res.status(200).json({ existingUser });
        }

        // Create a new user
        const newUser = {
          uid,
          email,
          displayName,
          photoURL,
          createdAt: new Date(),
          isAdmin: false,
          premiumTaken: null,
        };
        const result = await userInfo.insertOne(newUser);
        // Respond with the new user info
        res
          .status(201)
          .json({ newUser: { ...newUser, _id: result.insertedId } });
      } catch (error) {
        console.error("Error registering user:", error);
        res.status(500).json({ message: "Internal server error" });
      }
    });

    // artical post
    app.post("/api/articles", async (req, res) => {
      const {
        title,
        image,
        publisher,
        authorName,
        authorEmail,
        authorPhoto,
        tags,
        description,
      } = req.body;

      const articlesData = {
        title,
        image,
        authorName,
        authorEmail,
        authorPhoto,
        postedDate: new Date().toISOString().split("T")[0],
        publisher,
        tags,
        description,
        status: "Pending",
        isPremium: false,
      };
      const result = await articles.insertOne(articlesData);
      res.send(result);
    });

    // pubblisher add data
    app.post("/api/publishers", verifyToken, verifyAdmin, async (req, res) => {
      const publisherData = req.body;
      const result = await publishers.insertOne(publisherData);
      res.status(200).send(result);
    });

    // Get all articles with filters
    // cheek the use is admin or not
    app.get("/api/adminuser/:email", verifyToken, async (req, res) => {
      const { email } = req.params;
      if (req.decoded.email !== email) {
        return res.status(403).json({ message: "Forbidden" });
      }
      try {
        const user = await userInfo.findOne({ email });
        if (!user) {
          return res.status(404).json({ message: "User not found" });
        }
        if (user) {
          admin = user?.isAdmin === true;
        }
        res.status(200).json({ isAdmin: user.isAdmin || false });
      } catch (error) {
        console.error("Error fetching user:", error);
        res.status(500).json({ message: "Server error" });
      }
    });
    // get the all publisher data
    app.get("/api/publishers", async (req, res) => {
      try {
        const result = await publishers.find().toArray();
        res.status(200).json(result);
      } catch (error) {
        res.status(500).json({ message: "Server error" });
      }
    });

    // dashbord user reated api
    app.get("/api/users", async (req, res) => {
      try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        // Fetch the total number of users
        const totalUsers = await userInfo.countDocuments();

        // Fetch the paginated users
        const users = await userInfo.find().skip(skip).limit(limit).toArray();

        res.status(200).json({
          users,
          total: totalUsers,
        });
      } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ message: "Server error" });
      }
    });

    // Login user info get
    app.get("/api/loginUser/:email", verifyToken, async (req, res) => {
      const email = req.params.email;
      try {
        // Fetch user info by email
        const user = await userInfo.findOne({ email });

        if (!user) {
          return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(user); // Send the user data
      } catch (error) {
        console.error("Error fetching user data:", error);
        res.status(500).json({ message: "Server error" });
      }
    });

    app.get("/api/allarticles", async (req, res) => {
      try {
        const { search, publisher, tags } = req.query;

        // Create a filter object based on query parameters
        const filter = {};
        if (search) {
          filter.title = { $regex: search, $options: "i" };
        }
        if (publisher) {
          filter.publisher = publisher;
        }
        if (tags) {
          const tagsArray = tags.split(",");
          filter.tags = { $in: tagsArray };
        }

        // Query the database
        const result = await articles.find(filter).toArray();
        res.status(200).json(result);
      } catch (error) {
        console.error("Error fetching articles:", error);
        res.status(500).json({ message: "Server error" });
      }
    });
    // get the all article
    app.get("/api/articles", verifyToken, verifyAdmin, async (req, res) => {
      try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;

        const totalArticles = await articles.countDocuments();
        const result = await articles.find().skip(skip).limit(limit).toArray();
        res.status(200).json({
          result,
          total: totalArticles,
        });
      } catch (error) {
        res.status(500).json({ message: "Server error" });
      }
    });

    // get the artical by the id
    app.get("/api/articles/:id", verifyToken, async (req, res) => {
      try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const result = await articles.findOne(query);
        res.send(result);
      } catch (error) {
        res.status(500).send({ error: "articals not found" });
      }
    });

    // artical get by userEmail
    app.get("/api/myArticles", verifyToken, async (req, res) => {
      try {
        const email = req?.query?.email;

        if (!email) {
          return res.status(400).json({ message: "User email is required" });
        }
        const query = { authorEmail: email };
        const result = await articles.find(query).toArray();
        res.send(result);
      } catch (error) {
        res.status(500).send({ error: "Campaigns not found" });
      }
    });

    // get by the artical
    app.get("/api/articles/:id", async (req, res) => {
      const { id } = req.params;

      try {
        const article = await articles.findOne({ _id: new ObjectId(id) });
        if (!article) {
          return res.status(404).json({ message: "Article not found" });
        }
        res.status(200).json(article);
      } catch (error) {
        console.error("Error fetching article:", error);
        res.status(500).json({ message: "Server error" });
      }
    });

    // Endpoint to check if the user is allowed to post an article
    app.get("/api/checklimit", verifyToken, async (req, res) => {
      const email = req?.query?.email;

      if (!email) {
        return res
          .status(400)
          .json({ isAllowed: false, message: "Email parameter is missing" });
      }

      try {
        // Find the user by email
        const user = await userInfo.findOne({ email });

        if (!user) {
          return res
            .status(404)
            .json({ isAllowed: false, message: "User not found" });
        }

        // Check if the user is a premium user
        const isPremium =
          user.premiumTaken && new Date(user.premiumTaken) > new Date();

        if (isPremium) {
          return res.status(200).json({ isAllowed: true });
        }

        // Check if the user already has an article
        const existingArticle = await articles.findOne({ authorEmail: email });

        if (existingArticle) {
          return res.status(200).json({ isAllowed: false });
        }

        res.status(200).json({ isAllowed: true });
      } catch (error) {
        console.error("Error checking posting limit:", error);
        res.status(500).json({ isAllowed: false, message: "Server error" });
      }
    });

    //subscribe the user
    app.put("/api/user/updatePremium", async (req, res) => {
      const { uid, period } = req.body;

      // Subscription periods in milliseconds
      const subscriptionPeriods = {
        "1 minute": 1 * 60 * 1000,
        "5 days": 5 * 24 * 60 * 60 * 1000,
        "10 days": 10 * 24 * 60 * 60 * 1000,
      };

      // Validate request data
      if (!uid || !period) {
        return res.status(400).json({ message: "UID and period are required" });
      }

      if (!subscriptionPeriods[period]) {
        return res.status(400).json({ message: "Invalid subscription period" });
      }

      try {
        // Fetch user by UID
        const user = await userInfo.findOne({ uid });

        if (!user) {
          return res.status(404).json({ message: "User not found" });
        }

        // Calculate new premium expiration date
        const currentDate = new Date();
        const currentPremiumDate = user.premiumTaken
          ? new Date(user.premiumTaken)
          : null;
        const subscriptionDuration = subscriptionPeriods[period];

        // Determine new premium expiration date
        const newPremiumDate =
          currentPremiumDate && currentPremiumDate > currentDate
            ? new Date(currentPremiumDate.getTime() + subscriptionDuration)
            : new Date(currentDate.getTime() + subscriptionDuration);

        // Update user premiumTaken field in the database with $set
        const updatedUser = await userInfo.findOneAndUpdate(
          { uid },
          { $set: { premiumTaken: newPremiumDate } }, // Use $set for atomic update
          { new: true }
        );

        res.status(200).json({
          message: "Subscription updated successfully!",
          premiumUntil: updatedUser.premiumTaken,
        });
      } catch (error) {
        console.error("Error updating premium subscription:", error);
        res.status(500).json({ message: "Internal server error" });
      }
    });

    // update the user profile
    app.put("/api/update-profile", async (req, res) => {
      const { uid, name, email, photoURL } = req.body;

      try {
        const result = await userInfo.updateOne(
          { uid },
          { $set: { displayName: name, email, photoURL } },
          { upsert: false }
        );

        if (result.matchedCount === 0) {
          return res.status(404).send({ message: "User not found." });
        }

        // Return updated data for client-side synchronization
        const updatedUser = await userInfo.findOne({ uid });
        res.status(200).send(updatedUser);
      } catch (error) {
        res.status(500).send({ message: "Failed to update profile." });
      }
    });

    // update the artical
    app.put("/api/articles/:id", verifyToken, async (req, res) => {
      const { id } = req.params;
      const { title, image, publisher, tags, description } = req.body;
      try {
        const result = await articles.updateOne(
          { _id: new ObjectId(id) },
          { $set: { title, image, publisher, tags, description } }
        );
        res.send(result);
      } catch (error) {
        res.status(500).send({ message: "Failed to update article." });
      }
    });

    // make the all patch route
    // Promote user to admin
    app.patch(
      "/api/users/make-admin/:id",
      verifyToken,
      verifyAdmin,
      async (req, res) => {
        const { id } = req.params;

        try {
          // Update the user document where _id matches
          const result = await userInfo.updateOne(
            { _id: new ObjectId(id) },
            { $set: { isAdmin: true } }
          );

          if (result.modifiedCount > 0) {
            res.status(200).json({
              message: "User promoted to admin successfully.",
              modifiedCount: result.modifiedCount,
            });
          } else {
            res
              .status(400)
              .json({ message: "User not found or already an admin." });
          }
        } catch (error) {
          res.status(500).json({ message: "Internal server error." });
        }
      }
    );
    // make the article approve
    app.patch(
      "/api/articles/:id/approve",
      verifyToken,
      verifyAdmin,
      async (req, res) => {
        try {
          const articleId = req.params.id;
          if (!ObjectId.isValid(articleId)) {
            return res.status(400).json({ error: "Invalid article ID" });
          }

          const result = await articles.updateOne(
            { _id: new ObjectId(articleId) },
            { $set: { status: "Approved" } }
          );

          if (result.matchedCount === 0) {
            return res.status(404).json({ error: "Article not found" });
          }
          res.status(200).json({ message: "Article approved successfully!" });
        } catch (error) {
          res.status(500).json({ error: "Internal Server Error" });
        }
      }
    );
    // make the article decline
    app.patch(
      "/api/articles/:id/decline",
      verifyToken,
      verifyAdmin,
      async (req, res) => {
        try {
          const articleId = req.params.id;
          const reason = req.body.reason;

          // Check if the article exists and update it
          const result = await articles.updateOne(
            { _id: new ObjectId(articleId) },
            { $set: { status: "Declined", declineReason: reason } }
          );
          if (result.matchedCount === 0) {
            return res.status(404).json({ error: "Article not found" });
          }
          res.status(200).json({ message: "Article declined successfully!" });
        } catch (error) {
          // Handle other errors
          res.status(500).json({ error: "Failed to decline the article." });
        }
      }
    );
    // make the article premium
    app.patch(
      "/api/articles/:id/make-premium",
      verifyToken,
      verifyAdmin,
      async (req, res) => {
        try {
          const articleId = req.params.id;

          // Check if the article exists and update it
          const result = await articles.updateOne(
            { _id: new ObjectId(articleId) },
            { $set: { isPremium: true } }
          );

          if (result.matchedCount === 0) {
            return res.status(404).json({ error: "Article not found" });
          }
          res.status(200).json({ message: "Article declined successfully!" });
        } catch (error) {
          // Handle other errors
          res.status(500).json({ error: "Failed to decline the article." });
        }
      }
    );
    // patch the view count
    app.patch("/api/articles/:id/view", async (req, res) => {
      const { id } = req.params;
      try {
        const result = await articles.updateOne(
          { _id: new ObjectId(id) },
          { $inc: { views: 1 } }
        );
        if (result.matchedCount === 0) {
          return res.status(404).json({ message: "Article not found" });
        }
        res.status(200).json({ message: "View count updated" });
      } catch (error) {
        console.error("Error updating view count:", error);
        res.status(500).json({ message: "Server error" });
      }
    });
    // Delete an article
    app.delete(
      "/api/articles/:id",
      verifyToken,
      verifyAdmin,
      async (req, res) => {
        try {
          const id = req.params.id;
          const query = { _id: new ObjectId(id) };
          await articles.deleteOne(query);
          res.status(200).json({ message: "Article deleted successfully!" });
        } catch (error) {
          res.status(500).send({ error: "Campaign not updated" });
        }
      }
    );
    // Delete an article
    app.delete("/api/myarticles/:id", verifyToken, async (req, res) => {
      try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        await articles.deleteOne(query);
        res.status(200).json({ message: "Article deleted successfully!" });
      } catch (error) {
        res.status(500).send({ error: "Campaign not updated" });
      }
    });
  } finally {
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
