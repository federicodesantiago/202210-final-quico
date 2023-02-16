import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import HomePage from './homepage';

describe('Given the HomePage component', () => {
    describe('When it has been render', () => {
        render(
            <>
                <BrowserRouter>
                    <HomePage></HomePage>
                </BrowserRouter>
            </>
        );
        test('Then next items should appear', () => {
            const iconImg = screen.getByAltText('Weather icon');
            expect(iconImg).toBeInTheDocument();
        });
    });
});
