import { UserInterface } from "../Actions";
import { Action, ActionTypes } from "../Actions/Types";

// interface User {
//     id: string,
//     email: string
// }

// interface state1 {
//     user: User | {}
// }

// const initialState: state1 = {
//     user: {}
//    };

export const userReducer = (state: UserInterface | {} = {}, action: Action) => {
    switch (action.type) {
        case ActionTypes.findOrCreateUser:
            console.log('getUser: ', action.payload)
            return action.payload  
        case ActionTypes.userUndefined:
            return action.payload 
        default:
            return state;
    }
};
