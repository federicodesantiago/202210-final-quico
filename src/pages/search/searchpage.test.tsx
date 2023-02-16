/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable testing-library/no-unnecessary-act */
import { act, render, screen } from '@testing-library/react';
import {
    PlaceContext,
    PlaceContextStructure,
} from '../../core/context/place/place.context';
import { MemoryRouter as Router } from 'react-router';
import { PlaceStructure } from '../../types/place';
import SearchPage from './searchpage';

jest.mock('../../core/hooks/place.hook');

describe('Given "Favorites" component', () => {
    const handleLoad = jest.fn();
    let searchFinish: Array<PlaceStructure>;
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
                            <SearchPage></SearchPage>
                        </Router>
                    </PlaceContext.Provider>
                );
            });
        });
        test(`Then component should be rendering the next info if there isn't any matching`, () => {
            const elementError = screen.getByText(/Lo sentimos./i);
            expect(elementError).toBeInTheDocument();
            const elementError2 = screen.getByText(/No hay ningún valor/i);
            expect(elementError2).toBeInTheDocument();
            const elementError3 = screen.getByText(
                /que se ajuste a sucriterio./i
            );
            expect(elementError3).toBeInTheDocument();
        });
    });
});
