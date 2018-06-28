"use strict";

// this is JavaScript for the back-end

// Dependencies
const express = require("express");
const bodyParser = require('body-parser')

// Initialize Express
const app = express();
const PORT = process.env.PORT || 3001;

// set up Express.js to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Routes
const routes = require("./routes");
app.use(routes);

// Send every other request to the React app
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Tell express to LISTEN UP
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});