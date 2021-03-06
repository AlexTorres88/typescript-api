import { characterService } from "./character-service";
import express from "express";

async function getAll(req: express.Request, res: express.Response) {
  try {
    const characters = await characterService.getAll();
    return res.status(200).send(characters);
  } catch (error) {
    return res.status(500).send();
  }
}

async function get(req: express.Request, res: express.Response) {
  try {
    const character = await characterService.get(req.params.id);
    return res.status(200).send(character);
  } catch (error) {
    return res.status(500).send();
  }
}

export const characterHandler = {
  getAll,
  get,
};
