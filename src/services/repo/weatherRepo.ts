import { Repository } from '../../types/weatherRepo';
import { WeatherStructure } from '../../types/weather';

export class WeatherRepo implements Repository<WeatherStructure> {
    constructor(
        private url = 'http://api.openweathermap.org/data/2.5/weather?q=Corcubion,es&units=metric&APPID=aef84d8469219aa65d4be40902afd3ed/'
    ) {}

    async load(): Promise<WeatherStructure[]> {
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
