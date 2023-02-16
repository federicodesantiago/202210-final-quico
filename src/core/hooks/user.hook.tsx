import { useCallback, useMemo, useReducer, useState } from 'react';
import * as ac from '../reducer/user/actionUserCreator';
import { UserStructure } from '../../types/user';
import { userReducer } from '../reducer/user/userReducer';
import { UserRepo } from '../../services/repo/userRepo';

export type UseUser = {
    getStatus: () => Status;
    getUser: () => UserStructure;
    handleLogIn: () => Promise<void>;
    handleLogOut: () => Promise<void>;
};

type Status = 'Starting' | 'Loading' | 'Loaded';

export function useUser(): UseUser {
    const repo = useMemo(() => new UserRepo(), []);
    const initialState: UserStructure = {
        name: '',
        photoURL: '',
        token: '',
        uid: '',
    };

    const initialStatus = 'Starting' as Status;

    const [user, dispatch] = useReducer(userReducer, initialState);

    const [status, setStatus] = useState(initialStatus);

    const getUser = () => user;
    const getStatus = () => status;

    const handleLogIn = useCallback(async () => {
        try {
            setStatus('Loading');
            const data = await repo.login();
            dispatch(ac.userLoginCreator(data));
            setStatus('Loaded');
            console.log('loginhook');
        } catch (error) {
            console.log('error login');
        }
    }, [repo]);

    async function handleLogOut(): Promise<void> {
        try {
            const data = await repo.logout();
            dispatch(ac.userLogOutCreator(data));
            console.log('logouthook');
        } catch (error) {}
    }

    return {
        getStatus,
        getUser,
        handleLogIn,
        handleLogOut,
    };
}
