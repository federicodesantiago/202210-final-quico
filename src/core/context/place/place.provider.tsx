import { useMemo } from 'react';
import { usePlaces } from '../../hooks/place.hook';
import { PlaceContext } from './place.context';

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
