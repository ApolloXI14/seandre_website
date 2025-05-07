const mongoose = require("mongoose");
const homeSchema = new mongoose.Schema({
    _id: {
      type: Number,
      required: true
    },
    title: {
        type: String,
        required: true,
    },
    date: {
        type: Number,
        required: true
    },
    content: {
        type: String,
        required: true
    }
});
module.exports = mongoose.model("Home", homeSchema);
