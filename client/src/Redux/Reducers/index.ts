import { 
    POST_USER 
} from "../Actions";

const initialState = {
    user: {},
   };
   
   export default function reducer(state = initialState, action: any) {
    switch (action.type) {
        case POST_USER:
            return {
                ...state,
                user: action.payload,
            }
    
        default:
            return state;
    }
   }