import express from "express";
import { characterHandler } from "./character";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from express");
});

app.get("/rm/characters", characterHandler.getAll);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App listening on port: ${port}`));
