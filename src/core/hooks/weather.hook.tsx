import { useCallback, useMemo, useReducer } from 'react';
import { WeatherRepo } from '../../services/repo/weatherRepo';
import { WeatherStructure } from '../../types/weather.type';
import { weatherLoadCreator } from '../reducer/weather/actionCreators';
import { weatherReducer } from '../reducer/weather/weatherReducer';

export function UseWeather() {
    const repo = useMemo(() => new WeatherRepo(), []);
    const initialState: WeatherStructure = {
        weather: {
            0: {
                icon: '',
            },
        },
        main: {
            temp: 0,
            feels_like: 0,
        },
        name: '',
    };

    const [weather, dispatch] = useReducer(weatherReducer, initialState);

    const handleLoad = useCallback(async () => {
        const data = await repo.load();
        dispatch(weatherLoadCreator(data));
    }, [repo]);

    return {
        weather,
        handleLoad,
    };
}
