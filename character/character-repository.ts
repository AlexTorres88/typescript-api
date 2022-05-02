import axios, { AxiosResponse } from "axios";
import { json } from "express";

export type Character = {
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

type Characters = Pick<Character, "id" | "name" | "status" | "species">;

type Response = {
  results: Character[];
};

async function getAll() {
  let res: Characters[] = [] as Characters[];

  try {
    const data = await axios
      .get<Response>("https://rickandmortyapi.com/api/character", {
        headers: {
          Accept: "application/json",
        },
      })
      .then((res) => {
        return res.data.results;
      });

    data.forEach((value: Character) => {
      res.push({
        id: value.id,
        name: value.name,
        status: value.status,
        species: value.species,
      });
    });

    return res;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "An unexpected error occurred";
    }
  }
}

export const characterRepository = {
  getAll,
};
