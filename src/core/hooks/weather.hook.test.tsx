import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { WeatherRepo } from '../../services/repo/weatherRepo';

import { UseWeather } from './weather.hook';
import {
    mockNoValidRepoResponse,
    mockValidRepoResponse,
} from './weather.hook.mock';

jest.mock('../../services/repo/userRepo');

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
                    <button onClick={handleLoad}>load</button>
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
            expect(WeatherRepo.prototype.load).toHaveBeenCalled();
        });
    });
    describe(`When the repo is NOT working OK`, () => {
        beforeEach(mockNoValidRepoResponse);
        test('Then the error from the function load should be call', async () => {
            userEvent.click(button);
            await waitFor(() => {
                expect(WeatherRepo.prototype.load).toHaveBeenCalled();
            });
        });
    });
});
