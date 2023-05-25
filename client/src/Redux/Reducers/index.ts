import { 
    POST_USER,
    GET_USER
} from "../Actions";

const initialState = {
    user: {},
   };
   
   export default function reducer(state = initialState, action: any) {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                user: action.payload,
            };
            
        case POST_USER:
            return {
                ...state,
                user: action.payload,
            }
    
        default:
            return state;
    }
   }