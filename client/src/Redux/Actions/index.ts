import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./Types";

export const POST_USER = 'POST_USER';

const url = "http://localhost:3001/api";

export interface UserInterface {
    id: string,
    email: string
}

export interface GetUserAction {
    type: ActionTypes.getUser;
    payload: UserInterface | null;
}

export interface PostUserAction {
    type: ActionTypes.postUser;
    payload: UserInterface
}

export const getUser = (id: string) => {
    console.log('getUser ejecutado')
    return async (dispatch: Dispatch<GetUserAction>) => {
        try {
            const response = await axios.get<UserInterface>(`http://localhost:3001/api/user/${id}`);
            if (response){console.log('response: ', response)}
            const user = !response.data? null : response.data;
            dispatch({
                type: ActionTypes.getUser,
                payload: user,
            });
        } catch (error) {
            console.error('Error:', error);
        }
    };
};

export const postUser = (date: any) => {
    return async (dispatch: Dispatch<PostUserAction>) => {
        try {
            const newUser = await axios.post<UserInterface>(`${url}/user`, date);
            return dispatch ({
                type: ActionTypes.postUser,
                payload: newUser.data,
            })
        } catch (error) {
            console.error('ERROR: ', error);
        }
    }
};