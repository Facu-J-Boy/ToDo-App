import axios from "axios";
import { Dispatch } from "redux";
import { ActionTypes } from "./Types";

axios.defaults.baseURL = "http://localhost:3001/api";

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
    payload: ToDoInterface[] | [] | string
}

export interface PostToDoAction {
    type: ActionTypes.postToDo;
    payload: ToDoInterface
}

export interface NewToDo {
    id: string,
    dates: {
        text: string,
        userId: string
    }
}

export const findOrCreateUser = (dates: UserInterface | {}) => {
    return async (dispatch: Dispatch<FindOrCreateUserAction>) => {
        try {
            const response = await axios.post<UserInterface>("/user", dates);
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
    return {
        type: ActionTypes.userUndefined
    }
}

export const getToDos = (id: string) => {
    return async (dispatch: Dispatch<GetToDoAction>) => {
        try {
            const response = await axios.get<ToDoInterface[]>(`/todo/${id}`);
            dispatch({
                type: ActionTypes.getToDos,
                payload: response.data,
            })
        } catch (error) {
            console.error('Error: ', error)
        }
    }
}

export const postToDo = (dates: NewToDo) => {
    return async (dispatch: Dispatch<PostToDoAction>) => {
        try {
            const response = await axios.post<ToDoInterface>("/todo", dates);
            dispatch({
                type: ActionTypes.postToDo,
                payload: response.data
            })
        } catch (error) {
            console.error('Error: ', error);
        }
    }
}

export const deleteToDo = (id: string) => {
    return async (dispatch: Dispatch) => {
        try {            
            await axios.delete(`/todo/${id}`);
        } catch (error) {
            console.error('Error: ', error);
        }
    }
}

export const updateToDo = (id: string, text:{text: string}) => {
    return async (dispatch: Dispatch) => {
        try {
            await axios.put(`/todo/update/${id}`, text);
        } catch (error) {
            console.error('Error: ', error);
        }
    }
}