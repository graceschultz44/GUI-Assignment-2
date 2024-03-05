import { useState, useEffect } from "react";
import { getProductById } from "../../api";
import { ReviewList, ReviewForm } from "./index";

export const ProductDetails = () => {
    const [product, setProduct] = useState(undefined);
    useEffect(() => {
        getProductById(1).then(x => {
            setProduct(x);
        });
    }, []);

    const addReview = (delta) => {
        setProduct({ ...product, ...delta})
    } 

    if (!product) {
        return (
            <>Loading...</>
        );
    }

    return (
        <>
            <div className = "container">
                <nav className = "navbar navbar-expand-lg bg-light px-4">
                    <ul className = "breadcrumb pt-1">
                        <li className = "breadcrumb-item">
                            <span className = "text-primary">Tasty snacks</span>
                        </li>
                        <li className = "breadcrumb-item active">
                            { product.name }
                        </li>
                    </ul>
                </nav>
                <br/>
                <div className = "row bg-light mx-0">
                    <div className = "col">
                        <img 
                            src = { product.imageUrl }
                            alt = "Product"
                            className = "img-fluid"
                        />
                    </div>
                    
                    <div className = "col-8">
                        <h1 className = "display-2">
                            { product.name }
                        </h1>
                        <h2 className = "badge bg-primary fs-4">
                            { product.price }
                        </h2>
                        <p className = "text-secondary fs-5">
                            { product.description }
                        </p>
                    </div>
                    
                </div>
                <ReviewList reviews = { product.reviews }/>
                <ReviewForm onReviewAdded = { (review) => addReview({ reviews: [...product.reviews, review] }) }/>
            </div>
        </>
    );
}
