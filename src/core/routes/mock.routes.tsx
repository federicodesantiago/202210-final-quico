import { MenuItems } from '../../types/menu';

export const mockPageTitles = ['Test Home', 'Test Favorites', 'Test Search'];
export const items: MenuItems = [
    { path: '/home', label: 'Home' },
    { path: '/favorites', label: 'Favoritos' },
    { path: '/search/:searchData', label: 'Búsqueda' },
];
