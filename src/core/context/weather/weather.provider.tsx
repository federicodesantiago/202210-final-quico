import { useMemo } from 'react';
import { UseWeather } from '../../hooks/weather.hook';
import { WeatherContext } from './weather.context';

export function WeatherContextProvider({
    children,
}: {
    children: JSX.Element;
}) {
    const { weather, handleLoad } = UseWeather();

    const context = useMemo(
        () => ({
            weather,
            handleLoad,
        }),
        [weather, handleLoad]
    );

    return (
        <WeatherContext.Provider value={context}>
            {children}
        </WeatherContext.Provider>
    );
}
