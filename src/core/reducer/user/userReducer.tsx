import { UserStructure } from '../../../types/user';
import { initialState } from '../../hooks/user.hook.mock';
import { userActionTypes } from './actionUser.type';
import { UserAction } from './actionUserCreator';

export function userReducer(
    state = initialState,
    action: UserAction
): UserStructure {
    switch (action.type) {
        case userActionTypes.login:
            const loginUser = action.payload;
            return loginUser;
        case userActionTypes.logout:
            const logoutUser = initialState;
            return logoutUser;
        default:
            return initialState;
    }
}
