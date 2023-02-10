import { weatherMock01 } from '../../../mock/weather.mock';
import { WeatherStructure } from '../../../types/weather.type';
import { weatherActionTypes } from './action.type';
import { WeatherAction } from './actionCreators';

// const initialState: WeatherStructure = {
//     weather: {
//         0: {
//             icon: ' ',
//         },
//     },
//     main: {
//         temp: 0,
//         feels_like: 0,
//     },
//     name: ' ',
// };
export function weatherReducer(
    state = weatherMock01,
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
