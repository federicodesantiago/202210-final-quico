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
                        <p className="header_text">Stop&Go</p>
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
                                <li>About</li>
                            </a>
                            <a href=" ">
                                <li>Info</li>
                            </a>
                            <a href=" ">
                                <li>Contact</li>
                            </a>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
}
