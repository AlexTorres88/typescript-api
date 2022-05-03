import axios from "axios";
import { characterDTO, charactersDTO } from "./dto/character-dto";
import { CharacterModel, GetAllResponse } from "./types";

async function getAll() {
  try {
    const data = await axios
      .get<GetAllResponse>("https://rickandmortyapi.com/api/character", {
        headers: {
          Accept: "application/json",
        },
      })
      .then((res) => {
        return res.data.results;
      });

    return charactersDTO(data);
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

async function getOne(id: string) {
  try {
    const data = await axios
      .get<CharacterModel>(`https://rickandmortyapi.com/api/character/${id}`, {
        headers: {
          Accept: "application/json",
        },
      })
      .then((res) => {
        return res.data;
      });

    return characterDTO(data);
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
  getOne,
};
