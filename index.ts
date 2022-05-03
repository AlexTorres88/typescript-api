import express from "express";
import { characterHandler } from "./character";
const app = express();

app.get("/", (req, res) => {
  const urls = {
    characters: "/rm/characters",
    character: "/rm/character/:id",
  };
  res.send(urls);
});

app.get("/rm/characters", characterHandler.getAll);
app.get("/rm/character/:id", characterHandler.get);

app.all("*", (req, res) => {
  res.status(404).json({
    success: false,
    status: "404",
    message: "Unable to find resource",
  });
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`App listening on port: ${port}`));
