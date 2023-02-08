/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen, act, waitFor } from '@testing-library/react';
import { List } from './list';

import {
    PlaceContext,
    PlaceContextStructure,
} from '../../core/context/place/place.context';
import { placeMock01 } from '../../mock/place.mock';

describe('Given "List" component', () => {
    const handleLoad = jest.fn();
    let mockContext: PlaceContextStructure;

    describe('When it is initially instantiated with data', () => {
        beforeEach(async () => {
            mockContext = {
                places: [placeMock01],
                handleLoad,
            } as unknown as PlaceContextStructure;
            await act(async () => {
                render(
                    <PlaceContext.Provider value={mockContext}>
                        <List></List>
                    </PlaceContext.Provider>
                );
            });
        });
        test(`Then component should be render the following`, () => {
            const forKids = screen.getByAltText('Icono niño');
            const forDogs = screen.getByAltText('Icono perro');
            expect(forKids).toBeInTheDocument();
            expect(forDogs).toBeInTheDocument();
        });
    });

    describe('When it doesn´t have any data', () => {
        beforeEach(async () => {
            mockContext = {
                places: [],
                handleLoad,
            } as unknown as PlaceContextStructure;
            await act(async () => {
                render(
                    <PlaceContext.Provider value={mockContext}>
                        <List></List>
                    </PlaceContext.Provider>
                );
            });
        });
        test(`Then it should be render the loading`, async () => {
            const loadingText = screen.getByText(`Loading...`);
            await waitFor(() => {
                expect(loadingText).toBeInTheDocument();
            });
        });
    });
});
