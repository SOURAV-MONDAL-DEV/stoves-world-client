import React, { useEffect, useState } from 'react';
import ProductCard from '../../../Components/ProductCard/ProductCard';
import ProductShort from '../../../Components/ProductShort/ProductShort';




const Intro = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://stoves-world-server.vercel.app/productsAdvertise/true')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
            .catch(err => console.log(err))
    }, [])


    if (products?.length) {
        return (
            <div >
                <h2 className='text-center text-xl font-bold text-yellow-500'>Advertisement :</h2>
                <div className=' lg:mx-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto my-10' >
                    {
                        products.map(product => <ProductShort
                            key={product._id}
                            products={product}

                        ></ProductShort>)
                    }
                </div>

            </div>
        );
    }
};

export default Intro;