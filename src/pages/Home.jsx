import { useContext } from "react";
import ProductContext from "../contexts/productContext";

export default function Home() {

    const { products } = useContext(ProductContext);

    return (
        <>
            <main>
                <section>
                    <div className="p-5 mb-4 bg-light rounded-3">
                        <div className="container-fluid py-5">
                            <h1 className="display-5 fw-bold">Benvenuto nel Nostro Negozio</h1>
                            <p className="col-md-8 fs-4">
                                Scopri i nostri prodotti di alta qualità, selezionati con cura per soddisfare ogni tua esigenza.
                                Approfitta delle offerte e acquista i tuoi preferiti oggi stesso!
                            </p>
                            <a href="/products" className="btn btn-primary btn-lg" type="button">
                                Esplora i Prodotti
                            </a>
                        </div>
                    </div>
                </section>

                <div className="container">
                    <section className="py-5">
                        <div className="container">
                            <h2 className="mb-4">Prodotti in Evidenza</h2>
                            <div className="row">
                                {products.slice(0, 2).map((product) => (
                                    <div className="col-md-6 mb-4" key={product.id}>
                                        <div className="card h-100" style={{ maxWidth: "100%" }}>
                                            <img
                                                src={product.image}
                                                className="card-img-top"
                                                alt={product.title}
                                                style={{ maxHeight: "300px", objectFit: "cover" }}
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">{product.title}</h5>
                                                <p className="card-text">{product.description}</p>
                                                <p className="card-text fw-bold">€{product.price}</p>
                                                <a href={`/products/${product.id}`} className="btn btn-primary">
                                                    Acquista Ora
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section className="bg-light py-5">
                        <div className="container">
                            <h2>Chi Siamo</h2>
                            <p>
                                Benvenuti su <strong>Il Nostro Negozio</strong>, il tuo punto di riferimento per prodotti di qualità.
                                Scopri di più su di noi e sulla nostra missione di offrirti il meglio!
                            </p>
                            <a href="/about" className="btn btn-secondary">Scopri di più</a>
                        </div>
                    </section>

                    <section className="text-center py-5">
                        <div className="container">
                            <h2>Esplora Tutti i Prodotti</h2>
                            <p>Trova ciò che stai cercando tra la nostra vasta gamma di prodotti.</p>
                            <a href="/products" className="btn btn-primary btn-lg">Vai ai Prodotti</a>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}