import React, { useContext, useEffect, useState } from 'react';
import { GrLocation, GrMailOption, GrPhone } from 'react-icons/gr';
import ProductShort from '../../../../Components/ProductShort/ProductShort';
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

    console.log(orderList);


    if (role === "Buyer") {
        return (
            <div>
                <p className='text-2xl font-bold text-yellow-500 my-10'>Yours all orders are here: </p>
                <div className=' lg:mx-20 grid grid-cols-1 lg:grid-cols-2 gap-10 mx-auto my-10'>
                    {
                        orderList.map(product =>


                            <div className="card w-80 md:w-96 bg-base-100 shadow-xl mx-auto ">
                                {/* <figure><img src={product?.photoUrl} alt="Stove" /></figure> */}
                                <div className="card-body">
                                    <div className='flex justify-between'>
                                        <div>
                                            <h2 className="card-title text-xl md:text-2xl font-bold text-green-500">{product?.productName}</h2>
                                        </div>
                                        <div>
                                            <p className='text-lg md:text-2xl  text-red-600'>$ {product?.resalePrice}</p>
                                        </div>
                                    </div>
                                    <div className='flex justify-between'>
                                        <div className=''>
                                            <p className=' text-sm'><GrLocation className='inline-block'></GrLocation> {product?.location}</p>
                                        </div>
                                        <div>
                                            {/* <p className='text-sm'>Posted on : <span className=''>{product?.postingDate}</span></p> */}
                                        </div>
                                    </div>

                                    {/* <p className=''>Resale Price : <span className=''>{resalePrice}</span></p> */}
                                    <p className=''>Used : <span className=''>{product?.usedYear} </span> years</p>
                                    <p className=''>Condition : <span className=''>{product?.condition} </span></p>
                                    <div className="divider text-yellow-300">Seller information</div>


                                    <div className="flex flex-col w-full lg:flex-row">
                                        <div className="grid flex-grow ">
                                            <p className=' pr-2'>Seller : {product?.sellerName}</p>
                                            <p className=''><GrPhone className='inline-block -mt-1'></GrPhone> <span className=''>{product?.sellerPhone}</span></p>
                                            <p className=''><GrMailOption className='inline-block -mt-1'></GrMailOption> <span className=''>{product?.sellerEmail}</span></p>
                                        </div>

                                        {/* <div className="divider lg:divider-horizontal"></div> */}

                                       
                                    </div>

                                </div>
                                
                            </div>



                            // <div key={product._id} className="card card-compact w-96 bg-base-100 shadow-xl">
                            //     <figure><img src={product.photoUrl} alt="Stove" /></figure>
                            //     <div className="card-body">
                            //         <h2 className="card-title text-2xl">{product.productName}</h2>
                            //         <p className='font-semibold'>Product Condition: <span className=''>{product.condition}</span></p>
                            //         <p className='font-semibold'>Resale Price : <span className=''>{product.resalePrice}</span></p>
                            //         <p className='font-semibold'>Seller : <span className=''>{product.sellerName}</span></p>
                            //         <p className='font-semibold'>Seller Phone : <span className=''>{product.sellerPhone}</span></p>
                            //         <p className='font-semibold'>Seller email : <span className=''>{product.sellerEmail}</span></p>
                            //         <p className='font-semibold'>Location : <span className=''>{product.location}</span></p>
                            //     </div>
                            // </div>

                        )
                    }
                </div>
            </div>
        );
    }
};

export default MyOrders;