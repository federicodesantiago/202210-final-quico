export class GetWeather {
    constructor(
        private url = 'http://api.openweathermap.org/data/2.5/weather?q=Corcubion,es&units=metric&APPID=aef84d8469219aa65d4be40902afd3ed/'
    ) {}

    async loadWeather(url = this.url) {
        const resp = await (await fetch(url)).json();
        const urlList = await Promise.all(
            resp.results.map((e: { name: string; url: string }) => fetch(e.url))
        );
        return Promise.all(urlList.map((e) => e.json()));
    }

    async getGeneralInfo(url = this.url) {
        this.url = url;
        const resp = await (await fetch(url)).json();
        return resp;
    }
}
