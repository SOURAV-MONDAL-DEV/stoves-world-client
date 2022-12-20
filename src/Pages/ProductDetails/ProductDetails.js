import React from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../../Components/ProductCard/ProductCard';

const ProductDetails = () => {
    const {state} = useLocation();
    // console.log(state);
    return (
        <div>
            <ProductCard
                products={state}
            ></ProductCard>
        </div>
    );
};

export default ProductDetails;