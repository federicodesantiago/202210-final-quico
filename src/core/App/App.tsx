import React from 'react';
import './App.css';
// import { login, loginWithPass, logout } from '../../login';
import { Header } from '../Header/header';
import { Layout } from '../layout/layout';

function App() {
    return (
        <>
            <Header></Header>
            <Layout></Layout>

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
