import { useCallback, useMemo, useReducer, useState } from 'react';
import * as ac from '../reducer/place/actionPlaceCreator';
import { PlaceStructure } from '../../types/place';
import { PlacesRepo } from '../../services/repo/placeRepo';
import { placeReducer } from '../reducer/place/placesReducer';

export type UsePlaces = {
    getStatus: () => Status;
    getPlaces: () => Array<PlaceStructure>;
    handleLoad: () => Promise<void>;
    handleAdd: (place: PlaceStructure) => Promise<void>;
    handleUpdate: (placePayload: Partial<PlaceStructure>) => Promise<void>;
    handleDelete: (id: PlaceStructure['name']) => Promise<void>;
};

type Status = 'Starting' | 'Loading' | 'Loaded';

export function usePlaces(): UsePlaces {
    const repo = useMemo(() => new PlacesRepo(), []);

    const initialState: Array<PlaceStructure> = [];
    const initialStatus = 'Starting' as Status;
    const [places, dispatch] = useReducer(placeReducer, initialState);

    const [status, setStatus] = useState(initialStatus);

    const getPlaces = () => places;
    const getStatus = () => status;

    const handleLoad = useCallback(async () => {
        try {
            setStatus('Loading');
            const data = await repo.load();
            dispatch(ac.placeLoadCreator(data));
            setStatus('Loaded');
        } catch (error) {
            handleError(error as Error);
        }
    }, [repo]);

    const handleAdd = async function (place: PlaceStructure) {
        try {
            const fullPlace = await repo.create(place);
            dispatch(ac.placeAddCreator(fullPlace));
        } catch (error) {
            handleError(error as Error);
        }
    };

    const handleUpdate = async function (
        placePayload: Partial<PlaceStructure>
    ) {
        try {
            const fullPlace = await repo.update(placePayload);
            dispatch(ac.placeUpdateCreator(fullPlace));
        } catch (error) {
            handleError(error as Error);
        }
    };

    const handleDelete = async function (name: PlaceStructure['name']) {
        try {
            const finalId = await repo.delete(name);
            dispatch(ac.placeDeleteCreator(finalId));
        } catch (error) {
            handleError(error as Error);
        }
    };

    const handleError = (error: Error) => {
        console.log(error.message);
    };

    return {
        getStatus,
        getPlaces,
        handleLoad,
        handleAdd,
        handleUpdate,
        handleDelete,
    };
}