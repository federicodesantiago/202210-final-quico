import './header.scss';
export function Header({ children }: { children: JSX.Element }) {
    return (
        <>
            <header>
                <div className="header_content">
                    <div className="header_content-logo">
                        <img
                            className="header_logo"
                            src="https://firebasestorage.googleapis.com/v0/b/stop-y-go.appspot.com/o/LOGO.webp?alt=media&token=127ef18f-f0c3-4e7b-9dd6-42a9b04136dd"
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
