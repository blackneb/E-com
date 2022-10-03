import { Ilaptop,ILaptopActionModel } from "../Models/Models";
import { Itv,ITvActionModel } from "../Models/Models";
import { Iphone,IPhoneActionModel } from "../Models/Models";
import { Iaccessories,IAccessoriesActionModel } from "../Models/Models";
import { Ibook,IBookActionModel } from "../Models/Models";
import { ADD_LAPTOP,ADD_ACCESSORIES, ADD_BOOK, ADD_IMAGES, ADD_PHONE, ADD_TV } from "./ActionTypes";
const initialState:Ilaptop[]=[];
const initialStates:Iphone[]=[];
const initialStatess:Itv[]=[];
const initialStatesss:Iaccessories[]=[];
const initialStatebook:Ibook[]=[];

const laptopReducers = (state=initialState, action:ILaptopActionModel) => {
    const {type, payload} = action;
    switch(type){
        case ADD_LAPTOP:
            return [...state,payload];
        default:
            return state;
    };
};

export const phoneReducers = (state=initialStates, action:IPhoneActionModel) => {
    const {type, payload} = action;
    switch(type){
        case ADD_PHONE:
            return [...state,payload];
        default:
            return state;
    };
};

export const tvReducers = (state=initialStatess, action:ITvActionModel) => {
    const {type,payload} = action;
    switch(type){
        case ADD_TV:
            return [...state,payload];
        default:
            return state;
    };
};

export const accessoriesReducers = (state=initialStatesss, action:IAccessoriesActionModel) => {
    const {type,payload} = action;
    switch(type){
        case ADD_ACCESSORIES:
            return [...state,payload];
        default:
            return state;
    };
};

export const bookReducers = (state=initialStatebook, action:IBookActionModel) => {
    const {type,payload} = action;
    switch(type){
        case ADD_BOOK:
            return [...state,payload];
        default:
            return state;
    };
};

export default laptopReducers;