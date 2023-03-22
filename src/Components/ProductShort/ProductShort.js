import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GrLocation } from "react-icons/gr";


const ProductShort = ({ products }) => {

    console.log(products);

    const navigate = useNavigate();

    const handleDetails = () => {
        navigate('/productDetails', {state:products})
    }

    return (
        <div  onClick={handleDetails}  className="card card-compact w-40 md:w-56 rounded-sm  bg-base-100 shadow-xl mx-auto transition duration-300 ease-linear hover:-translate-y-1 hover:scale-110 ">
            <figure><img className='h-32 w-auto' src={products.photoUrl} alt="products" /></figure>
            <div className="card-body">
                <h2 className="text-lg md:text-xl font-semibold text-green-600">{products?.productName.toUpperCase()}</h2>
                <div className='flex justify-between'>
                    <div>
                        <p>{products?.postingDate}</p>
                        <p className=' text-sm'><GrLocation className='inline-block'></GrLocation> {products?.location}</p>
                    </div>
                    <div>
                        <p className='text-xl font-semibold text-red-600'>$ {products.resalePrice}</p>
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