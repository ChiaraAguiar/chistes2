const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema({
    setup: String,
    punchline: String
});

const Jokes = mongoose.models("Jokes", JokeSchema);

modules.exports = Jokes;