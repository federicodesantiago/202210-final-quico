import { useContext, useEffect } from 'react';
import { WeatherContext } from '../../core/context/weather/weather.context';
import './weather.scss';

export function Weather() {
    const { weather, handleLoad } = useContext(WeatherContext);

    useEffect(() => {
        handleLoad();
    }, [handleLoad]);

    const temp = weather.main.temp.toString();

    return (
        <>
            <div className="weather">
                <img
                    src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
                    alt="Weather icon"
                />
                <p id="wheatherLocation">{weather.name}</p>
                <p className="temperature">{temp.slice(0, 1)}ºC</p>
            </div>
        </>
    );
}
