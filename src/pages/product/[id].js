import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Header from "../header";

export default function ProductDetail() {
    const [data, setData] = useState(null);
    const [cartCount, setCartCount] = useState(0);

    const router = useRouter();

    const fetchDataProduct = async (id) => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            const product = await response.json();

            setData(product);
        } catch (error) {
            console.error("Error fetching product data:", error);
        }
    };

    const addToCart = () => {
        // Tambahkan 1 ke jumlah item dalam keranjang setiap kali tombol "Add To Cart" ditekan
        setCartCount(prevCount => prevCount + 1);
    };

    useEffect(() => {
        if (router.query.id) {
            fetchDataProduct(router.query.id);
        }
    }, [router.query.id]);

    return (
        <>
            <div className="detail">
                <Header cartCount={cartCount} />
                {data && (
                    <div className="card mb-3" style={{ maxWidth: '100%' }}>
                        <div className="row g-0">
                            <div className="cardImg col-md-4">
                                <img src={data.image} className="img-fluid rounded-start" alt={data.title} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <section>
                                        <h5 className="card-title">{data.title}</h5>
                                        <p className="card-text">{data.description}</p>
                                        <p className="card-text">
                                            <small className="text-muted">Last updated 3 mins ago</small>
                                        </p>
                                    </section>
                                    <section>
                                    <h5>Rp 500.000</h5>
                                        <button onClick={addToCart}>Add To Card</button>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}
