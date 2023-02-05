export type WeatherStructure = {
    weather: {
        0: {
            icon: string;
        };
    };
    main: {
        temp: number;
        feels_like: number;
    };
    name: string;
};
