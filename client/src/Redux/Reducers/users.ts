import { UserInterface } from "../Actions";
import { Action, ActionTypes } from "../Actions/Types";

export const userReducer = (state: Partial<UserInterface> = {}, action: Action) => {
    switch (action.type) {
        case ActionTypes.findOrCreateUser:
            return action.payload  
        case ActionTypes.userUndefined:
            return {} 
        default:
            return state;
    }
};
