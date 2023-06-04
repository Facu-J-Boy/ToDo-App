import { ToDoInterface } from "../Actions/";
import { Action, ActionTypes } from "../Actions/Types";

export const todoReducer = (state: ToDoInterface[] | string = [], action: Action) => {
    switch(action.type) {
        case ActionTypes.getToDos:
            console.log('getTodos: ', action.payload);
            return action.payload
        default:
            return state
    }
}