import { PlaceStructure } from '../../../types/place';
import { placeActionTypes } from './actionPlace.type';

export type PlaceAction = {
    type: string;
    payload:
        | Array<PlaceStructure>
        | PlaceStructure
        | PlaceStructure['name']
        | boolean;
};

export const placeLoadCreator = (
    payload: Array<PlaceStructure>
): PlaceAction => ({
    type: placeActionTypes.load,
    payload,
});

export const placeAddCreator = (payload: PlaceStructure): PlaceAction => ({
    type: placeActionTypes.add,
    payload,
});

export const placeUpdateCreator = (payload: PlaceStructure): PlaceAction => ({
    type: placeActionTypes.update,
    payload,
});

export const placeDeleteCreator = (
    payload: PlaceStructure['name']
): PlaceAction => ({
    type: placeActionTypes.delete,
    payload,
});
