import React from 'react';
import './App.css';
// import { login, loginWithPass, logout } from '../../login';
import { MenuItems } from '../../types/menu';
import { Layout } from '../layout/layout';
import { AppLazyRoutes } from '../routes/routes';

const items: MenuItems = [
    { path: '/home', label: 'Home' },
    { path: '/favorites', label: 'Favoritos' },
];

function App() {
    return (
        <>
            <Layout items={items}>
                <AppLazyRoutes items={items}></AppLazyRoutes>
            </Layout>

            {/* <div className="App">
                <button type="button" onClick={login}>
                    Login
                </button>
                <button type="button" onClick={logout}>
                    Logout
                </button>
                <button type="button" onClick={loginWithPass}>
                    Login With Password
                </button>
            </div> */}
        </>
    );
}

export default App;
