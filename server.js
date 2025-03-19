const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Journal = require('./models/Journal');


const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// mongoDB connection
// TODO: Change DB name from "journal"
mongoose.connect('mongodb://localhost:27017/journal');

const db = mongoose.connection;

db.on('error', (error) => console.error(error))
db.once('open', ()=> console.log('Connected to MongoDB'));

// Routes
app.get('/', (req, res) => {
    res.send('Hello from Express');
});

app.get('/journals', async (req, res) => {
    try {
        console.log('JOURNAL: ', Journal);
        const journals = await Journal.find();
        res.json(journals);
        console.log(journals);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});


app.listen(PORT, ()=> {
   console.log(`Server running on port ${PORT}`);
});
