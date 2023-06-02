import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./Types";

export const POST_USER = 'POST_USER';

const url = "http://localhost:3001/api";

export interface UserInterface {
    id: string | null,
    email: string | null
}

export interface ToDoInterface {
    id: string,
    text: string,
    order: number,
    userId: string
}

export interface FindOrCreateUserAction {
    type: ActionTypes.findOrCreateUser;
    payload: UserInterface 
}

export interface UserUndefinedAction {
    type: ActionTypes.userUndefined;
}

export interface GetToDoAction {
    type: ActionTypes.getToDos;
    payload: ToDoInterface[]
}

export const findOrCreateUser = (dates: UserInterface | {}) => {
    console.log('getUser ejecutado')
    return async (dispatch: Dispatch<FindOrCreateUserAction>) => {
        try {
            const response = await axios.post<UserInterface>(`${url}/user`, dates);
            if (response){console.log('response: ', response)}
            const user = response.data
            dispatch({
                type: ActionTypes.findOrCreateUser,
                payload: user,
            });
        } catch (error) {
            console.error('Error:', error);
        }
    };
};

export const userUndefined = (): UserUndefinedAction => {
    console.log('userUndefined ejecutado')
    return {
        type: ActionTypes.userUndefined
    }
}

export const getToDos = (id: string) => {
    return async (dispatch: Dispatch<GetToDoAction>) => {
        try {
            const response = await axios.get<ToDoInterface[]>(`${url}/todo/${id}`);
            dispatch({
                type: ActionTypes.getToDos,
                payload: response.data,
            })
        } catch (error) {
            console.error('Error: ', error)
        }
    }
}