const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from GKE! This is the new version. Test it again.");
});

app.listen(3000, () => {
  console.log("Version 2 deployed! Test again 5.");
});