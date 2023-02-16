/* eslint-disable testing-library/no-unnecessary-act */
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useUser } from '../../core/hooks/user.hook';
import { mockUser1, mockUser2 } from '../../core/hooks/user.hook.mock';
import { UserRepo } from './userRepo';
import { MemoryRouter } from 'react-router-dom';

describe('Given a Task Repo', () => {
    jest.mock('firebase/auth');
    jest.mock('../firebase');
    jest.mock('./userRepo');

    let buttons: HTMLElement[];
    let TestComponent: () => JSX.Element;
    const mockRepoResponse = () => {
        (UserRepo.prototype.login as jest.Mock).mockResolvedValue(mockUser1);
        (UserRepo.prototype.logout as jest.Mock).mockResolvedValue(mockUser2);
    };
    UserRepo.prototype.login = jest.fn();
    UserRepo.prototype.logout = jest.fn();
    beforeEach(async () => {
        TestComponent = () => {
            const { handleLogIn, handleLogOut } = useUser();
            return (
                <>
                    <button onClick={handleLogIn}>Login</button>
                    <button onClick={handleLogOut}>Logout</button>
                </>
            );
        };
        mockRepoResponse();

        await act(() =>
            render(
                <MemoryRouter>
                    <TestComponent />
                </MemoryRouter>
            )
        );
        buttons = screen.getAllByRole('button');
    });
    describe('When we use the next method', () => {
        test('Then login received the user data contents in the repo', async () => {
            userEvent.click(buttons[0]);
            await act(async () => {
                expect(UserRepo.prototype.login).toHaveBeenCalled();
            });
        });
        test('Then logout deletes the user data contents in the repo', async () => {
            userEvent.click(buttons[1]);
            await act(async () => {
                expect(UserRepo.prototype.logout).toHaveBeenCalled();
            });
        });
    });
});
