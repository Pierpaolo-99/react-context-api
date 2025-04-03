export default function Footer() {
    return (
        <>
            <footer className="bg-dark text-light py-4">
                <div className="container text-center">
                    <p>&copy; {new Date().getFullYear()} My Blog. Tutti i diritti riservati.</p>
                    <ul className="list-inline">
                        <li className="list-inline-item">
                            <a href="/privacy" className="text-light text-decoration-none">Privacy Policy</a>
                        </li>
                        <li className="list-inline-item">
                            <a href="/terms" className="text-light text-decoration-none">Termini e Condizioni</a>
                        </li>
                        <li className="list-inline-item">
                            <a href="/contacts" className="text-light text-decoration-none">Contattaci</a>
                        </li>
                    </ul>
                    <div className="mt-3">
                        <a href="https://facebook.com" className="text-light me-3">
                            <i className="fab fa-facebook"></i>
                        </a>
                        <a href="https://twitter.com" className="text-light me-3">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="https://instagram.com" className="text-light">
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>
            </footer>
        </>
    )
}