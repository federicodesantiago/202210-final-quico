import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router';
import App from './App';

test('renders learn react link', async () => {
    render(
        <Router>
            <App />
        </Router>
    );
    const linkElement = screen.getByText(/Stop&Go/i);
    await waitFor(() => {
        expect(linkElement).toBeInTheDocument();
    });
});
