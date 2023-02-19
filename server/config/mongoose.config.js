const mongoose = require ("mongoose");
mongoose.connect("mongodb://localhost/jokes_api", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("yupi estas conectado"))
    .catch(err => console.log("ups! no te pudiste conectar", err));