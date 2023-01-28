import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './core/App/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { PlaceContextProvider } from './core/context/place/place.provider';
import { WeatherContextProvider } from './core/context/weather/weather.provider';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <WeatherContextProvider>
            <PlaceContextProvider>
                <Router>
                    <App />
                </Router>
            </PlaceContextProvider>
        </WeatherContextProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
