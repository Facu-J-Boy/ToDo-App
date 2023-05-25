import axios from "axios";
import { Dispatch } from "redux";

export const POST_USER = 'POST_USER';
export const GET_USER = 'GET_USER';

const url = "http://localhost:3001/api";

interface User {
    id: string,
    email: string
}

export const getUser = (id: string) => {
    return async (dispatch: Dispatch) => {
        try {
            const user = await axios.get <User | null>(`${url}/user/${id}`);
            return dispatch ({
                type: GET_USER,
                payload: user.data,
            })
        } catch (error) {
            
        }
    }
};

export const postUser = (date: any) => {
    return async (dispatch: Dispatch) => {
        try {
            const newUser = await axios.post <User>(`${url}/user`, date);
            return dispatch ({
                type: POST_USER,
                payload: newUser.data
            })
        } catch (error: any) {
            console.log(error.message)
        }
    }
};