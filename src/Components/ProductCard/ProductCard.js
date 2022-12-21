import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AurhProvider/AuthProvider';
import BookingModal from '../BookingModal/BookingModal';
import tick from "../../img/check.png"
import { GrLocation } from "react-icons/gr";
import { GrPhone } from "react-icons/gr";
import { GrMailOption } from "react-icons/gr";

const ProductCard = ({ products }) => {
    const { user, userInfo } = useContext(AuthContext);
    const { productName, _id, isVarified, photoUrl, email, phone, resalePrice, originalPrice, condition, sellerName, usedYear, location, postingDate } = products;
    const [bookProduct, setBookProduct] = useState(null)
    const navigate = useNavigate();

    const [sellerInfo, setSellerInfo] = useState({})


    // useEffect(() => {
    //     fetch(`https://stoves-world-server.vercel.app/users/${email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setSellerInfo(data[0])
    //         })
    // }, [user?.uid])


    return (
        <div className="card w-80 md:w-96 bg-base-100 shadow-xl mx-auto ">
            <figure><img src={photoUrl} alt="Stove" /></figure>
            <div className="card-body">
                <div className='flex justify-between'>
                    <div>
                        <h2 className="card-title text-xl md:text-2xl font-bold text-green-500">{productName}</h2>
                    </div>
                    <div>
                        <p className='text-lg md:text-2xl  text-red-600'>$ {products.resalePrice}</p>
                    </div>
                </div>
                <div className='flex justify-between'>
                    <div className=''>
                        <p className=' text-sm'><GrLocation className='inline-block'></GrLocation> {location}</p>
                    </div>
                    <div>
                        <p className='text-sm'>Posted on : <span className=''>{postingDate}</span></p>
                    </div>
                </div>

                {/* <p className=''>Resale Price : <span className=''>{resalePrice}</span></p> */}
                <p className=''>Used : <span className=''>{usedYear} </span> years</p>
                <p className=''>Condition : <span className=''>{condition} </span></p>
                <div className="divider text-yellow-300">Seller information</div>


                <div className="flex flex-col w-full lg:flex-row">
                    <div className="grid flex-grow ">
                        <p className=' pr-2'>Seller : {sellerName}</p>
                        <p className=''><GrPhone className='inline-block -mt-1'></GrPhone> <span className=''>{phone}</span></p>
                        <p className=''><GrMailOption className='inline-block -mt-1'></GrMailOption> <span className=''>{email}</span></p>
                    </div>

                    {/* <div className="divider lg:divider-horizontal"></div> */}

                    <div className="grid flex-grow  place-items-end">
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
                                            className="btn btn-sm bg-gradient-to-b from-yellow-500 via-yellow-400 to-orange-500 border-none"
                                            onClick={() => setBookProduct(products)}
                                        >Book Now</label>
                                    </div>
                        }
                    </div>
                </div>

            </div>
            {
                bookProduct &&
                <BookingModal
                    selectedDate=""
                    bookProduct={bookProduct}
                ></BookingModal>
            }
        </div>
    );
};

export default ProductCard;