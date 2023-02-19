const express = require ("express")
const app = express()
const mongoose = require ("mongoose")

require("./config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

const AllJokesRoutes = require("./server/routes/jokes_routes");
AllJokesRoutes(app);

app.listen(8000, () => console.log("esto si funciona"));