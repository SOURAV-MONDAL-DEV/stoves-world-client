import React, { useEffect, useState } from 'react';
import ProductCard from '../../../Components/ProductCard/ProductCard';




const Intro = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/productsAdvertise/true')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
            })
            .catch(err => console.log(err))
    }, [])


    if (products?.length) {
        return (
            <div >
                <h2 className='text-center text-xl font-bold'>Advertisement :</h2>
                <div className=' lg:mx-20 grid grid-cols-1 md:grid-cols-2 gap-10 mx-auto my-10' >
                    {
                        products.map(product => <ProductCard
                            key={product._id}
                            products={product}

                        ></ProductCard>)
                    }
                </div>

            </div>
        );
    }
};

export default Intro;