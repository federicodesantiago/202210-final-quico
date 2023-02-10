import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import ErrorPage404 from './errorpage404';

describe('Given the ErrorPage404 component', () => {
    describe('When it has been render', () => {
        render(
            <>
                <BrowserRouter>
                    <ErrorPage404></ErrorPage404>
                </BrowserRouter>
            </>
        );
        test('Then text should appear', () => {
            const testError = screen.getByText('PÁGINA DE ERROR');
            expect(testError).toBeInTheDocument();
        });
    });
});
