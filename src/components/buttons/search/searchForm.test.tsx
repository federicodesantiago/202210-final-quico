/* eslint-disable testing-library/no-unnecessary-act */
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter as Router } from 'react-router';
import { items } from '../../../core/App/App';
import {
    PlaceContext,
    PlaceContextStructure,
} from '../../../core/context/place/place.context';
import { SearchForm } from './searchForm';
import * as router from 'react-router';
import React from 'react';
import { PlaceStructure } from '../../../types/place';

describe('Given the "Search" component', () => {
    const handleAdd = jest.fn();
    const handleUpdate = jest.fn();
    const toggleModalSearch = jest.fn();
    const navigate = jest.fn();
    jest.mock('react-router-dom', () => ({
        navigate: jest.fn(),
    }));

    let mockContext: PlaceContextStructure;
    let navigateButton: HTMLInputElement;
    let optionElements: HTMLInputElement[];

    const MockSearchFormData: Partial<PlaceStructure> = {
        name: 'Km0',
        start: 'Corcubión',
        finish: 'Madrid',
        distance: '',
        image: '',
        away: false,
        forKids: false,
        forDogs: false,
        coment: '',
        id: '',
    };

    beforeEach(() => {
        jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);
        mockContext = {
            places: [MockSearchFormData],
            handleAdd,
            handleUpdate,
        } as unknown as PlaceContextStructure;
        render(
            <PlaceContext.Provider value={mockContext}>
                <Router>
                    <SearchForm
                        items={items}
                        modalSearch={false}
                        toggleModalSearch={toggleModalSearch}
                    ></SearchForm>
                </Router>
            </PlaceContext.Provider>
        );
        navigateButton = screen.getByRole('button');
        optionElements = screen.getAllByRole('option');
    });

    describe('When we render', () => {
        test('Then handleInput triggers', () => {
            fireEvent.change(optionElements[2], {
                target: { value: 'Granada' },
            });
            expect(optionElements[2].value).toBe('Granada');
            fireEvent.change(optionElements[1], {
                target: { value: 'Corcubión' },
            });
            expect(optionElements[1].value).toBe('Corcubión');
        });
        test(`Then it should render Buscar`, () => {
            const placeHeader = screen.getByRole('heading', {
                name: 'Buscar',
            });
            expect(placeHeader).toBeInTheDocument();
        });
        test('Then form could be this long', () => {
            expect(screen.getAllByRole('option').length).toBe(10);
        });
    });
    test('Then navigate should be call', () => {
        userEvent.click(navigateButton);
        expect(navigate).toHaveBeenCalled();
    });
});
