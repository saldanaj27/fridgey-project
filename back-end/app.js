// import and instantiate express
// const fs = require("fs");
const express = require("express"); // CommonJS import style!
// const axios = require("axios");
var cors = require('cors');

require("dotenv").config({ silent: true });

const app = express(); // instantiate an Express object
const bodyParser = require("body-parser");
app.use(bodyParser.json()); // decode JSON-formatted incoming POST data
app.use(bodyParser.urlencoded({ extended: true })); // decode url-encoded incoming POST
app.use(cors());
// var request = require("request");


// grab all the routes (Ex: router.post("/addItem", (req, res))...)
const MyFridgeRoutes = require("./routes/MyFridge-Routes");
const ShoppingListRoutes = require("./routes/ShoppingList-Routes");
const RecommendationsRoutes = require("./routes/Recommendations-Routes");
const StorageTimeRoutes = require("./routes/StorageTime-Routes");
const UserDataRoutes = require("./routes/UserData-Routes");

app.use("/fridgeData", MyFridgeRoutes);
app.use("/shopData", ShoppingListRoutes);
app.use("/Recommendations", RecommendationsRoutes);
app.use("/storagetimeitems", StorageTimeRoutes);
app.use("/userdata", UserDataRoutes);

// export the express app we created to make it available to other modules
module.exports = app;
