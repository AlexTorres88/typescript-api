"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const character_1 = require("./character");
const app = (0, express_1.default)();
app.get("/", (req, res) => {
    const urls = {
        characters: "/rm/characters",
        character: "/rm/character/:id",
    };
    res.send(urls);
});
app.get("/rm/characters", character_1.characterHandler.getAll);
app.get("/rm/character/:id", character_1.characterHandler.get);
app.all("*", (req, res) => {
    res.status(404).json({
        success: false,
        status: "404",
        message: "Unable to find resource",
    });
});
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`App listening on port: ${port}`));
