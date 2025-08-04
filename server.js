//const envConfig = require('./envConfig');
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Home = require('./models/Home');
const Journal = require('./models/Journal');


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
    process.argv.find( (arg, index, args) => {return Number(arg) && args[index-1] === '--host'} )
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
