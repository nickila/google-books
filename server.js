const express = require("express");
const mongoose = require("mongoose");
// const routes = require("./routes");
const db = require("./models");
// const Book = require("./models/book");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("/api/books", function(req, res) {
  db.Book
  .create(req.body, console.log(req.body))
  .then(dbModel => res.json(dbModel))
  .catch(err => res.status(422).json(err));
})


// Define API routes here
// app.use(routes);
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/googlebooks", { useNewUrlParser: true });

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
