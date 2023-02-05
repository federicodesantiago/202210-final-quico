/* eslint-disable @typescript-eslint/no-empty-function */
import { createContext } from 'react';
import { PlaceStructure } from '../../../types/place';
import { UserStructure } from '../../../types/user';
import { UsePlaces } from '../../hooks/place.hook';

export type PlaceContextStructure = Omit<
    UsePlaces,
    'getStatus' | 'getPlaces'
> & {
    places: Array<PlaceStructure>;
};

export type UsersContextStructure = {
    user: UserStructure;
    handleLogIn: () => Promise<void>;
    handleLogOut: () => Promise<void>;
};

const user = {
    name: '',
    photoURL: '',
    token: '',
    uid: '',
};

export const initialUserContext: UsersContextStructure = {
    user,
    handleLogIn: async () => {},
    handleLogOut: async () => {},
};

export const initialContext: PlaceContextStructure = {
    places: [],
    handleLoad: async () => {},
    handleAdd: async (place: PlaceStructure) => {},
    handleDelete: async (id: string) => {},
    handleUpdate: async (placePayload: Partial<PlaceStructure>) => {},
};

export const PlaceContext = createContext(initialContext);
export const UserContext = createContext(initialUserContext);
