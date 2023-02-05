import { UserStructure } from '../../../types/user';
import { userActionTypes } from './actionUser.type';

export type UserAction = {
    type: string;
    payload: UserStructure;
};

export const userLoginCreator = (payload: UserStructure): UserAction => ({
    type: userActionTypes.login,
    payload,
});

export const userLogOutCreator = (payload: UserStructure): UserAction => ({
    type: userActionTypes.logout,
    payload,
});
