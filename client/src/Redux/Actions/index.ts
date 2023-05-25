import axios from "axios";
import { Dispatch } from "redux";

export const POST_USER = 'POST_USER';

const url = "http://localhost:3001/api";

interface User {
    id: string,
    email: string
}

export const postUser = (date: any) => {
    return async (dispatch: Dispatch) => {
        try {
            const user = await axios.post <User>(`${url}/user`, date);
            return dispatch ({
                type: POST_USER,
                payload: user.data
            })
        } catch (error: any) {
            console.log(error.message)
        }
    }
}