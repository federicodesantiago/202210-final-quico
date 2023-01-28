import { createContext } from 'react';
import { WeatherStructure } from '../../../types/weather';

type WeatherContextStructure = {
    weather: WeatherStructure;
    handleLoad: () => Promise<void>;
};

const weather = {
    weather: {
        icon: ' ',
    },
    main: {
        temp: ' ',
        feels_like: ' ',
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
