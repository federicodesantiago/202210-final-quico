import { PlaceStructure } from '../../../types/place';
import {
    mockPlace1,
    mockPlace2,
    mockPlaces,
} from '../../hooks/place.hook.mock';
import * as ac from './actionPlaceCreator';
import { PlaceAction } from './actionPlaceCreator';
import { placeReducer } from './placesReducer';

describe('Given the reducer', () => {
    let state: Array<PlaceStructure>;
    let action: PlaceAction;

    describe('When the action type is "places@load"', () => {
        test('Then it should return as state the loaded data', () => {
            state = [];
            action = ac.placeLoadCreator(mockPlaces);
            const result = placeReducer(state, action);
            expect(result).toEqual(mockPlaces);
        });
    });

    describe('When the action type is "places@add"', () => {
        test('Then it should return the state with the data added', () => {
            state = [mockPlace1];
            action = ac.placeAddCreator(mockPlace2);
            const result = placeReducer(state, action);
            expect(result).toEqual([mockPlace1, mockPlace2]);
        });
    });

    describe('When the action type is "places@update"', () => {
        test('Then it should return the state with the data updated', () => {
            mockPlace1.id = '002';
            const updatePlace: PlaceStructure = {
                ...mockPlace1,
                isFavorite: true,
                id: '002',
            };

            state = [mockPlace1, mockPlace2];
            action = ac.placeUpdateCreator(updatePlace);
            const result = placeReducer(state, action);
            expect(result).toEqual([updatePlace, mockPlace2]);
        });
    });

    describe('When the action type is "places@delete"', () => {
        test('Then it should return the state without the data deleted', () => {
            state = [mockPlace1];
            action = ac.placeDeleteCreator(mockPlace1.id);
            const result = placeReducer(state, action);
            expect(result).toEqual([]);
        });
    });

    describe('When the action type is not valid', () => {
        test('Then it should return the state', () => {
            state = [];
            action = { type: 'Bad', payload: 'Test' };
            const result = placeReducer(state, action);
            expect(result).toEqual(state);
        });
    });
});
