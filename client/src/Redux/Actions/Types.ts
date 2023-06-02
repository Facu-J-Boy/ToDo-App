import { FindOrCreateUserAction, GetToDoAction, UserUndefinedAction } from ".";

export enum ActionTypes {
    findOrCreateUser = 'GET_USER',
    userUndefined = 'USER_UNDEFINED',
    getToDos = 'GET_TODOS',
}

export type Action = FindOrCreateUserAction | UserUndefinedAction | GetToDoAction