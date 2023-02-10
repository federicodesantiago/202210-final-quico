import { mockWeather1 } from '../../core/hooks/weather.hook.mock';

import { WeatherRepo } from './weatherRepo';

describe('Given a Task Repo', () => {
    const state = mockWeather1;
    const repo = new WeatherRepo();
    beforeEach(() => {
        global.fetch = jest.fn().mockResolvedValue({
            ok: true,
            json: jest.fn().mockResolvedValue(state),
        });
    });

    test('Then we can instantiate it', () => {
        expect(repo).toBeInstanceOf(WeatherRepo);
    });

    describe('When we use load method', () => {
        test('Then we received the weather data contents in the repo', async () => {
            const state = await repo.load();
            expect(state.main.temp).toEqual(mockWeather1.main.temp);
            expect(state.name).toEqual(mockWeather1.name);
            expect(state.weather[0].icon).toEqual(mockWeather1.weather[0].icon);
        });
        test('Then if there are NO DATA, we received a rejected promise', async () => {
            global.fetch = jest.fn().mockResolvedValue({
                ok: false,
            });
            await expect(async () => {
                await repo.load();
            }).rejects.toThrowError();
            expect(global.fetch).toHaveBeenCalled();
        });
    });
});
