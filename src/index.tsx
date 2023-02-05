import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './core/App/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import {
    PlaceContextProvider,
    UserContextProvider,
} from './core/context/place/place.provider';
import { WeatherContextProvider } from './core/context/weather/weather.provider';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <UserContextProvider>
            <WeatherContextProvider>
                <PlaceContextProvider>
                    <Router>
                        <App />
                    </Router>
                </PlaceContextProvider>
            </WeatherContextProvider>
        </UserContextProvider>
    </React.StrictMode>
);

reportWebVitals();
