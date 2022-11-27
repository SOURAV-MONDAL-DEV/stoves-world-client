import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../../Components/ProductCard/ProductCard';
import CategoriesCard from './CategoriesCard';





const CategoriesHome = () => {

    const [Categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState([]);
    const [categoryProducts, setCategoryProducts] = useState([]);




    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])


    const handleLoadProduct = (CategoryName) => {
        setSelectedCategory(CategoryName);
    };


    useEffect(() => {
        fetch(`http://localhost:5000/category/${selectedCategory}`)
            .then(res => res.json())
            .then(data => setCategoryProducts(data))
    }, [selectedCategory])





    return (
        <div>
            <div className='mb-10'>
                <h1 className='text-3xl font-bold text-center mb-5'>Category</h1>
                <p className='text-xl font-semibold text-center'>Which type of stove do you looking for????</p>
            </div>

            <div className=' lg:mx-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto my-10'>
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
                            <div className=' lg:mx-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto my-10'>
                                {
                                    categoryProducts.map(products => <ProductCard
                                        key={products._id}
                                        products={products}
                                    ></ProductCard>)
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