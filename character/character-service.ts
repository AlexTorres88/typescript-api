import { characterRepository } from "../character";

async function getAll() {
  const characters = await characterRepository.getAll();
  return characters;
}

export const characterService = {
  getAll,
};
