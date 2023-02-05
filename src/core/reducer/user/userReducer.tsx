import { UserStructure } from '../../../types/user';
import { userActionTypes } from './actionUser.type';
import { UserAction } from './actionUserCreator';

const initialState: UserStructure = {
    name: '',
    photoURL: '',
    token: '',
    uid: '',
};

export function userReducer(
    state = initialState,
    action: UserAction
): UserStructure {
    switch (action.type) {
        case userActionTypes.login:
            const loginUser = action.payload as UserStructure;
            return loginUser;
        case userActionTypes.logout:
            const logoutUser = initialState;
            return logoutUser;
        default:
            return initialState;
    }
}
