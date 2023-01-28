import { useContext, useEffect } from 'react';
import { WeatherContext } from '../../core/context/weather/weather.context';
import './weather.scss';

export function Weather() {
    const { weather, handleLoad } = useContext(WeatherContext);

    useEffect(() => {
        handleLoad();
    }, [handleLoad]);

    return (
        <>
            <div className="weather">
                <img src="./assets/icono_weather.png" alt="" />
                <p>{weather.name}</p>
                <p className="temperature">{weather.main.temp}</p>
            </div>
        </>
    );
}
