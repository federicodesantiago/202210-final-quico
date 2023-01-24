import { MenuItems } from '../../types/menu';
import { Footer } from '../Footer/footer';
import { Header } from '../Header/header';
import { Menu } from '../menu/menu';

export function Layout({
    items,
    children,
}: {
    items: MenuItems;
    children: JSX.Element;
}) {
    return (
        <>
            <Header>
                <Menu items={items}></Menu>
            </Header>
            <main>{children}</main>
            <Footer></Footer>
        </>
    );
}
