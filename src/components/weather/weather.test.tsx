import { render, screen, waitFor } from '@testing-library/react';
import {
    WeatherContext,
    WeatherContextStructure,
} from '../../core/context/weather/weather.context';
import { weatherMock01 } from '../../mock/weather.mock';
import { Weather } from './weather';

describe('Given the "weather" component', () => {
    const handleLoad = jest.fn();
    describe('When data are provided in the component', () => {
        beforeEach(() => {
            const mockContext = {
                weather: weatherMock01,
                handleLoad,
            } as unknown as WeatherContextStructure;
            render(
                <WeatherContext.Provider value={mockContext}>
                    <Weather></Weather>
                </WeatherContext.Provider>
            );
        });
        test('The render contain', () => {
            const element = screen.getByText(weatherMock01.name);
            expect(element).toBeInTheDocument();
        });
        test(`Then the handleLoad function should be call`, async () => {
            await waitFor(() => {
                expect(handleLoad).toHaveBeenCalled();
            });
        });
    });
});
