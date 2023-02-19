const Jokes = require("../models/joke_models");

modules.exports.getAllJokes = (req, res) => {
    Joke.find()
        .then(allJokes => res.json({ jokes: allJokes }))
        .catch(err => res.json({ message: "ups! no te pudiste conectar", error: err }));
};

modules.exports.getAJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(oneJoke => res.json({ joke: oneJoke }))
        .catch(err => res.json({ message: "ups! no te pudiste conectar", error: err }));
};

modules.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then(newJoke => res.json({ joke: newJoke }))
        .catch(err => res.json({ message: "ups! no te pudiste conectar", error: err }));
};

modules.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(updatedJoke => res.json({ joke: updatedJoke }))
        .catch(err => res.json({ message: "ups! no te pudiste conectar", error: err }));
};

modules.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(results => res.json({ result: results }))
        .catch(err => res.json({ message: "ups! no te pudiste conectar", error: err }));
};