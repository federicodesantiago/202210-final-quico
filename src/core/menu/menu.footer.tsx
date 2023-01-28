import { Link } from 'react-router-dom';
import { MenuItems } from '../../types/menu';

export function MenuFooter({ items }: { items: MenuItems }) {
    return (
        <nav role="navigation">
            <div className="menu_toggle">
                <ul className="menu_list">
                    {items.map((item) => (
                        <li key={item.label}>
                            <Link to={item.path}>{item.label}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
