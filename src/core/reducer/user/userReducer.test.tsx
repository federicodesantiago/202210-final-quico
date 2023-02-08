import * as ac from './actionUserCreator';
import { userReducer } from './userReducer';
import { initialState, mockUser1, mockUser2 } from '../../hooks/user.hook.mock';
import { UserStructure } from '../../../types/user';
import { UserAction } from './actionUserCreator';

describe('Given the reducer', () => {
    let state: UserStructure;
    let action: UserAction;

    describe('When the action type is "user@login"', () => {
        test('Then it should return as state the login data', () => {
            state = mockUser1;
            action = ac.userLoginCreator(mockUser1);
            const result = userReducer(state, action);
            expect(result).toEqual(mockUser1);
        });
    });

    describe('When the action type is "user@logout"', () => {
        test('Then it should return the state without the data empty', () => {
            state = mockUser2;
            action = ac.userLogOutCreator(mockUser1);
            const result = userReducer(state, action);
            expect(result).toEqual(mockUser2);
        });
    });
    describe('When the action type is not valid', () => {
        test('Then it should return the state', () => {
            state = {
                name: '',
                photoURL: '',
                token: '',
                uid: '',
            };
            action = { type: 'Bad', payload: initialState };
            const result = userReducer(state, action);
            expect(result).toEqual(state);
        });
    });
});
