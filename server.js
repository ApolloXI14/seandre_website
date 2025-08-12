//const envConfig = require('./envConfig');
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Home = require('./models/Home');
const Journal = require('./models/Journal');
const util = require('util');

const app = express();

// Find port in command; if not supplied, default to 5000
const portArg = (
    process.argv.find( (arg, index, args) => {return Number(arg) && args[index-1] === '--port'} )
);

const MONGODB_URI = (
    process.argv.find( (arg, index, args) => {return arg && args[index-1] === '--uri'} )
);

// const SEANDRE_DB_USER = (
//     process.argv.find( (arg, index, args) => {return arg && args[index-1] === '--user'} )
// );
//
// const SEANDRE_DB_PW = (
//     process.argv.find( (arg, index, args) => {return arg && args[index-1] === '--password'} )
// );
//
// const SEANDRE_DB_HOST = (
//     process.argv.find( (arg, index, args) => {return arg && args[index-1] === '--host'} )
// ) || '127.0.0.1';

!portArg && console.log('Port was not supplied to server.js; defaulting to port 5000');

const PORT = portArg || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// mongoDB connection
// TODO: Change DB name from "journal"
// TODO: Make conditional to switch mongoDB connection between localhost and Atlas cluster


// SEANDRE_DB_* environment variables must be set in system/OS; do NOT hardcode here
//mongoose.connect('mongodb://' + SEANDRE_DB_USER + ':' + SEANDRE_DB_PW + '@' + SEANDRE_DB_HOST + ':27017/journal?replicaSet=rs0');

// mongoose.connect('mongodb+srv://' + SEANDRE_DB_USER + ':' + SEANDRE_DB_PW + '@' + SEANDRE_DB_HOST + '/?retryWrites=true&w=majority&appName=Cluster0');
// var journal = mongoose.connection;

// const db = mongoose.connection;


//const uri = 'mongodb://' + SEANDRE_DB_USER + ':' + SEANDRE_DB_PW + '@' + SEANDRE_DB_HOST + ':27017/journal?replicaSet=rs0';
mongoose.connect(MONGODB_URI);
var journal = mongoose.connection;

// ATLAS CLUSTER CONNECTION

// const { MongoClient, ServerApiVersion } = require('mongodb');
//
//
//
// const uri = MONGODB_URI;
//
// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });
// var journal;
// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//     journal = client.db("journal");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);



const db = mongoose.connection;

db.on('error', (error) => console.error(error))
db.once('open', ()=> console.log('Connected to MongoDB'));

// API Routes
app.get('/', (req, res) => {
    res.send('Hello from Express');
});

app.get('/homes', async (req, res) => {
  //await client.connect(); // if using remote mongoDB cluster, connection must be established or any fetching will fail
  const journalCollection = journal.collection("homes");
  async function getHome() {
          return await journalCollection.find({}, {"title": true, "date": true, "content": true}).toArray();
        }
  try {
        var home = await getHome();
        return res.json(home);
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }
});

app.get('/journals', async (req, res) => {
  //await client.connect();
  const dateSort = req?.dateSort || -1;
  async function getJournals(dateSort = -1) {
    return await journal.collection("journals").find({}).sort({date: dateSort}).toArray();
  }
  try {
        const journals = await getJournals();
        return res.json(journals);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/journals/:title', async (req, res) => {
  //await client.connect();
  async function getJournalEntry(query) {
      return await journal.collection("journals").findOne(query, {title: 1, date: 1, content: 1});
  }
  try {
      const isParamId = /^\d+$/.test(req?.params?.title);
      const searchQuery = !isParamId && req?.params?.title.replaceAll('-', " ") || Number(req?.params?.title); // if title is in request, find just
      //const title = req?.params?.title.replaceAll('-', " "); // if title is in request, find just that title, otherwise return all
      //const dateSort = req?.dateSort || -1; // sort DESC date by default
      const query = isParamId ? { _id: searchQuery } : {title: new RegExp(searchQuery, 'i')} ;
      const options = {sort: {date: -1}};
      const journalEntry = await getJournalEntry(query);
      return res.json(journalEntry);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


app.listen(PORT, ()=> {
   console.log(`Server running on port ${PORT}`);
});

// https://expressjs.com/en/advanced/healthcheck-graceful-shutdown.html
process.on('SIGTERM', () => {
  debug('SIGTERM signal received: closing HTTP server')
  app.close(() => {
    debug('HTTP server closed')
  })
})


module.exports = app;
