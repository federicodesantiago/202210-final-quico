import { render, screen } from '@testing-library/react';
import {
    UserContext,
    UsersContextStructure,
} from '../../core/context/place/place.context';
import userEvent from '@testing-library/user-event';
import { Menu } from './menu';
import { MenuItems } from '../../types/menu';
import { MemoryRouter as Router } from 'react-router';

describe('Given "Menu" component', () => {
    const handleLogIn = jest.fn();
    const handleLogOut = jest.fn();

    const mockContext = {
        handleLogIn,
        handleLogOut,
    } as unknown as UsersContextStructure;

    const items: MenuItems = [
        { path: '/home', label: 'Home' },
        { path: '/favorites', label: 'Favoritos' },
        { path: '/search', label: 'Buscar' },
    ];

    describe('When data are provided in the component', () => {
        let buttons: HTMLInputElement[];

        beforeEach(async () => {
            render(
                <UserContext.Provider value={mockContext}>
                    <Router>
                        <Menu items={items}></Menu>
                    </Router>
                </UserContext.Provider>
            );
            buttons = [...screen.getAllByRole('button')] as HTMLInputElement[];
        });
        test('Then the following buttons are clicked', async () => {
            userEvent.click(buttons[0]);
            await expect(handleLogIn).toHaveBeenCalled();
            userEvent.click(buttons[1]);
            await expect(handleLogOut).toHaveBeenCalled();
        });
    });
});
