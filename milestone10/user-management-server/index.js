const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
var cors = require("cors");
const app = express();

const port = process.env.PORT || 3000;
const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

// const user = [
//   {
//     id: 1,
//     name: "John Doe",
//     email: "johndoe@example.com",
//   },
//   {
//     id: 2,
//     name: "Jane Smith",
//     email: "janesmith@example.com",
//   },
//   {
//     id: 3,
//     name: "Alice Johnson",
//     email: "alicejohnson@example.com",
//   },
//   {
//     id: 4,
//     name: "Bob Brown",
//     email: "bobbrown@example.com",
//   },
//   {
//     id: 5,
//     name: "Emma Davis",
//     email: "emmadavis@example.com",
//   },
// ];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// mogos info
// freeservise7
// freeservise7

const uri =
  "mongodb+srv://freeservise7:freeservise7@cluster0.kk7xu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    const myDB = client.db("myDB");
    const myColl = myDB.collection("userCollection");

    // user get
    app.get("/user", async (req, res) => {
      const cursor = myColl.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    // user get id
    app.get("/user/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await myColl.findOne(query);
      res.send(result);
    });

    // user careate
    app.post("/createUser", async (req, res) => {
      const newUser = req.body;
      const result = await myColl.insertOne(newUser);
      res.send(result);
    });
    // user delete
    app.delete("/deleteUser/:id", async (req, res) => {
      const id = req.params.id;

      const query = { _id: new ObjectId(id) };
      const result = await myColl.deleteOne(query);
      res.send(result);
    });

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinge your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.log);

// Define the createUser endpoint

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
