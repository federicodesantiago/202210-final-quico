import { render, screen } from '@testing-library/react';
import { useContext } from 'react';
import { WeatherStructure } from '../../../types/weather.type';
import { initialContextWeather, WeatherContext } from './weather.context';

const mockWeather: WeatherStructure = {
    weather: {
        0: {
            icon: 'icon',
        },
    },
    main: {
        temp: 20,
        feels_like: 25,
    },
    name: 'Madrid',
};
initialContextWeather.weather = mockWeather;

describe('Given the context AppContext', () => {
    let TestComponent: () => JSX.Element;
    describe('When a Test place Component is wrapper with this context', () => {
        beforeEach(() => {
            TestComponent = () => {
                const { weather, handleLoad } = useContext(WeatherContext);
                handleLoad();
                return <>{weather.name}</>;
            };
        });
        test('Context values should be used in the component', () => {
            render(
                <WeatherContext.Provider value={initialContextWeather}>
                    <TestComponent></TestComponent>
                </WeatherContext.Provider>
            );
            const element = screen.getByText(
                initialContextWeather.weather.name
            );
            expect(element).toBeInTheDocument();
        });
    });
});
