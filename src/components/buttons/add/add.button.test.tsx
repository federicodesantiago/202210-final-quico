import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AddButton } from './add.button';
import {
    PlaceContext,
    PlaceContextStructure,
} from '../../../core/context/place/place.context';

describe('Given "Add" component', () => {
    const handleAdd = jest.fn();
    const handleUpdate = jest.fn();
    const toggleModalAdd = jest.fn();

    const mockContext = {
        handleAdd,
        handleUpdate,
    } as unknown as PlaceContextStructure;
    let checkboxButton: HTMLInputElement[];
    beforeEach(() => {
        render(
            <PlaceContext.Provider value={mockContext}>
                <AddButton
                    modalAdd={false}
                    toggleModalAdd={toggleModalAdd}
                ></AddButton>
            </PlaceContext.Provider>
        );
        checkboxButton = [
            ...screen.getAllByRole('checkbox'),
        ] as HTMLInputElement[];
    });

    describe('When we render', () => {
        const mockName = 'Estación01';
        const mockComent = 'Comentario';
        let elementButton: HTMLElement;
        test(`Then it should render Añadir`, () => {
            const placeHeader = screen.getByRole('heading', {
                name: 'Añadir',
            });
            expect(placeHeader).toBeInTheDocument();
        });
        test('Then inputElements could be used for type content', async () => {
            const inputElements = await screen.findByPlaceholderText('Nombre');
            userEvent.type(inputElements, mockName);
            expect(inputElements).toBeInTheDocument();
        });
        test('Then inputElements2 could be used for type content', async () => {
            const inputElements2 = await screen.findByPlaceholderText(
                'Distancia'
            );
            userEvent.type(inputElements2, mockComent);
            expect(inputElements2).toBeInTheDocument();
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

        test('Then handleChangeAway should be call', () => {
            userEvent.click(checkboxButton[2]);
            expect(handleUpdate).toHaveBeenCalled();
        });
        test('Then form could be used for send the function', () => {
            elementButton = screen.getByRole('button');
            userEvent.click(elementButton);
            expect(handleAdd).toHaveBeenCalled();
        });
    });
});
