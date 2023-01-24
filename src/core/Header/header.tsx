import './header.scss';
export function Header({ children }: { children: JSX.Element }) {
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
                {children}
            </header>
        </>
    );
}
