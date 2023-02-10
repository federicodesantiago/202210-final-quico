/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen, act } from '@testing-library/react';
import {
    PlaceContext,
    PlaceContextStructure,
} from '../../core/context/place/place.context';
import { placeMock01, placeMock03 } from '../../mock/place.mock';
import { ListSearch } from './listsearch';

describe('Given "ListSearch" component', () => {
    const handleLoad = jest.fn();
    let mockContext: PlaceContextStructure;

    describe('When it has some coincidence', () => {
        beforeEach(async () => {
            mockContext = {
                places: [placeMock01],
                handleLoad,
            } as unknown as PlaceContextStructure;
            await act(async () => {
                render(
                    <PlaceContext.Provider value={mockContext}>
                        <ListSearch searchData={placeMock01}></ListSearch>
                    </PlaceContext.Provider>
                );
            });
        });
        test(`Then component should be render the following`, () => {
            const name = screen.getByText(placeMock01.name);
            const coment = screen.getByText(placeMock01.coment);
            expect(name).toBeInTheDocument();
            expect(coment).toBeInTheDocument();
        });
    });
    describe('When it doesnt have any coincidence', () => {
        beforeEach(async () => {
            mockContext = {
                places: [],
                handleLoad,
            } as unknown as PlaceContextStructure;
            await act(async () => {
                render(
                    <PlaceContext.Provider value={mockContext}>
                        <ListSearch searchData={placeMock03}></ListSearch>
                    </PlaceContext.Provider>
                );
            });
        });
        test(`Then component should be render the following`, () => {
            const message = screen.getByText('Lo sentimos.');
            expect(message).toBeInTheDocument();
        });
    });
});
