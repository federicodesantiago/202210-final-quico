import * as ac from './actionCreators';
import { WeatherAction } from './actionCreators';
import { WeatherStructure } from '../../../types/weather.type';
import { weatherReducer } from './weatherReducer';
import { mockWeather1 } from '../../hooks/weather.hook.mock';

describe('Given the reducer', () => {
    let state: WeatherStructure;
    let action: WeatherAction;
    const initialState: WeatherStructure = {
        weather: {
            0: {
                icon: ' ',
            },
        },
        main: {
            temp: 0,
            feels_like: 0,
        },
        name: ' ',
    };
    describe('When the action type is "weather@load"', () => {
        test('Then it should return as state the login data', () => {
            state = mockWeather1;
            action = ac.weatherLoadCreator(mockWeather1);
            const result = weatherReducer(state, action);
            expect(result).toEqual(mockWeather1);
        });
    });

    describe('When the action type is not valid', () => {
        test('Then it should return the state', () => {
            state = {
                weather: {
                    0: {
                        icon: ' ',
                    },
                },
                main: {
                    temp: 0,
                    feels_like: 0,
                },
                name: ' ',
            };
            action = { type: 'Bad', payload: initialState };
            const result = weatherReducer(state, action);
            expect(result).toEqual(state);
        });
    });
});
