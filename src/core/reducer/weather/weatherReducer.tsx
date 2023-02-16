import { weatherMock01 } from '../../../mock/weather.mock';
import { WeatherStructure } from '../../../types/weather.type';
import { weatherActionTypes } from './action.type';
import { WeatherAction } from './actionCreators';

export function weatherReducer(
    state = weatherMock01,
    action: WeatherAction
): WeatherStructure {
    if (action.type === weatherActionTypes.load) {
        const loadedWeather = action.payload as WeatherStructure;
        return loadedWeather;
    } else {
        return state;
    }
}
