import { useCallback, useMemo, useReducer } from 'react';
import { WeatherStructure } from '../../types/weather';
import { weatherLoadCreator } from '../reducer/actionCreators';
import { weatherReducer } from '../reducer/weatherReducer';
import { weatherInitial } from '../model/weather.model';
import { GetWeather } from '../../services/repo/getWeather';

export function UseWeather() {
    const weatherApi = useMemo(() => new GetWeather(), []);

    const initialState: WeatherStructure = weatherInitial;

    const [weather, dispatch] = useReducer(weatherReducer, initialState);

    const handleLoad = useCallback(async () => {
        const weatherData = await weatherApi.loadWeather();
        dispatch(weatherLoadCreator(weatherData));
    }, [weatherApi]);

    return {
        weather,
        handleLoad,
    };
}
