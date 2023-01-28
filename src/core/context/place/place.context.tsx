import { createContext } from 'react';
import { PlaceStructure } from '../../../types/place';
import { UsePlaces } from '../../hooks/place.hook';

export type PlaceContextStructure = Omit<
    UsePlaces,
    'getStatus' | 'getPlaces'
> & {
    places: Array<PlaceStructure>;
};

export const initialContext: PlaceContextStructure = {
    places: [],
    handleLoad: async () => {
        //
    },
    handleAdd: async (place: PlaceStructure) => {
        //
    },
    handleDelete: async (id: string) => {
        //
    },
    handleUpdate: async (placePayload: Partial<PlaceStructure>) => {
        //
    },
};

export const PlaceContext = createContext(initialContext);
