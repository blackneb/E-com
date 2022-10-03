import {combineReducers, createStore} from 'redux';
import {composeWithDevTools} from '@redux-devtools/extension'
import { Ilaptop } from '../Models/Models';
import userReducers from './Reducer';
const reducers = combineReducers({laptop:userReducers});
export const store = createStore(reducers,composeWithDevTools());

export interface IRootState{
    laptops:Ilaptop[];
}