export type CharacterModel = {
  id: string;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: any;
  location: any;
  image: string;
  episode: string[];
  url: string;
  created: string;
};

export type Characters = Pick<
  CharacterModel,
  "id" | "name" | "status" | "species"
>;
export type Character = Pick<
  CharacterModel,
  "id" | "name" | "image" | "episode"
>;

export type GetAllResponse = {
  results: CharacterModel[];
};
