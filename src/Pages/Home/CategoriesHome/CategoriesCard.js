import React from 'react';

const CategoriesCard = ({ category, handleLoadProduct }) => {
    const { CategoryName, image } = category;
    return (
        <div>
            <div onClick={()=>handleLoadProduct(CategoryName)} className="card w-28 sm:w-48 md:w-64 bg-base-100 shadow-xl mx-auto">
                <figure className=" px-1 pt-1 md:px-10 md:pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl " />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className=" md:text-xl text-green-500">{CategoryName}</h2>
                    <div className="card-actions hidden md:block">
                        <button onClick={()=>handleLoadProduct(CategoryName)} className="btn btn-secondary bg-rose-500 text-white rounded-lg btn-sm ">See Products</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoriesCard;