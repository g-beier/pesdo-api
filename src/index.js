const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("Pesdo API");
});

app.listen(3000, () => {
  console.log("Pesdo API on at http://localhost:3000/");
});
