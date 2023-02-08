/* eslint-disable testing-library/no-unnecessary-act */
import { act, render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { items, mockPageTitles } from './mock.routes';
import { AppLazyRoutes } from './routes';

const testLazyRoute = (index: number) => {
    const title = new RegExp(mockPageTitles[index], 'i');
    const lazyElement = screen.getByText(title);
    expect(lazyElement).toBeInTheDocument();
};

jest.mock('../../pages/home/homepage', () => {
    return () => <p>{mockPageTitles[0]}</p>;
});
jest.mock('../../pages/favorites/favoritespages', () => {
    return () => <p>{mockPageTitles[1]}</p>;
});
jest.mock('../../pages/search/searchpage', () => {
    return () => <p>{mockPageTitles[2]}</p>;
});

describe('Given AppRoutes Lazy component,', () => {
    let lazyPaths: Array<string>;

    beforeEach(() => {
        lazyPaths = items.map((item) => item.path);
    });

    describe(`When we render the component 
                And the lazy route is showing...`, () => {
        beforeEach(async () => {
            await act(async () => {
                render(
                    <Router initialEntries={lazyPaths} initialIndex={0}>
                        <AppLazyRoutes items={items} />
                    </Router>
                );
            });
        });
        test('Then it should display the Home Page', () => {
            testLazyRoute(0);
        });
    });
    describe(`When we render the component 
                And the lazy route is showing is...`, () => {
        beforeEach(async () => {
            await act(async () => {
                render(
                    <Router initialEntries={lazyPaths} initialIndex={1}>
                        <AppLazyRoutes items={items} />
                    </Router>
                );
            });
        });
        test('Then it should display the Favorites', () => {
            testLazyRoute(1);
        });
    });
    describe(`When we render the component 
                And the lazy route is`, () => {
        beforeEach(async () => {
            await act(async () => {
                render(
                    <Router initialEntries={lazyPaths} initialIndex={2}>
                        <AppLazyRoutes items={items} />
                    </Router>
                );
            });
        });
        test('Then it should display the Search Page', () => {
            testLazyRoute(2);
        });
    });
});
