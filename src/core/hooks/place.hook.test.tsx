import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {
    mockPlace1,
    mockPlace2,
    mockAddPlace,
    mockUpdatePlace,
    mockValidRepoResponse,
    mockNoValidRepoResponse,
} from './place.hook.mock';

import { PlacesRepo } from '../../services/repo/placeRepo';
import { usePlaces } from './place.hook';
import { MemoryRouter as Router } from 'react-router';

jest.mock('../../services/repo/placeRepo');

PlacesRepo.prototype.load = jest.fn();
PlacesRepo.prototype.create = jest.fn();
PlacesRepo.prototype.update = jest.fn();
PlacesRepo.prototype.delete = jest.fn();

describe(`Given usePlaces (custom hook)
            render with a virtual component`, () => {
    let TestComponent: () => JSX.Element;
    let buttons: Array<HTMLElement>;
    beforeEach(() => {
        TestComponent = () => {
            const {
                handleLoad,
                getPlaces,
                getStatus,
                handleAdd,
                handleUpdate,
                handleDelete,
            } = usePlaces();
            return (
                <>
                    <button onClick={handleLoad}>Load</button>
                    <button onClick={() => handleAdd(mockAddPlace)}>Add</button>
                    <button onClick={() => handleUpdate(mockUpdatePlace)}>
                        Update
                    </button>
                    <button onClick={() => handleDelete(mockPlace2.name)}>
                        Delete
                    </button>
                    {getStatus() !== 'Loaded' ? (
                        <p>Loading</p>
                    ) : (
                        <div>
                            <p>Loaded</p>
                            <ul>
                                {getPlaces().map((place) => (
                                    <li key={place.name}>{place.name}</li>
                                ))}
                            </ul>
                        </div>
                    )}
                </>
            );
        };
        render(
            <Router>
                <TestComponent />
            </Router>
        );
        buttons = screen.getAllByRole('button');
    });
    describe(`When the repo is working OK`, () => {
        beforeEach(mockValidRepoResponse);

        test('Then its function handleLoad should be add places to the state', async () => {
            expect(await screen.findByText(/loading/i)).toBeInTheDocument();
            userEvent.click(buttons[0]);
            expect(PlacesRepo.prototype.load).toHaveBeenCalled();
            expect(
                await screen.findByText(mockPlace1.name)
            ).toBeInTheDocument();
            expect(
                await screen.findByText(mockPlace2.name)
            ).toBeInTheDocument();
        });

        test('Then its function handleAdd should be used', async () => {
            userEvent.click(buttons[0]);
            userEvent.click(buttons[1]);
            expect(PlacesRepo.prototype.create).toHaveBeenCalled();
            expect(
                await screen.findByText(mockAddPlace.name)
            ).toBeInTheDocument();
        });

        test('Then its function handleUpdate should be used', async () => {
            userEvent.click(buttons[0]);
            userEvent.click(buttons[2]);
            expect(PlacesRepo.prototype.update).toHaveBeenCalled();
        });

        test('Then its function handleDelete should be used', async () => {
            userEvent.click(buttons[0]);
            expect(PlacesRepo.prototype.load).toHaveBeenCalled();
            userEvent.click(buttons[3]);
            expect(PlacesRepo.prototype.delete).toHaveBeenCalled();
            expect(
                await screen.findByText(mockPlace2.name)
            ).toBeInTheDocument();

            await expect(
                async () => await screen.findByText('Nothing')
            ).rejects.toThrowError();
        });
    });
    describe(`When the repo is NOT working OK`, () => {
        beforeEach(mockNoValidRepoResponse);
        test('Then its function handleLoad should be used', async () => {
            userEvent.click(buttons[0]);
            expect(PlacesRepo.prototype.load).toHaveBeenCalled();
        });
        test('Then its function handleAdd should be used', async () => {
            userEvent.click(buttons[1]);
            expect(PlacesRepo.prototype.create).toHaveBeenCalled();
        });
        test('Then its function handleUpdate should be used', async () => {
            userEvent.click(buttons[2]);
            expect(PlacesRepo.prototype.update).toHaveBeenCalled();
        });
        test('Then its function handleDelete should be used', async () => {
            userEvent.click(buttons[3]);
            expect(PlacesRepo.prototype.delete).toHaveBeenCalled();
        });
    });
});
