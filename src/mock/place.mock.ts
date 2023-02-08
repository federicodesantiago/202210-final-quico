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
    false,
    false,
    false,
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
