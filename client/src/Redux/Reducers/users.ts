import { UserInterface } from "../Actions";
import { Action, ActionTypes } from "../Actions/Types";

export const userReducer = (state: Partial<UserInterface> = {}, action: Action) => {
    switch (action.type) {
        case ActionTypes.findOrCreateUser:
            console.log('getUser: ', action.payload)
            return action.payload  
        case ActionTypes.userUndefined:
            console.log('state: ', state)
            return {} 
        default:
            return state;
    }
};
