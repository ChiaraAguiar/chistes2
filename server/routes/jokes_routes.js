const JokeController = require("../controllers/joke_controllers")

modules.exports = app => {
    app.get("/api/jokes/", JokeController.findAllJokes);
    app.get("/api/jokes/random", JokeController.findRandomJokes);
    app.get("/api/jokes/:id", JokeController.findAoneJoke);
    app.put("/api/jokes/update/:id", JokeController.updateJoke);
    app.post("/api/jokes/new", JokeController.createnewJoke);
    app.delete("/api/jokes/delete/:id", JokeController.deleteexistJoke);
};