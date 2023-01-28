import { render, screen } from '@testing-library/react';
import { Footer } from './footer';

describe('Given Footer component', () => {
    describe('When it has been render', () => {
        test('Then the title should be in the screen', () => {
            render(
                <Footer>
                    <></>
                </Footer>
            );
            const elementFooter = screen.getByRole('contentinfo', {
                name: 'footer',
            });
            expect(elementFooter).toBeInTheDocument();
        });
    });
});
