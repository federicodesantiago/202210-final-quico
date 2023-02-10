import { WeatherRepo } from '../../services/repo/weatherRepo';
import { WeatherStructure } from '../../types/weather.type';

export const mockWeather1: WeatherStructure = {
    weather: {
        0: {
            icon: 'icon',
        },
    },
    main: {
        temp: 20,
        feels_like: 25,
    },
    name: 'Moralzarzal',
};
export const mockValidRepoResponse = () => {
    (WeatherRepo.prototype.load as jest.Mock).mockResolvedValue(mockWeather1);
};
