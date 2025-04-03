import { useContext } from "react";
import ProductContext from "../contexts/productContext";

export default function PostsPage() {

    const { products } = useContext(ProductContext)

    return (
        <section className="py-5">
            <div className="container">
                <h1 className="mb-4">I Nostri Post</h1>
                <div className="row">
                    {products.map((product) => (
                        <div className="col-md-4 mb-4" key={product.id}>
                            <div className="card">
                                <img src={product.image} className="card-img-top" alt={product.title} />
                                <div className="card-body">
                                    <h5 className="card-title">{product.title}</h5>
                                    <p className="card-text">{product.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}