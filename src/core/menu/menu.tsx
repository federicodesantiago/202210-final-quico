import { Link } from 'react-router-dom';
import { MenuItems } from '../../types/menu';
import { SyntheticEvent, useContext } from 'react';
import { UserContext } from '../context/place/place.context';

export function Menu({ items }: { items: MenuItems }) {
    const { handleLogIn, handleLogOut } = useContext(UserContext);

    const handleIn = (ev: SyntheticEvent) => {
        handleLogIn();
    };

    const handleOut = (ev: SyntheticEvent) => {
        handleLogOut();
    };

    return (
        <nav role="navigation">
            <div className="menu_toggle">
                <input className="menu_checkbox" type="checkbox" />
                <span></span>
                <span></span>
                <span></span>
                <ul className="menu_list">
                    {items.map((item) => (
                        <li key={item.label}>
                            <Link to={item.path}>{item.label}</Link>
                        </li>
                    ))}
                    <div className="menu-list_login">
                        <a href=" " className="menu_list-login">
                            <li
                                className="menu_list-loginText"
                                role={'button'}
                                onClick={handleIn}
                            >
                                Log In
                            </li>
                        </a>
                    </div>
                    <a href=" " className="menu_list-logout">
                        <span className="menu_list-logoutLine"></span>
                        <li
                            role={'button'}
                            className="menu_list-logoutText"
                            onClick={handleOut}
                        >
                            Log Out
                        </li>
                    </a>
                </ul>
            </div>
        </nav>
    );
}
