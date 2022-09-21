//allows us to use our .env file
require("dotenv").config();

//create the instances of express and mongo
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes/routes");
const mongoString = process.env.DATABASE_URL;

//connect the database to the server
mongoose.connect(mongoString);
const database = mongoose.connection;

//create the instance of our app with express
const app = express();

//tells our app what to use for our endpoint and the contents of the routes
app.use("/api", routes);

//Tells us if our database connected successfully or not
database.on("error", (error) => {
  console.log(error);
});

database.once("connected", () => {
  console.log("Database Connected");
});

//tell our app to use JSON
app.use(express.json());

//Listening to any changes on the server, lets us know we are started
app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});
