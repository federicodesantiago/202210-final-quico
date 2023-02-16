import { render, screen } from '@testing-library/react';
import { Item } from './item';
import {
    PlaceContext,
    PlaceContextStructure,
} from '../../core/context/place/place.context';
import { placeMock01 } from '../../mock/place.mock';
import userEvent from '@testing-library/user-event';
import { EditForm } from './editForm';

describe('Given "Item" component', () => {
    const handleUpdate = jest.fn();
    const handleDelete = jest.fn();
    const toggleModalEdit = jest.fn();
    const modalEdit = false;

    const mockContext = {
        handleUpdate,
        handleDelete,
    } as unknown as PlaceContextStructure;

    describe('When data is provided in the component', () => {
        let buttons: HTMLElement[];

        beforeEach(() => {
            render(
                <PlaceContext.Provider value={mockContext}>
                    <Item item={placeMock01}></Item>
                </PlaceContext.Provider>
            );
            buttons = [...screen.getAllByRole('button')];
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
                `https://firebasestorage.googleapis.com/v0/b/stop-y-go.appspot.com/o/kid_icon.webp?alt=media&token=d635085f-8870-4ca3-93c2-8113469b5365`
            );
            expect(elements[5]).toHaveAttribute(
                'src',
                `https://firebasestorage.googleapis.com/v0/b/stop-y-go.appspot.com/o/dog_icon.webp?alt=media&token=45335d71-6baa-4ca8-8ea9-d50fc4359e88`
            );
        });
        test('Then edit button is clicked', () => {
            userEvent.click(buttons[0]);
            expect(handleUpdate).toHaveBeenCalled();
        });
        test('Then the favorite button is clicked', () => {
            userEvent.click(buttons[1]);
            expect(handleUpdate).toHaveBeenCalled();
        });
        test('Then the delete button is clicked', () => {
            userEvent.click(buttons[2]);
            expect(handleDelete).toHaveBeenCalled();
        });
        test('Then the edit button is clicked, the modal shows up', () => {
            userEvent.click(buttons[0]);
            const actualizarText = screen.getByText('Editar');
            expect(actualizarText).toBeInTheDocument();
        });
        describe('When the modal is open', () => {
            let buttonModal: HTMLElement[];
            beforeEach(() => {
                render(
                    <PlaceContext.Provider value={mockContext}>
                        <EditForm
                            item={placeMock01}
                            toggleModalEdit={() => {
                                toggleModalEdit();
                            }}
                            modalEdit={modalEdit}
                        ></EditForm>
                    </PlaceContext.Provider>
                );
                buttonModal = [...screen.getAllByRole('button')];
            });
            test('Then the toggleModalEdit, should work', () => {
                userEvent.click(buttons[0]);
                expect(handleUpdate).toHaveBeenCalled();
                userEvent.click(buttonModal[3]);
                expect(handleUpdate).toHaveBeenCalled();
            });
        });
    });
});
