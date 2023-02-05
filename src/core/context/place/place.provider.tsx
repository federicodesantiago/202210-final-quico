import { useMemo } from 'react';
import { usePlaces } from '../../hooks/place.hook';
import { useUser } from '../../hooks/user.hook';
import { PlaceContext, UserContext } from './place.context';

export function PlaceContextProvider({ children }: { children: JSX.Element }) {
    const { getPlaces, handleLoad, handleAdd, handleDelete, handleUpdate } =
        usePlaces();

    const context = useMemo(
        () => ({
            places: getPlaces(),
            handleLoad,
            handleAdd,
            handleDelete,
            handleUpdate,
        }),
        [getPlaces, handleAdd, handleDelete, handleLoad, handleUpdate]
    );

    return (
        <PlaceContext.Provider value={context}>
            {children}
        </PlaceContext.Provider>
    );
}

export function UserContextProvider({ children }: { children: JSX.Element }) {
    const { getUser, handleLogIn, handleLogOut } = useUser();

    const context = useMemo(
        () => ({
            user: getUser(),
            handleLogIn,
            handleLogOut,
        }),

        [getUser, handleLogIn, handleLogOut]
    );

    return (
        <UserContext.Provider value={context}>{children}</UserContext.Provider>
    );
}
