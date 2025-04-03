export default function Contacts() {
    return (

        <section className="py-5">
            <div className="container">
                <h1 className="mb-4">Contattaci</h1>
                <p>
                    Hai domande, suggerimenti o vuoi collaborare con noi? Compila il modulo qui sotto o contattaci tramite i nostri canali social.
                    Saremo felici di risponderti il prima possibile!
                </p>
                <form>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Nome</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Inserisci il tuo nome"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            placeholder="Inserisci la tua email"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Messaggio</label>
                        <textarea
                            className="form-control"
                            id="message"
                            rows="5"
                            placeholder="Scrivi il tuo messaggio"
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Invia</button>
                </form>
                <div className="mt-5">
                    <h2>Seguici sui Social</h2>
                    <p>Puoi trovarci anche sui nostri canali social:</p>
                    <div>
                        <a href="https://facebook.com" className="text-primary me-3">
                            <i className="fab fa-facebook fa-2x"></i>
                        </a>
                        <a href="https://twitter.com" className="text-primary me-3">
                            <i className="fab fa-twitter fa-2x"></i>
                        </a>
                        <a href="https://instagram.com" className="text-primary">
                            <i className="fab fa-instagram fa-2x"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}