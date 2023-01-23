import { login } from './login';

document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('button').addEventListener('click', () => {
        login();
    });
});
