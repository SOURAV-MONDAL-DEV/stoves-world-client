import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../../Components/ProductCard/ProductCard';
import ProductShort from '../../../Components/ProductShort/ProductShort';
import { AuthContext } from '../../../Context/AurhProvider/AuthProvider';
import CategoriesCard from './CategoriesCard';





const CategoriesHome = () => {

    const { doFetch, setDoFetch} = useContext(AuthContext);

    const [Categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [categoryProducts, setCategoryProducts] = useState([]);

    console.log(Categories)


    useEffect(() => {
        fetch('https://stoves-world-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])


    const handleLoadProduct = (CategoryName) => {
        setSelectedCategory(CategoryName);
    };


    useEffect(() => {
        fetch(`https://stoves-world-server.vercel.app/category/${selectedCategory}`)
            .then(res => res.json())
            .then(data => setCategoryProducts(data))
    }, [selectedCategory])





    return (
        <div>
            <div className='my-3 lg:mx-20 '>
                {/* <h1 className='text-3xl font-bold text-center mb-5 text-green-500'>Category</h1>
                <p className='text-xl font-semibold text-center text-yellow-500'>Which type of stove do you looking for????</p> */}
                <h1 className='text-2xl font-teko tracking-wide'>Category :</h1>
            </div>

            <div className=' lg:mx-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-5 mx-auto my-1 '>
                {
                    Categories.map(category => <CategoriesCard
                        key={category._id}
                        category={category}
                        handleLoadProduct={handleLoadProduct}
                    ></CategoriesCard>)
                }

            </div>


            <div className="">
                {
                    categoryProducts ?
                        <>
                            <div className='md:mx-10 lg:mx-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 justify-center my-10'>
                                {
                                    categoryProducts.map(products => <ProductShort
                                        key={products._id}
                                        products={products}
                                    ></ProductShort>)
                                }

                            </div>
                        </>
                        :
                        <>
                            <p>Select a category for show product</p>
                        </>
                }
            </div>



        </div>
    );
};

export default CategoriesHome;