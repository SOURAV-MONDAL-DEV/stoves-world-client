import React from 'react';
// import img1 from "../../../../public/stoveimg/coocking.png";
import img1 from "../../../img/coocking.png";
import stove0 from "../../../img/stove0.png";
// import img2 from "../../../img/girl_dress_back_180944_3840x2160.jpg";
// import img3 from "../../../img/spring_painting-wallpaper-1280x800.jpg";
// import img4 from "../../../img/vincent_van_gogh_the_starry_night_oil_canvas_117815_1600x900.jpg";

const Banner = () => {


    return (

      
            <div className= ' grid grid-cols-2 my-20 mx-5 md:mx-10 lg:mx-20 p-5 md:p-10 lg:p-20 rounded-lg bg-gradient-to-r from-cyan-500 to-lime-500'>
                <div>
                    <h1 className='text-xl md:text-2xl lg:text-4xl font-bold text-yellow-500'>Find Your Best Choose </h1>
                    <h1 className=' md:text-xl'> Over 1000+ stoves in your budget</h1>
                </div>
                <img className=' -mt-5 md:-mt-10 lg:-mt-20' src={stove0} alt='stove'></img>
            </div>


    );
};

export default Banner;