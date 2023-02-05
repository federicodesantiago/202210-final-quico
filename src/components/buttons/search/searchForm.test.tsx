/* eslint-disable @typescript-eslint/no-explicit-any */
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter as Router } from 'react-router';
import { items } from '../../../core/App/App';
import {
    PlaceContext,
    PlaceContextStructure,
} from '../../../core/context/place/place.context';
import { MenuItems } from '../../../types/menu';
import { SearchForm } from './searchForm';
import * as router from 'react-router';
import React from 'react';
import '@testing-library/jest-dom';

describe('Given "Add" component', () => {
    const handleAdd = jest.fn();
    const handleUpdate = jest.fn();
    const toggleModalSearch = jest.fn();
    const navigate = jest.fn();
    const mockItems: MenuItems = [
        { path: '/home', label: 'Home' },
        { path: '/favorites', label: 'Favoritos' },
        { path: '/search', label: 'Buscar' },
    ];
    const mockContext = {
        handleAdd,
        handleUpdate,
    } as unknown as PlaceContextStructure;
    let checkboxButton: HTMLInputElement[];
    let navigateButton: HTMLInputElement;
    beforeEach(() => {
        jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate);
        render(
            <PlaceContext.Provider value={mockContext}>
                <Router>
                    <SearchForm
                        items={mockItems}
                        modalSearch={false}
                        toggleModalSearch={toggleModalSearch}
                    ></SearchForm>
                </Router>
            </PlaceContext.Provider>
        );
        checkboxButton = [
            ...screen.getAllByRole('checkbox'),
        ] as HTMLInputElement[];
        navigateButton = screen.getByRole('button') as HTMLInputElement;
    });

    describe('When we render', () => {
        test('Then handleInput triggers', () => {
            const optionElements = screen.getAllByRole(
                'option'
            ) as HTMLInputElement[];
            fireEvent.change(optionElements[0], {
                target: { value: 'Corcubión' },
            });
            expect(optionElements[0].value).toBe('Corcubión');
            fireEvent.change(optionElements[0], {
                target: { value: 'Valencia' },
            });
            expect(optionElements[0].value).toBe('Valencia');
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
        test('Then handleChangeKids should be call', () => {
            userEvent.click(checkboxButton[0]);
            expect(handleUpdate).toHaveBeenCalled();
        });
        test('Then handleChangeDogs should be call', () => {
            userEvent.click(checkboxButton[1]);
            expect(handleUpdate).toHaveBeenCalled();
        });
        test('Then navigate should be call', () => {
            userEvent.click(navigateButton);
            expect(navigate).toHaveBeenCalledWith(items[2].path);
        });
    });
});
