import React from 'react';

const CategoriesCard = ({ category, handleLoadProduct }) => {
    const { CategoryName, image } = category;
    return (
        <div>
            <div className="card w-80 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{CategoryName}</h2>
                    <div className="card-actions">
                        <button onClick={()=>handleLoadProduct(CategoryName)} className="btn btn-secondary bg-rose-500 text-white rounded-lg btn-sm">See Products</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoriesCard;