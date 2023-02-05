import { WeatherStructure } from '../types/weather.type';

export const weatherMock01: WeatherStructure = {
    weather: {
        0: {
            icon: '../../public/assets/icono_weather.png ',
        },
    },
    main: {
        temp: 20,
        feels_like: 25,
    },
    name: 'Viena',
};
