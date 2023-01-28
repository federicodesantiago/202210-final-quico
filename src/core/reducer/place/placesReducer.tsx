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
                item.name === updatePlace.name ? updatePlace : item
            );
        case placeActionTypes.delete:
            const finalname = action.payload as PlaceStructure['name'];
            return state.filter((item) => item.name !== finalname);
        default:
            return [...state];
    }
}
