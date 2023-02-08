/* eslint-disable testing-library/no-unnecessary-act */
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
import { mockPlace1 } from '../../../core/hooks/place.hook.mock';
import { placeMock01 } from '../../../mock/place.mock';
import { PlaceStructure } from '../../../types/place';

describe('Given "Add" component', () => {
    const handleAdd = jest.fn();
    const handleUpdate = jest.fn();
    const toggleModalSearch = jest.fn();
    const navigate = jest.fn();

    const mockItems: MenuItems = [
        { path: '/home', label: 'Home' },
        { path: '/favorites', label: 'Favoritos' },
        { path: '/search/:searchData', label: 'Buscar' },
    ];
    let mockContext: PlaceContextStructure;
    let checkboxButton: HTMLInputElement[];
    let navigateButton: HTMLInputElement;
    let optionElements: HTMLInputElement[];

    const MockSearchFormData: Partial<PlaceStructure> = {
        name: '',
        start: '',
        finish: '',
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
        optionElements = screen.getAllByRole('option') as HTMLInputElement[];
    });

    describe('When we render', () => {
        test('Then handleInput triggers', async () => {
            fireEvent.change(optionElements[0], {
                target: { value: 'Corcubión' },
            });
            userEvent.click(navigateButton);
            const MockSearchFormDataStart = MockSearchFormData.start;
            await expect(MockSearchFormDataStart).toHaveValue('Corcubión');
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
            expect(mockPlace1.forKids).toBe(true);
        });
        test('Then handleChangeDogs should be call', () => {
            userEvent.click(checkboxButton[1]);
            expect(mockPlace1.forDogs).toBe(true);
        });
        test('Then navigate should be call', () => {
            userEvent.click(navigateButton);
            expect(navigate).toHaveBeenCalledWith(items[2].path);
        });
    });
});
