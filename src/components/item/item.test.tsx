import { render, screen } from '@testing-library/react';
import { Item } from './item';
import {
    PlaceContext,
    PlaceContextStructure,
} from '../../core/context/place/place.context';
import { placeMock01 } from '../../mock/place.mock';
import userEvent from '@testing-library/user-event';

describe('Given "Item" component', () => {
    const handleUpdate = jest.fn();
    const handleDelete = jest.fn();

    const mockContext = {
        handleUpdate,
        handleDelete,
    } as unknown as PlaceContextStructure;

    describe('When data are provided in the component', () => {
        let buttons: HTMLInputElement[];

        beforeEach(() => {
            render(
                <PlaceContext.Provider value={mockContext}>
                    <Item item={placeMock01}></Item>
                </PlaceContext.Provider>
            );
            buttons = [
                screen.getByAltText('Icono favorito add'),
                screen.getByAltText('Icono borrar'),
                screen.getByAltText('Icono edit'),
            ] as HTMLInputElement[];
        });
        test('Then the following items are render', async () => {
            const elements = [
                screen.getByText(`${placeMock01.name}`),
                screen.getByText(
                    `${placeMock01.start} - ${placeMock01.finish}`
                ),
                screen.getByText(`Distancia: ${placeMock01.distance}`),
                screen.getByText(`${placeMock01.coment}`),
                screen.getByAltText('Icono niño'),
                screen.getByAltText('Icono perro'),
            ];
            expect(elements[0]).toBeInTheDocument();
            expect(elements[1]).toBeInTheDocument();
            expect(elements[2]).toBeInTheDocument();
            expect(elements[3]).toBeInTheDocument();
            expect(elements[4]).toHaveAttribute(
                'src',
                `./assets/item/kid_icon.webp`
            );
            expect(elements[5]).toHaveAttribute(
                'src',
                `./assets/item/dog_icon.webp`
            );
        });
        test('Then the following buttons are clicked', () => {
            userEvent.click(buttons[0]);
            expect(handleUpdate).toHaveBeenCalled();
            userEvent.click(buttons[1]);
            expect(handleDelete).toHaveBeenCalled();
            userEvent.click(buttons[2]);
            expect(handleUpdate).toHaveBeenCalled();
        });
    });
});
