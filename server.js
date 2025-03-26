const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Home = require('./models/Home');
const Journal = require('./models/Journal');


const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// mongoDB connection
// TODO: Change DB name from "journal"
//mongoose.connect('mongodb://localhost:27017/journal');


// mongoose.connect('mongodb://[ADMIN]:[ADMIN_PASSWORD]@localhost:27017/journal?authSource=admin&replicaSet=rs0'); // WORKS but DO NOT connect as admin on PROD

// TODO: Set up NextJS env vars for this later: https://nextjs.org/docs/pages/building-your-application/configuring/environment-variables#bundling-environment-variables-for-the-browser
// const DB_USER = process.env.DB_USER;
// const DB_PASSWORD = process.env_DB_PASSWORD;
// const DB_HOST = process.env.DB_HOST;
// mongoose.connect('mongodb://' + DB_USER + ':' + DB_PASSWORD + '@' + DB_HOST + ':27017/journal?replicaSet=rs0');

mongoose.connect('mongodb://sean:1219C15799417EA8E5902F13F313721FBA4836C1498739B582389C94F70F7905@localhost:27017/journal?replicaSet=rs0');

//mongoose.connect('mongodb+srv://myUserAdmin:D1fficultP%40ssw0rd@mongodb0.example.com/?authSource=admin&replicaSet=myRepl');

const db = mongoose.connection;

db.on('error', (error) => console.error(error))
db.once('open', ()=> console.log('Connected to MongoDB'));

// API Routes
app.get('/', (req, res) => {
    res.send('Hello from Express');
});

app.get('/homes', async (req, res) => {
    try {
        const home = await Home.find();
        res.json(home);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/journals', async (req, res) => {
    try {
        const dateSort = req?.dateSort || -1; // sort DESC date by default
        const journal = await Journal.find().sort({date: dateSort});
        res.json(journal);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.get('/journals/:title', async (req, res) => {
    try {
        const dateSort = req?.dateSort || -1; // sort DESC date by default
        const title = req?.params?.title; // if title is in request, find just that title, otherwise return all
        const journal = await Journal.find( title ? {$text: {$search: title} } : {}).sort({date: dateSort});
        res.json(journal);
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
