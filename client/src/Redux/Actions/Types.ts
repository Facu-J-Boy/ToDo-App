import { FindOrCreateUserAction, GetToDoAction, PostToDoAction, UserUndefinedAction } from ".";

export enum ActionTypes {
    findOrCreateUser = 'GET_USER',
    userUndefined = 'USER_UNDEFINED',
    getToDos = 'GET_TODOS',
    postToDo = 'POST_TODO',
}

export type Action = FindOrCreateUserAction | UserUndefinedAction | GetToDoAction | PostToDoAction