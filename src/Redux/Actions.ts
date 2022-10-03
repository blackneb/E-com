import { Ilaptop } from "../Models/Models";
import { ADD_LAPTOP } from "./ActionTypes";

export const addLaptop = (laptop: Ilaptop) => {
    return{
        type: ADD_LAPTOP,
        payload: laptop,
    };
};