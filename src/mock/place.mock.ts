import { PlaceStructure } from '../types/place';

export const placeMock01 = new PlaceStructure(
    'Nombre',
    'Madrid',
    'Valencia',
    '2:30h',
    'imagen',
    true,
    true,
    true,
    'No coment'
);

export const placeMock02 = new PlaceStructure(
    'Nombre2',
    'Granada',
    'Corcubión',
    '1:00h',
    'imagen2',
    true,
    false,
    true,
    'Nothing to coment'
);

export const placeMock03 = new PlaceStructure(
    '',
    '',
    '',
    '',
    '',
    false,
    false,
    false,
    ''
);
