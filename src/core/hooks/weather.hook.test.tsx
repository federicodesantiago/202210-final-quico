import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { WeatherRepo } from '../../services/repo/weatherRepo';

import { UseWeather } from './weather.hook';
import { mockValidRepoResponse } from './weather.hook.mock';

jest.mock('../../services/repo/weatherRepo');

WeatherRepo.prototype.load = jest.fn();

describe(`Given usePlaces (custom hook)
            render with a virtual component`, () => {
    let TestComponent: () => JSX.Element;
    let button: HTMLElement;
    beforeEach(() => {
        TestComponent = () => {
            const { handleLoad } = UseWeather();
            return (
                <>
                    <button onClick={handleLoad}>Load</button>
                </>
            );
        };
        render(<TestComponent />);
        button = screen.getByRole('button');
    });
    describe(`When the repo is working OK`, () => {
        beforeEach(mockValidRepoResponse);
        test('Then its function load should be call', async () => {
            userEvent.click(button);
            await waitFor(() => {
                expect(WeatherRepo.prototype.load).toHaveBeenCalled();
            });
        });
    });
});
