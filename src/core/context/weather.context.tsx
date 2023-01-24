import { createContext } from 'react';
import { WeatherStructure } from '../../types/weather';

type WeatherContextStructure = {
    weatherData: Array<WeatherStructure>;
    handleLoad: () => Promise<void>;
};

export const initialContext: WeatherContextStructure = {
    weatherData: [],
    handleLoad: async () => {
        //
    },
};

export const WeatherContext = createContext(initialContext);
