// console.log("Hello world")

import express from "express";
import * as path from "node:path";

const app = express();
app.get("/api/train", (req, res) => {
  res.sendFile(path.resolve("../public/train.json"));
});

app.listen(3000);
