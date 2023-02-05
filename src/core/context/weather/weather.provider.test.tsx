import { render, waitFor } from '@testing-library/react';
import * as UseWeather from '../../hooks/weather.hook';
import { WeatherContextProvider } from './weather.provider';

describe('Given two ContextProvider', () => {
    describe('When we use it', () => {
        test('Then it should call the custom hook useWeather', async () => {
            const spyUseWeather = jest.spyOn(UseWeather, 'UseWeather');
            render(
                <WeatherContextProvider>
                    <></>
                </WeatherContextProvider>
            );
            await waitFor(() => {
                expect(spyUseWeather).toHaveBeenCalled();
            });
        });
    });
});
