import { render, screen } from '@testing-library/react';
import { Header } from './header';

describe('Given Header component', () => {
    describe('When it has been render', () => {
        test('Then the title should be in the screen', () => {
            render(
                <Header>
                    <></>
                </Header>
            );
            const elementHeader = screen.getByRole('heading', {
                name: 'Stop&Go',
            });
            expect(elementHeader).toBeInTheDocument();
        });
    });
});
