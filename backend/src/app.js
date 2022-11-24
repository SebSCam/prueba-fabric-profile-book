const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

app.set("port", process.env.PORT || 3001);

//Middlewares
app.use(morgan("dev")); //dev connection logs
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Routes
app.use("/profiles", require("./routes/profiles"));

module.exports = app;