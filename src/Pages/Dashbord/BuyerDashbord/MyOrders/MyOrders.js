import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../Context/AurhProvider/AuthProvider';

const MyOrders = () => {
    const { user, userInfo } = useContext(AuthContext);
    const role = userInfo?.userRole;
    const [orderList, setOrderList] = useState([])

    useEffect(() => {
        fetch(`https://stoves-world-server.vercel.app/orders/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setOrderList(data)
            })
    }, [user?.email])


    if (role === "Buyer") {
    return (
        <div>
            <p>my orders</p>
            <div className=' lg:mx-20 grid grid-cols-1 lg:grid-cols-2 gap-10 mx-auto my-10'>
                    {
                        orderList.map(product =>

                            <div key={product._id} className="card card-compact w-96 bg-base-100 shadow-xl">
                                <figure><img src={product.photoUrl} alt="Stove" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title text-2xl">{product.productName}</h2>
                                    <p className='font-semibold'>Product Condition: <span className=''>{product.condition}</span></p>
                                    <p className='font-semibold'>Resale Price : <span className=''>{product.resalePrice}</span></p>
                                    <p className='font-semibold'>Seller : <span className=''>{product.sellerName}</span></p>
                                    <p className='font-semibold'>Seller Phone : <span className=''>{product.sellerPhone}</span></p>
                                    <p className='font-semibold'>Seller email : <span className=''>{product.sellerEmail}</span></p>
                                    <p className='font-semibold'>Location : <span className=''>{product.location}</span></p>
                                </div>
                            </div>

                        )
                    }
                </div>
        </div>
    );
    }
};

export default MyOrders;