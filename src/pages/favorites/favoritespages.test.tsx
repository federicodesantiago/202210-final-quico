/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable testing-library/no-unnecessary-act */
import { act, render, screen, waitFor } from '@testing-library/react';
import { usePlaces } from '../../core/hooks/place.hook';
import { mockPlace1 } from '../../core/hooks/place.hook.mock';
import {
    PlaceContext,
    PlaceContextStructure,
} from '../../core/context/place/place.context';
import { MemoryRouter as Router } from 'react-router';
import FavoritesPage from './favoritespages';
import { PlaceStructure } from '../../types/place';

jest.mock('../../core/hooks/place.hook');

describe('Given "Favorites" component', () => {
    const handleLoad = jest.fn();
    let placesFav: Array<PlaceStructure>;
    let mockContext: PlaceContextStructure;
    describe('When it is initially instantiated', () => {
        beforeEach(async () => {
            await act(async () => {
                mockContext = {
                    places: [],
                    handleLoad,
                } as unknown as PlaceContextStructure;
                render(
                    <PlaceContext.Provider value={mockContext}>
                        <Router>
                            <FavoritesPage></FavoritesPage>
                        </Router>
                    </PlaceContext.Provider>
                );
            });
        });
        test(`Then component should be render the loading if there isn't any favorite yet`, () => {
            const elementError = screen.getByText(
                /Ahora mismo no hay favoritos/i
            );
            expect(elementError).toBeInTheDocument();
        });
    });
    describe('When it is initially instantiated with favorites', () => {
        beforeEach(async () => {
            await act(async () => {
                mockContext = {
                    places: [mockPlace1],
                    handleLoad,
                } as unknown as PlaceContextStructure;
                await act(async () => {
                    render(
                        <PlaceContext.Provider value={mockContext}>
                            <Router>
                                <FavoritesPage></FavoritesPage>
                            </Router>
                        </PlaceContext.Provider>
                    );
                    mockPlace1.isFavorite = true;
                    placesFav = [mockPlace1];
                });
            });
        });
        test(`Then it should be render the data if there is a favorite`, async () => {
            const elementItem = await screen.findByText(/Name 1/i);
            expect(elementItem).toBeInTheDocument();
        });
    });
});
