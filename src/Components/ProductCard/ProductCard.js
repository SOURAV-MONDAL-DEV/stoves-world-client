import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AurhProvider/AuthProvider';

const ProductCard = ({ products }) => {
    const {user, userInfo } = useContext(AuthContext);


    const { productName, isVarified, picture, resalePrice, originalPrice, sellerName, UsesTime, Location, postingDate } = products;
    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
            <figure><img src={picture} alt="Stove" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{productName}</h2>
                <p className='font-semibold'>Seller : <span className=''>{sellerName}</span></p>
                <p className='font-semibold'>original Price : <span className=''>{originalPrice}</span></p>
                <p className='font-semibold'>Resale Price : <span className=''>{resalePrice}</span></p>
                <p className='font-semibold'>Uses Time : <span className=''>{UsesTime} </span> years</p>
                <p className='font-semibold'>Location : <span className=''>{Location}</span></p>
                <p className='font-semibold'>Posted on : <span className=''>{postingDate}</span></p>
                {   


                    !user?.uid ?
                        <p><Link className='text-violet-700' to="/login">Login </Link> or <Link className='text-violet-700' to="/signup">SignUp</Link> as a "Buyer" to book this product</p>
                    :
                        userInfo?.UserRole === "Seller" ?

                            <>
                                <p>Note: It is your seller account. SignUp as a "Buyer" to book this product</p>
                            </>

                            :

                            <div className="card-actions justify-end">
                                <button className="btn btn-primary rounded-lg bg-orange-500">Book Now</button>
                            </div>
                }
            </div>
        </div>
    );
};

export default ProductCard;