import { Ilaptop,ILaptopActionModel } from "../Models/Models";
import { ADD_LAPTOP } from "./ActionTypes";
const initialState:Ilaptop[]=[];

const userReducers = (state=initialState, action:ILaptopActionModel) => {
    const {type, payload} = action;
    switch(type){
        case ADD_LAPTOP:
            return [...state,payload];
        default:
            return state;
    }
};

export default userReducers;