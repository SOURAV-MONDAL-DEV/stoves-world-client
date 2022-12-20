import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductShort = ({ products }) => {

    const navigate = useNavigate();

    const handleDetails = () => {
        navigate('/productDetails', {state:products})
    }

    return (
        <div className="card card-compact w-64 bg-base-100 shadow-xl mx-auto">
            <figure><img src="https://placeimg.com/400/225/arch" alt="products" /></figure>
            <div className="card-body">
                <h2 className="card-title">{products?.productName}</h2>
                <div className='flex justify-between'>
                    <div>
                        <p>{products?.postingDate}</p>
                        <p>{products?.location}</p>
                    </div>
                    <div>
                        <p className='text-2xl font-semibold text-red-600'>$ {products.resalePrice}</p>
                    </div>
                </div>
                <div className="card-actions justify-end">
                    <button onClick={handleDetails} className="btn btn-sm bg-gradient-to-r from-cyan-500 to-teal-500 border-none">Details</button>
                </div>
            </div>
        </div>
    );
};

export default ProductShort;