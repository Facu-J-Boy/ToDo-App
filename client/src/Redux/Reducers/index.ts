import { combineReducers } from "redux";
import { userReducer } from "./users";
import { ToDoInterface, UserInterface } from "../Actions";
import { todoReducer } from "./todos";

export interface StoreState {
    user: UserInterface | {};
    todos: ToDoInterface[] | string;
    [key: string]: any;
}
   
   export const reducers = combineReducers <StoreState >({
    user: userReducer,
    todos: todoReducer,
   });