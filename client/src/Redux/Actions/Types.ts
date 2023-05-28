import { FindOrCreateUserAction } from ".";

export enum ActionTypes {
    findOrCreateUser = 'GET_USER',
}

export type Action = FindOrCreateUserAction