import { combineReducers } from "redux";
import { userReducer } from "./users";
import { UserInterface } from "../Actions";

export interface StoreState {
    user: UserInterface | {};
    [key: string]: any;
}
   
   export const reducers = combineReducers <StoreState >({
    user: userReducer
   });