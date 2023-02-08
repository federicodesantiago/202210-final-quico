import { initialState, mockUser1 } from '../../core/hooks/user.hook.mock';
import { UserRepo } from './userRepo';

describe('Given a Task Repo', () => {
    const state = [mockUser1];

    const repo = new UserRepo();

    beforeEach(() => {
        global.fetch = jest.fn().mockResolvedValue({
            ok: true,
            json: jest.fn().mockResolvedValue(state),
        });
    });

    test('Then we can instantiate it', () => {
        expect(repo).toBeInstanceOf(UserRepo);
    });

    describe('When we use login method', () => {
        test('Then we received the user data contents in the repo', async () => {
            const data = await repo.login();
            // expect(global.fetch).toHaveBeenCalled();
            expect(data.uid).not.toBe(undefined);
        });
    });

    describe('When we use logout method', () => {
        test(`Then we received the user data empty`, async () => {
            const data = await repo.logout();
            // expect(global.fetch).toHaveBeenCalled();
            expect(data).toEqual(initialState);
        });
    });
});
