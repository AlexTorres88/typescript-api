import { Character, CharacterModel, Characters } from "../types";

export function characterDTO(data: Character) {
  return {
    id: data.id,
    name: data.name,
    image: data.image,
    episode: data.episode,
  };
}

export function charactersDTO(data: CharacterModel[]) {
  let res: Characters[] = [] as Characters[];
  data.forEach((value: CharacterModel) => {
    res.push({
      id: value.id,
      name: value.name,
      status: value.status,
      species: value.species,
    });
  });
  return res;
}
