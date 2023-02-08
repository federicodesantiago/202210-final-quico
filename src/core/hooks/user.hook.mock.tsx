import { UserRepo } from '../../services/repo/userRepo';
import { UserStructure } from '../../types/user';

export const mockUser1: UserStructure = {
    name: 'Name 1',
    photoURL: 'Imagen 1',
    token: 'Token01',
    uid: 'uid01',
};
export const mockUser2: UserStructure = {
    name: '',
    photoURL: '',
    token: '',
    uid: '',
};
export const initialState: UserStructure = {
    name: '',
    photoURL: '',
    token: '',
    uid: '',
};
export const mockUsers = [mockUser1, mockUser2];
export const mockInUser: UserStructure = {
    name: 'Name 3',
    photoURL: 'Imagen 3',
    token: 'Token03',
    uid: 'uid03',
};

export const mockValidRepoResponse = () => {
    (UserRepo.prototype.login as jest.Mock).mockResolvedValue(mockUser1);
    (UserRepo.prototype.logout as jest.Mock).mockResolvedValue(mockUser1);
};

const error = new Error('Testing errors');
export const mockNoValidRepoResponse = () => {
    (UserRepo.prototype.login as jest.Mock).mockRejectedValue(error);
    (UserRepo.prototype.logout as jest.Mock).mockRejectedValue(error);
};
