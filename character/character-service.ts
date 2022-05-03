import { characterRepository } from "./character-repository";

async function getAll() {
  const characters = await characterRepository.getAll();
  return characters;
}

async function get(id: string) {
  const character = await characterRepository.getOne(id);
  return character;
}

export const characterService = {
  getAll,
  get,
};
