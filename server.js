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

const SEANDRE_DB_USER = (
    process.argv.find( (arg, index, args) => {return arg && args[index-1] === '--user'} )
);

const SEANDRE_DB_PW = (
    process.argv.find( (arg, index, args) => {return arg && args[index-1] === '--password'} )
);

const SEANDRE_DB_HOST = (
    process.argv.find( (arg, index, args) => {return arg && args[index-1] === '--host'} )
) || '127.0.0.1';

!portArg && console.log('Port was not supplied to server.js; defaulting to port 5000');
(!SEANDRE_DB_USER || !SEANDRE_DB_PW) && console.log('Username and/or password was not supplied; unable to authenticate');

const PORT = portArg || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// mongoDB connection
// TODO: Change DB name from "journal"


// SEANDRE_DB_* environment variables must be set in system/OS; do NOT hardcode here
mongoose.connect('mongodb://' + SEANDRE_DB_USER + ':' + SEANDRE_DB_PW + '@' + SEANDRE_DB_HOST + ':27017/journal?replicaSet=rs0');

// mongoose.connect('mongodb+srv://' + SEANDRE_DB_USER + ':' + SEANDRE_DB_PW + '@' + SEANDRE_DB_HOST + '/?retryWrites=true&w=majority&appName=Cluster0');
var journal = mongoose.connection;
 // const db = mongoose.connection;



// const { MongoClient, ServerApiVersion } = require('mongodb');
//
// const uri = 'mongodb+srv://' + SEANDRE_DB_USER + ':' + SEANDRE_DB_PW + '@' + SEANDRE_DB_HOST + '/?retryWrites=true&w=majority&appName=Cluster0';



// Create a MongoClient with a MongoClientOptions object to set the Stable API version
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
//
//     journal = client.db("journal");
//     // console.log('journal: ', journal)
//     // const test = journal.listCollections();
//     // for await (const doc of test) {
//     //   console.log(doc)
//     // }
//   // const collection = journal.collection("journals").find({});
//   // console.log("collection: ", collection);
//   // for await (const item of collection) {
//   //     console.log(item)
//   //   }
//
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);
/*


const db = mongoose.connection;

db.on('error', (error) => console.error(error))
db.once('open', ()=> console.log('Connected to MongoDB'));*/

// API Routes
app.get('/', (req, res) => {
    res.send('Hello from Express');
});

app.get('/homes', async (req, res) => {
  const journalCollection = journal.collection("homes");
  async function getHome() {
          return await journalCollection.find({}, {"title": true, "date": true, "content": true}).toArray();
        }
  try {

        // console.log('journalCollection: ', journalCollection);

        // var home = await getHome().then( (response) => {
        //       return response;
        //     });

        var home = await getHome();

        console.log('home: ', home);
        // console.log('home: ', home);
  //       for (const doc of home) {
  //   console.log(doc);
  // }
//         var test = JSON.stringify(home, (key, value) => {
//     if (typeof value === 'object' && value !== null) {
//         if (value instanceof Array) {
//             return value.map(
//                 (item, index) =>
//                 (index === value.length - 1 ?
//                     'circular reference' : item));
//         }
//         return { ...value, circular: 'circular reference' };
//     }
//
//     return value;
// });

        return res.json(home);
    } catch (err) {
        res.status(500).json({ msg: err.message });
    }


    // try {
    //     const home = await Home.find();
    //     res.json(home);
    // } catch (err) {
    //     res.status(500).json({ message: err.message });
    // }
});

app.get('/journals', async (req, res) => {
  console.log('/journals');
  const dateSort = req?.dateSort || -1;
  try {
        async function getJournals(dateSort = -1) {
          return await journal.collection("journals").find({}).sort({date: dateSort}).toArray();
        }
        //await client.connect();
        const journals = await getJournals();
        console.log('/journals response: ', journals);
        res.send(journals);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/journals/:title', async (req, res) => {
  // console.log('/journals/:title: ', req, res);
  // console.log('journals/:title title: ', req?.params)
  console.log('journals/:title title2: ', req?.params.title)
  //await client.connect();
  try {
      const title = req?.params?.title.replaceAll('-', " "); // if title is in request, find just that title, otherwise return all
      const dateSort = req?.dateSort || -1; // sort DESC date by default
      const query = {title: new RegExp(title, 'i')} ;
      //{title: {$regex: /lovin' me/i}}
      console.log('final query: ', query);
      const options = {sort: {date: -1}};
      const journalEntry = await journal.collection("journals").findOne(query, {title: 1, date: 1, content: 1});
      // const journalEntry = journal.collection("journals").find({$text: {$search: title} }).sort({date: dateSort});
      console.log('final journalEntry: ', journalEntry);
      res.json(journalEntry);
    } catch (err) {
        console.log('journals/:title error: ', err);
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
