// Import packages
const express = require("express");
const home = require("./routes/home");
const fs = require("fs");

// Middlewares
const app = express();
app.use(express.json());

// Routes
app.use("/home", home);

app.get("/test", (request, response) => {
  console.log(__dirname);
  response.sendfile(__dirname + "./index.html");
});

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
