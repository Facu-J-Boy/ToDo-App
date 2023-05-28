import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./Types";

export const POST_USER = 'POST_USER';

const url = "http://localhost:3001/api";

export interface UserInterface {
    id: string | null,
    email: string | null
}

export interface FindOrCreateUserAction {
    type: ActionTypes.findOrCreateUser;
    payload: UserInterface | null;
}

// export interface PostUserAction {
//     type: ActionTypes.postUser;
//     payload: UserInterface
// }

export const findOrCreateUser = (dates: UserInterface) => {
    console.log('getUser ejecutado')
    return async (dispatch: Dispatch<FindOrCreateUserAction>) => {
        try {
            const response = await axios.post<UserInterface>(`${url}/user`, dates);
            if (response){console.log('response: ', response)}
            const user = !response.data? null : response.data;
            dispatch({
                type: ActionTypes.findOrCreateUser,
                payload: user,
            });
        } catch (error) {
            console.error('Error:', error);
        }
    };
};

// export const postUser = (date: any) => {
//     return async (dispatch: Dispatch<PostUserAction>) => {
//         try {
//             const newUser = await axios.post<UserInterface>(`${url}/user`, date);
//             return dispatch ({
//                 type: ActionTypes.postUser,
//                 payload: newUser.data,
//             })
//         } catch (error) {
//             console.error('ERROR: ', error);
//         }
//     }
// };