import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Buttons } from './buttons';
import { MemoryRouter as Router } from 'react-router';
import {
    UserContext,
    UsersContextStructure,
} from '../../core/context/place/place.context';
import { userMock01 } from './button.mock';

describe('Given Buttons component', () => {
    const handleLogIn = jest.fn();
    const handleLogOut = jest.fn();
    const context = {
        user: [userMock01],
        handleLogIn,
        handleLogOut,
    } as unknown as UsersContextStructure;
    let button: HTMLElement[];
    beforeEach(async () => {
        render(
            <UserContext.Provider value={context}>
                <Router>
                    <Buttons></Buttons>
                </Router>
            </UserContext.Provider>
        );
        button = [...screen.getAllByRole('button')];
    });

    describe('When data are provided in the component', () => {
        test('Then user could interact with add modal', () => {
            const modalActive = screen.getByTestId('add-button');
            userEvent.click(modalActive);
            const modalAddActive = screen.getAllByText('Añadir');
            expect(modalAddActive[0]).toBeInTheDocument();
        });
        test('Then user could interact with search modal', () => {
            userEvent.click(button[0]);
            const modalActive = screen.getAllByText('Buscar');
            expect(modalActive[0]).toBeInTheDocument();
        });
    });
});
