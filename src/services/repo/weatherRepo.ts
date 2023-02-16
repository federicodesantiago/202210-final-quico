import { Repository } from '../../types/weatherRepo';
import { WeatherStructure } from '../../types/weather.type';

export class WeatherRepo implements Repository<WeatherStructure> {
    url: string;
    constructor() {
        this.url =
            'https://api.openweathermap.org/data/2.5/weather?q=Moralzarzal,es&units=metric&APPID=aef84d8469219aa65d4be40902afd3ed';
    }
    async load(): Promise<WeatherStructure> {
        const resp = await fetch(this.url);
        if (!resp.ok)
            throw new Error(`Error ${resp.status}: ${resp.statusText}`);
        return await resp.json();
    }
}
