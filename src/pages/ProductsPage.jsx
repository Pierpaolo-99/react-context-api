import { NavLink } from "react-router-dom";
import { useContext } from "react";
import ProductContext from "../contexts/productContext";

export default function ProductsPage() {

    const { products } = useContext(ProductContext)

    return (
        <section className="py-5">
            <div className="container">
                <h1 className="mb-4">I Nostri Post</h1>
                <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-3">
                    {products.map((product) => (
                        <div className="col" key={product.id}>
                            <div className="card h-100">
                                <img src={product.image} className="card-img-top" alt={product.title}
                                    style={{ aspectRatio: 1, objectFit: 'cover' }} />
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <NavLink to={`/products/${product.id}`} className='btn btn-primary'>Dettagli</NavLink>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}