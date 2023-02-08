import React from 'react';
import './App.css';
import { MenuItems } from '../../types/menu';
import { Layout } from '../layout/layout';
import { AppLazyRoutes } from '../routes/routes';

export const items: MenuItems = [
    { path: '/home', label: 'Home' },
    { path: '/favorites', label: 'Favoritos' },
    {
        path: '/search/:searchData.start',
        label: 'Buscar',
    },
];

function App() {
    return (
        <>
            <Layout items={items}>
                <AppLazyRoutes items={items}></AppLazyRoutes>
            </Layout>
        </>
    );
}

export default App;
