import { FindOrCreateUserAction, UserUndefinedAction } from ".";

export enum ActionTypes {
    findOrCreateUser = 'GET_USER',
    userUndefined = 'USER_UNDEFINED',
}

export type Action = FindOrCreateUserAction | UserUndefinedAction