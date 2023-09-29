const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const jsxEngine = require("jsx-view-engine");
const dotenv = require("dotenv");
const logsController = require('./controllers/logs');
const foodController = require('./controllers/foodlogs');

const app = express();
app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());
app.use(methodOverride("_method"));

app.use(express.urlencoded({ extended: false }));
app.use('/', logsController);
app.use('/', foodController);

dotenv.config();

const mongoURI = process.env.MONGO_URI;
const db = mongoose.connection;
mongoose.connect(mongoURI);

db.on("error", (err) => console.log(err.message + " is mongodb not running?"));
db.on("open", () => console.log("mongo connected: ", mongoURI));
db.on("close", () => console.log("mongo disconnected"));

app.listen(3000, function () {
  console.log("Listening on port 3000");
});
