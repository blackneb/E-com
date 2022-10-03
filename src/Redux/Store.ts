import {combineReducers, createStore} from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension'
import { Ilaptop } from '../Models/Models';
import laptopReducers from './Reducer';
import { tvReducers } from './Reducer';
import { accessoriesReducers } from './Reducer';
import { bookReducers } from './Reducer';
import { phoneReducers } from './Reducer';
const reducers = combineReducers(
    {
        laptop:laptopReducers, 
        phone:phoneReducers,
        tv:tvReducers,
        accessories:accessoriesReducers,
        books:bookReducers,
    });
export const store = createStore(reducers,composeWithDevTools());

export interface IRootState{
    laptops:Ilaptop[];
}