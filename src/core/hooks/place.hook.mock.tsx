import { PlacesRepo } from '../../services/repo/placeRepo';
import { PlaceStructure } from '../../types/place';

export const mockPlace1 = new PlaceStructure(
    'Name 1',
    'Madrid',
    'Valencia',
    '2:30h',
    'image',
    false,
    true,
    true,
    'No coment'
);
export const mockPlace2 = new PlaceStructure(
    'Name 2',
    'Corcubión',
    'Granada',
    '1:30h',
    'image',
    false,
    true,
    true,
    'No coment'
);
export const mockPlaces = [mockPlace1, mockPlace2];
export const mockAddPlace = new PlaceStructure(
    'Name 3',
    'Granada',
    'valencia',
    '0:30h',
    'image',
    false,
    true,
    true,
    'No coment'
);

export const mockUpdatePlace = { ...mockPlace2, title: 'Update place' };

export const mockValidRepoResponse = () => {
    (PlacesRepo.prototype.load as jest.Mock).mockResolvedValue(mockPlaces);
    (PlacesRepo.prototype.create as jest.Mock).mockResolvedValue(mockAddPlace);
    (PlacesRepo.prototype.update as jest.Mock).mockResolvedValue(
        mockUpdatePlace
    );
    (PlacesRepo.prototype.delete as jest.Mock).mockResolvedValue(
        mockPlace1.name
    );
};

const error = new Error('Testing errors');
export const mockNoValidRepoResponse = () => {
    (PlacesRepo.prototype.load as jest.Mock).mockRejectedValue(error);
    (PlacesRepo.prototype.create as jest.Mock).mockRejectedValue(error);
    (PlacesRepo.prototype.update as jest.Mock).mockRejectedValue(error);
    (PlacesRepo.prototype.delete as jest.Mock).mockRejectedValue(error);
};
