import { useCallback, useMemo, useReducer } from 'react';
import { WeatherRepo } from '../../services/repo/weatherRepo';
import { WeatherStructure } from '../../types/weather';
import { weatherLoadCreator } from '../reducer/weather/actionCreators';
import { weatherReducer } from '../reducer/weather/weatherReducer';

export function UseWeather() {
    const repo = useMemo(() => new WeatherRepo(), []);
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

    const [weather, dispatch] = useReducer(weatherReducer, initialState);

    const handleLoad = useCallback(async () => {
        const data = await repo.load();
        dispatch(weatherLoadCreator(data));
        console.log('data:', data);
    }, [repo]);

    return {
        weather,
        handleLoad,
    };
}
