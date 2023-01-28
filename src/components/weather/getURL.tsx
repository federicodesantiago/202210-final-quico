// export function getURL() {
//     function getLocation() {
//         let coordinates: string;
//         navigator.geolocation.getCurrentPosition(showPosition);
//         function showPosition(position: GeolocationPosition) {
//             coordinates = `http://api.openweathermap.org/geo/1.0/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&APPID=aef84d8469219aa65d4be40902afd3ed`;
//             return coordinates;
//         }
//         return ???
//     }

//     const handleLocation = () => {
//         getLocation();
//     };
//     console.log('URL: ', handleLocation());
// }

export function getURL() {
    function getLocation() {
        navigator.geolocation.getCurrentPosition((position) => {
            showPosition(position);
        });

        async function showPosition(position: GeolocationPosition) {
            const result =
                await `http://api.openweathermap.org/geo/1.0/reverse?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&APPID=aef84d8469219aa65d4be40902afd3ed`;
        }
    }
}
