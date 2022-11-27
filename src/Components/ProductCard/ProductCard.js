import React from 'react';

const ProductCard = ({products}) => {
    const {productName,resalePrice} = products;
    return (
        <div>
            <p>{productName}</p>
        </div>
    );
};

export default ProductCard;