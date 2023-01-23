import './header.scss';
export function Header() {
    return (
        <>
            <header>
                <div className="header_content">
                    <div className="header_content-logo">
                        <img
                            className="header_logo"
                            src="./assets/header/LOGO.webp"
                            alt="Stop&Go Logo"
                        />
                        <h1 className="header_text">Stop&Go</h1>
                    </div>
                </div>
                <nav role="navigation">
                    <div className="menu_toggle">
                        <input className="menu_checkbox" type="checkbox" />
                        <span></span>
                        <span></span>
                        <span></span>
                        <ul className="menu_list">
                            <a href=" ">
                                <li>Home</li>
                            </a>
                            <a href=" ">
                                <li>Favoritos</li>
                            </a>
                            <a href=" ">
                                <li>Buscar</li>
                            </a>
                            <a href=" ">
                                <li className="menu_list-login">Log In</li>
                            </a>
                            <a href=" " className="menu_list-logout">
                                <span className="menu_list-logoutLine"></span>
                                <li className="menu_list-logoutText">
                                    Log Out
                                </li>
                            </a>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
}
