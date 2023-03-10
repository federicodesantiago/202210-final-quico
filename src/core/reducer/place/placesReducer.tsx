import { PlaceStructure } from '../../../types/place';
import { placeActionTypes } from './actionPlace.type';
import { PlaceAction } from './actionPlaceCreator';

export function placeReducer(
    state: Array<PlaceStructure>,
    action: PlaceAction
): Array<PlaceStructure> {
    switch (action.type) {
        case placeActionTypes.load:
            const loadedPlaces = action.payload as Array<PlaceStructure>;
            return loadedPlaces;
        case placeActionTypes.add:
            const addedPlace = action.payload as PlaceStructure;
            return [...state, addedPlace];
        case placeActionTypes.update:
            const updatePlace = action.payload as PlaceStructure;
            return state.map((item) =>
                item.id === updatePlace.id ? updatePlace : item
            );
        case placeActionTypes.delete:
            const finalID = action.payload as PlaceStructure['id'];
            return state.filter((item) => item.id !== finalID);
        default:
            return [...state];
    }
}
