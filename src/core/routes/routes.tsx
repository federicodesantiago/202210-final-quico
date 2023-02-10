import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { MenuItems } from '../../types/menu';

const HomePage = lazy(() => import('../../pages/home/homepage'));
const FavoritesPage = lazy(
    () => import('../../pages/favorites/favoritespages')
);
const SearchPage = lazy(() => import('../../pages/search/searchpage'));
const ErrorPage404 = lazy(() => import('../../pages/error404/errorpage404'));

export function AppLazyRoutes({ items }: { items: MenuItems }) {
    return (
        <Suspense fallback={'Loading...'}>
            <Routes>
                <Route path={''} element={<HomePage></HomePage>}></Route>
                <Route
                    path={items[0].path}
                    element={<HomePage></HomePage>}
                ></Route>
                <Route
                    path={items[1].path}
                    element={<FavoritesPage></FavoritesPage>}
                ></Route>
                <Route
                    path={items[2].path}
                    element={<SearchPage></SearchPage>}
                ></Route>
                <Route
                    path="/ErrorPage404"
                    element={<ErrorPage404></ErrorPage404>}
                ></Route>
                <Route
                    path={'*'}
                    element={<Navigate to="" replace></Navigate>}
                ></Route>
            </Routes>
        </Suspense>
    );
}
