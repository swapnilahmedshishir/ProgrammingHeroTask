require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

// Connect to MongoDB database
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");

// Middleware to parse JSON requests
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the Crowdcube Application Server");
});

const uri = `mongodb+srv://${process.env.DATABASE_NAME}:${process.env.DATABASE_PASSWORD}@crowdcubeapplicationpro.vhhqf.mongodb.net/?retryWrites=true&w=majority&appName=CrowdcubeApplicationProject`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
  tlsAllowInvalidCertificates: true,
});

async function run() {
  try {
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

    const database = client.db("crowdcube");
    const campaigns = database.collection("campaigns");
    const donated = database.collection("donated");

    // campain get
    app.get("/api/campaigns", async (req, res) => {
      try {
        // const limit = parseInt(req.query.limit);
        const result = await campaigns.find().toArray();
        res.send(result);
      } catch (error) {
        res.status(500).send({ error: "Campaign not found" });
      }
    });

    // campanin get by id
    app.get("/api/campaigns/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const result = await campaigns.findOne(query);
        res.send(result);
      } catch (error) {
        res.status(500).send({ error: "Campaign not found" });
      }
    });

    // campanin get by userEmail
    app.get("/api/myCampaigns", async (req, res) => {
      try {
        const email = req.query.email;
        if (!email) {
          return res.status(400).json({ message: "User email is required" });
        }
        const query = { userEmail: email };
        const result = await campaigns.find(query).toArray();
        res.send(result);
      } catch (error) {
        res.status(500).send({ error: "Campaigns not found" });
      }
    });

    // My donation route with email address
    app.get("/api/myDonations", async (req, res) => {
      try {
        const email = req.query.email;
        if (!email) {
          return res.status(400).json({ message: "User email is required" });
        }
        const query = { userEmail: email };
        const result = await donated.find(query).toArray();
        res.send(result);
      } catch (error) {
        res.status(500).send({ error: "Donations not found" });
      }
    });

    // campaigns careate
    app.post("/api/campaigns", async (req, res) => {
      try {
        const newCampaigns = req.body;
        const result = await campaigns.insertOne(newCampaigns);
        res.send(result);
      } catch (error) {
        res.status(500).send({ error: "Sorry! Campaigns Faild to Created " });
      }
    });

    // campaigns donated
    app.post("/api/donations", async (req, res) => {
      try {
        const newDonated = req.body;
        const result = await donated.insertOne(newDonated);
        res.send(result);
      } catch (error) {
        res.status(500).send({ error: "Sorry! Failed to donated" });
      }
    });

    // /api/campaigns/ put campaign
    app.put("/api/campaigns/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const updatedCampaign = req.body;
        const query = { _id: new ObjectId(id) };
        const result = await campaigns.updateOne(query, {
          $set: updatedCampaign,
        });
        res.send(result);
      } catch (error) {
        res.status(500).send({ error: "Campaign not updated" });
      }
    });

    // campaingn delete
    app.delete("/api/campaigns/:id", async (req, res) => {
      try {
        const id = req.params.id;
        const query = { _id: new ObjectId(id) };
        const result = await campaigns.deleteOne(query);
        res.send(result);
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
