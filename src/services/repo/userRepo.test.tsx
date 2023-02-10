import { initialState, mockUser1 } from '../../core/hooks/user.hook.mock';
import { UserRepo } from './userRepo';
import { signInWithPopup } from 'firebase/auth';

describe('Given a Task Repo', () => {
    const state = [mockUser1];
    const repo = new UserRepo();
    (signInWithPopup as jest.Mock).mockResolvedValue(mockUser1);

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
            const state = mockUser1;
            expect(state.name).toEqual(mockUser1.name);
            expect(state.photoURL).toEqual(mockUser1.photoURL);
            expect(state.uid).toEqual(mockUser1.uid);
            expect(state.token).toEqual(mockUser1.token);
        });
    });

    describe('When we use logout method', () => {
        test(`Then we received the user data empty`, async () => {
            const data = await repo.logout();
            expect(data).toEqual(initialState);
        });
    });
});
