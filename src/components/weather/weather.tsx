import { useContext } from 'react';
import { WeatherContext } from '../../core/context/weather.context';
import './weather.scss';

export function Weather() {
    const { weatherData } = useContext(WeatherContext);

    return (
        <>
            <div className="weather">
                <img src="./assets/icono_weather.png" alt="" />
                <p>Moralzarzal</p>
                <p className="temperature">25ºC</p>
            </div>
        </>
    );
}
