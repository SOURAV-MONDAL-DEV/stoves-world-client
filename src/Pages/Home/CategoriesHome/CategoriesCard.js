import React from "react";

const CategoriesCard = ({ category, handleLoadProduct }) => {
  const { CategoryName, image } = category;
  return (
    <div>
      <div onClick={()=>handleLoadProduct(CategoryName)}  className="flex items-center  text-cyan-500 hover:text-base-100 whitespace-normal bg-base-100 border rounded border-base-100 hover:bg-cyan-500 hover:border-cyan-500 transition duration-900 ease-linear  shadow-[0px_0px_25px_-4px_rgb(0,0,0,0.1),_0px_0px_30px_-5px_rgb(0,0,0,0.1)]">
        <figure className=" basis-1/3">
          <img className="h-12 w-auto border rounded" src={image} alt="category img" />
        </figure>
        <div className=" basis-2/3 ">
          <h2 className="md:text-xl text-center font-teko h-100 tracking-wide whitespace-normal">{CategoryName}</h2>
        </div>
      </div>

      {/* <div onClick={()=>handleLoadProduct(CategoryName)} className="card w-28 sm:w-48 md:w-64 bg-base-100 shadow-xl mx-auto">
                <figure className=" px-1 pt-1 md:px-10 md:pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl " />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className=" md:text-xl text-green-500">{CategoryName}</h2>
                    <div className="card-actions hidden md:block">
                        <button onClick={()=>handleLoadProduct(CategoryName)} className="btn btn-secondary bg-rose-500 text-white rounded-lg btn-sm ">See Products</button>
                    </div>
                </div>
            </div> */}
    </div>
  );
};

export default CategoriesCard;
