import { WeatherStructure } from '../../../types/weather';
import { weatherActionTypes } from './action.type';
import { WeatherAction } from './actionCreators';

const initialState: WeatherStructure = {
    weather: {
        icon: ' ',
    },
    main: {
        temp: ' ',
        feels_like: ' ',
    },
    name: ' ',
};
export function weatherReducer(
    state = initialState,
    action: WeatherAction
): WeatherStructure {
    switch (action.type) {
        case weatherActionTypes.load:
            const loadedWeather = action.payload as WeatherStructure;
            return loadedWeather;
        default:
            return state;
    }
}
