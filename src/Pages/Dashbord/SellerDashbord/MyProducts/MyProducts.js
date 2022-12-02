import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../Context/AurhProvider/AuthProvider';

const MyProducts = () => {
    const [products, setProducts] = useState([])
    const { userInfo } = useContext(AuthContext);
    const role = userInfo?.userRole;



    useEffect(() => {
        fetch(`http://localhost:5000/products/${userInfo?.email}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data, "aiche");
                setProducts(data)
            })
    }, [userInfo?.email])

    if (role === "Seller") {
        return (
            <div>
                <p>Your added all products are here</p>
                <div className=' lg:mx-20 grid grid-cols-1 lg:grid-cols-2 gap-10 mx-auto my-10'>
                    {
                        products.map(product =>

                            <div key={product._id} className="card card-compact w-96 bg-base-100 shadow-xl">
                                <figure><img src={product.photoUrl} alt="Stove" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-2xl">{product.productName}</h2>
                                    <p className='font-semibold'>Seller : <span className=''>{product.sellerName}</span></p>
                                    <p className='font-semibold'>original Price : <span className=''>{product.originalPrice}</span></p>
                                    <p className='font-semibold'>Resale Price : <span className=''>{product.resalePrice}</span></p>
                                    <p className='font-semibold'>Uses Time : <span className=''>{product.usedYear} </span> years</p>
                                    <p className='font-semibold'>Location : <span className=''>{product.location}</span></p>
                                    <p className='font-semibold'>Posted on : <span className=''>{product.postingDate}</span></p>
                                </div>
                                <div className="card-actions justify-center">

                                <button  className='btn btn-sm btn-primary m-3 text-white rounded-lg bg-orange-500 '>Advertise product</button>
                                </div>
                            </div>

                        )
                    }
                </div>

            </div>
        );
    }
};

export default MyProducts;