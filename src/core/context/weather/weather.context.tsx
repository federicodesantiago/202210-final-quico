import { createContext } from 'react';
import { WeatherStructure } from '../../../types/weather.type';

export type WeatherContextStructure = {
    weather: WeatherStructure;
    handleLoad: () => Promise<void>;
};

const weather = {
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

export const initialContextWeather: WeatherContextStructure = {
    weather,
    handleLoad: async () => {
        //
    },
};

export const WeatherContext = createContext(initialContextWeather);
