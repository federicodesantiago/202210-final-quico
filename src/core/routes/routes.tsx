import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { MenuItems } from '../../types/menu';

const HomePage = lazy(() => import('../../pages/home/homepage'));
const FavoritesPage = lazy(
    () => import('../../pages/favorites/favoritespages')
);

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
                    path={'*'}
                    element={<Navigate to="" replace></Navigate>}
                ></Route>
            </Routes>
        </Suspense>
    );
}
