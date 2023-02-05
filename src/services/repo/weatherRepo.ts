import { Repository } from '../../types/weatherRepo';
import { WeatherStructure } from '../../types/weather.type';

export class WeatherRepo implements Repository<WeatherStructure> {
    static result: string;
    // static getLocation() {
    //     let coordinatesURL: string;
    //     navigator.geolocation.getCurrentPosition(showPosition);
    //     function showPosition(position: GeolocationPosition) {
    //         coordinatesURL = `http://api.openweathermap.org/geo/1.0/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&APPID=aef84d8469219aa65d4be40902afd3ed`;
    //         const weatherDOM = document.getElementById('wheatherLocation');
    //         if (weatherDOM === null) {
    //             console.log(Error);
    //         } else {
    //             weatherDOM.innerHTML = 'hola';
    //         }

    //         WeatherRepo.result = coordinatesURL;
    //         return coordinatesURL;
    //     }
    // }

    url: string;
    constructor() {
        // WeatherRepo.getLocation();
        this.url =
            'http://api.openweathermap.org/data/2.5/weather?q=Moralzarzal,es&units=metric&APPID=aef84d8469219aa65d4be40902afd3ed';
        // WeatherRepo.result;
    }

    async load(): Promise<WeatherStructure> {
        const resp = await fetch(this.url);
        if (!resp.ok)
            throw new Error(`Error ${resp.status}: ${resp.statusText}`);
        return await resp.json();
    }

    async create(
        payload: Partial<WeatherStructure>
    ): Promise<WeatherStructure> {
        const resp = await fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-type': 'application/json',
            },
        });
        if (!resp.ok)
            throw new Error(`Error ${resp.status}: ${resp.statusText}`);
        return await resp.json();
    }
}
