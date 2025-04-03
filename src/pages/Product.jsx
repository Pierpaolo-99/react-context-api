import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import NotFound from "./NotFound";

export default function Post() {

    const [product, setProduct] = useState(null);
    const [products, setProducts] = useState([]);
    const [notFound, setNotFound] = useState(false);

    const navigate = useNavigate();

    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => {
                if (!res.ok) {
                    setNotFound(true);
                    return null;
                }
                return res.json();
            })
            .then(data => {
                if (data) {
                    setProduct(data);
                    setNotFound(false);
                }
            });

        fetch(`https://fakestoreapi.com/products`)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            });
    }, [id])

    const handlePrev = () => {
        const currentIndex = products.findIndex(p => p.id === parseInt(id));
        if (currentIndex > 0) {
            const prevProductId = products[currentIndex - 1].id;
            navigate(`/products/${prevProductId}`);
        }
    };

    const handleNext = () => {
        const currentIndex = products.findIndex(p => p.id === parseInt(id));
        if (currentIndex < products.length - 1) {
            const nextProductId = products[currentIndex + 1].id;
            navigate(`/products/${nextProductId}`);
        }
    };


    if (notFound) {
        return <NotFound />;
    }

    if (!product) {
        return <p>Loading...</p>;
    }

    return (
        <>
            <div style={{ minHeight: '50vh', backgroundImage: `url(${product.image})` }}></div>

            <section id="product_details" className="mt-5">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-12 col-md-5">
                            <img className="img-fluid" src={product.image} alt={product.title} />
                        </div>
                        <div className="col-12 col-md-7">

                            <h1>Product: {product.title}</h1>
                            <p>{product.description}</p>
                            <div className="price fw-bold fs-2">${product.price}</div>

                            <div className="d-flex justify-content-between mt-4">
                                <button
                                    className="btn btn-secondary"
                                    onClick={handlePrev}
                                >
                                    Prev
                                </button>
                                <button
                                    className="btn btn-secondary"
                                    onClick={handleNext}
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}