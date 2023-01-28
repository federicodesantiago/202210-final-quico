import './footer.scss';

export function Footer({ children }: { children: JSX.Element }) {
    return (
        <>
            <footer aria-label="footer">
                <span></span>
                {children}
                <p>
                    Proyecto final realizado por Federico de Santiago para ISDI
                    Coders.
                </p>
            </footer>
        </>
    );
}
