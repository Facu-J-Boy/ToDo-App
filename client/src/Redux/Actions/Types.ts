import { GetUserAction, PostUserAction } from ".";

export enum ActionTypes {
    getUser = 'GET_USER',
    postUser = 'POST_USER',
}

export type Action = GetUserAction | PostUserAction;