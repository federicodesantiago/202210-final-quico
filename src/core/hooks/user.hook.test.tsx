import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { UserRepo } from '../../services/repo/userRepo';
import { useUser } from './user.hook';
import {
    mockNoValidRepoResponse,
    mockValidRepoResponse,
} from './user.hook.mock';

jest.mock('../../services/repo/userRepo');

UserRepo.prototype.login = jest.fn();
UserRepo.prototype.logout = jest.fn();

describe(`Given usePlaces (custom hook)
            render with a virtual component`, () => {
    let TestComponent: () => JSX.Element;
    let buttons: Array<HTMLElement>;
    beforeEach(() => {
        TestComponent = () => {
            const { handleLogIn, handleLogOut } = useUser();
            return (
                <>
                    <button onClick={handleLogIn}>login</button>
                    <button onClick={handleLogOut}>logout</button>
                </>
            );
        };
        render(<TestComponent />);
        buttons = screen.getAllByRole('button');
    });
    describe(`When the repo is working OK`, () => {
        beforeEach(mockValidRepoResponse);
        test('Then its function login should be call', async () => {
            userEvent.click(buttons[0]);
            expect(UserRepo.prototype.login).toHaveBeenCalled();
        });

        test('Then its function logout should be call', async () => {
            userEvent.click(buttons[1]);
            expect(UserRepo.prototype.logout).toHaveBeenCalled();
        });
    });
    describe(`When the repo is NOT working OK`, () => {
        beforeEach(mockNoValidRepoResponse);
        test('Then the error from the function login should be call', async () => {
            userEvent.click(buttons[0]);
            await waitFor(() => {
                expect(UserRepo.prototype.login).toHaveBeenCalled();
            });
        });
        test('Then the error from the function logout should be call', async () => {
            userEvent.click(buttons[1]);
            await waitFor(() => {
                expect(UserRepo.prototype.logout).toHaveBeenCalled();
            });
        });
    });
});