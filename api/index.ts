const mongoose = require("mongoose");
const cors = require("cors");
const Home = require('../models/Home');
const Journal = require('../models/Journal');


const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());



mongoose.connect('mongodb://sean:1219C15799417EA8E5902F13F313721FBA4836C1498739B582389C94F70F7905@127.0.0.1:27017/journal?replicaSet=rs0').
    catch( error => { console.log('Connection error: ', error); } );

//mongoose.connect('mongodb+srv://myUserAdmin:D1fficultP%40ssw0rd@mongodb0.example.com/?authSource=admin&replicaSet=myRepl');

mongoose.connection.on('error', err => {
  console.log('mongoDB server error: ', err);
});

mongoose.connection.on('disconnected', res => {
  console.log('mongoDB server disconnected: ', res);
});

const db = mongoose.connection;

db.on('error', (error) => console.error(error))
db.once('open', ()=> console.log('Connected to MongoDB'));


app.get("/", (req, res) => res.send("Express on Vercel"));

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


app.listen(port, () => console.log(`Server ready on port ${port}.`));

module.exports = app;
