import { MenuItems } from '../../types/menu';
import { Footer } from '../Footer/footer';
import { Header } from '../Header/header';
import { Menu } from '../menu/menu';
import { MenuFooter } from '../menu/menu.footer';

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
            <main className="main">{children}</main>
            <Footer>
                <MenuFooter items={items}></MenuFooter>
            </Footer>
        </>
    );
}
