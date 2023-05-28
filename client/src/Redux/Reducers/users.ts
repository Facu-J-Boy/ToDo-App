import { GetUserAction } from "../Actions";
import { ActionTypes } from "../Actions/Types";

interface User {
    id: string,
    email: string
}

interface state1 {
    user: User | {}
}

const initialState: state1 = {
    user: {}
   };

export const userReducer = (state: User | null = null, action: GetUserAction) => {
    switch (action.type) {
        case ActionTypes.getUser:
            console.log('Payload: ', action.payload)
            return action.payload;    
        default:
            return state;
    }
};
