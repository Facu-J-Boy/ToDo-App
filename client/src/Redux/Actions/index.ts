import axios from "axios";
import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
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
    return async (dispatch: Dispatch) => {
        try {
            const newUser = await axios.post<UserInterface>(`${url}/user`, date);
            return dispatch ({
                type: POST_USER,
                payload: newUser.data
            })
        } catch (error: any) {
            console.log(error.message)
        }
    }
};