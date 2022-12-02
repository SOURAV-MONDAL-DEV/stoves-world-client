import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AurhProvider/AuthProvider';
import BookingModal from '../BookingModal/BookingModal';

const ProductCard = ({ products }) => {
    const { user, userInfo } = useContext(AuthContext);
    const { productName, _id, isVarified, picture, email, phone, resalePrice, originalPrice, condition, sellerName, usedYear, location, postingDate } = products;
    const [bookProduct, setBookProduct] = useState(null)
    const navigate = useNavigate();

    // const handleBookNow = () => {

    //     const order = {
    //         buyerEmail: userInfo.email,
    //         productId: _id,
    //         productName,
    //         picture,
    //         resalePrice,
    //         originalPrice,
    //         sellerName,
    //         location,
    //         sellerEmail: email,
    //         sellerPhone: phone,
    //         condition: condition

    //     }

    //     fetch('http://localhost:5000/orders', {
    //         method: 'PUT',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(order)
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             if (data.acknowledged && data.modifiedCount === 1) {
    //                 alert('order placed successfully')
    //                 navigate('/dashbord/myProducts')
    //             }
    //             if (data.acknowledged && data.modifiedCount === 0) {
    //                 alert('you have already placed this order')
    //                 // navigate('/dashbord/myProducts')
    //             }
    //         })
    //         .catch(er => console.error(er));
    // }


    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
            <figure><img src={picture} alt="Stove" /></figure>
            <div className="card-body">
                <h2 className="card-title text-2xl">{productName}</h2>
                <p className='font-semibold'>original Price : <span className=''>{originalPrice}</span></p>
                <p className='font-semibold'>Resale Price : <span className=''>{resalePrice}</span></p>
                <p className='font-semibold'>Uses Time : <span className=''>{usedYear} </span> years</p>
                <p className='font-semibold'>Product condition : <span className=''>{condition} </span></p>
                <p className='font-semibold'>Seller : <span className=''>{sellerName}</span></p>
                <p className='font-semibold'>Seller phone : <span className=''>{phone}</span></p>
                <p className='font-semibold'>Seller email : <span className=''>{email}</span></p>
                <p className='font-semibold'>Location : <span className=''>{location}</span></p>
                <p className='font-semibold'>Posted on : <span className=''>{postingDate}</span></p>
                {

                    !user?.uid ?
                        <p><Link className='text-violet-700' to="/login">Login </Link> or <Link className='text-violet-700' to="/signup">SignUp</Link> as a "Buyer" to book this product</p>
                        :
                        userInfo?.userRole !== "Buyer" ?

                            <>
                                <p>Note: It's not your Buyer account. <Link className='text-violet-700' to="/signup">SignUp</Link> as a "Buyer" to book this product</p>
                            </>

                            :

                            <div className="card-actions justify-end">
                                <label
                                        htmlFor="booking-modal"
                                        className="btn btn-sm btn-primary text-white rounded-lg bg-orange-500"
                                        onClick={() => setBookProduct(products)}
                                    >Book Now</label>
                            </div>
                }
            </div>
            {
                bookProduct &&
                <BookingModal
                    selectedDate=""
                    bookProduct = {bookProduct}
                ></BookingModal>
            }
        </div>
    );
};

export default ProductCard;