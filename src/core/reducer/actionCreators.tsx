import { WeatherStructure } from '../../types/weather';
import { weatherActionTypes } from './action.type';

export type WeatherAction = {
    type: string;
    payload: WeatherStructure;
};

export const weatherLoadCreator = (
    payload: WeatherStructure
): WeatherAction => ({
    type: weatherActionTypes.load,
    payload,
});
