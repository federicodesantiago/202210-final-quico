import { WeatherStructure } from '../../types/weather';
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
            return action.payload as WeatherStructure;
        default:
            return state;
    }
}
