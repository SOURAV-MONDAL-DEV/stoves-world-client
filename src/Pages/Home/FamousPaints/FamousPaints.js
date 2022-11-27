import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const FamousPaints = () => {

    // const images = [
    //     'https://i.ibb.co/RYb31Sf/22.jpg',
    //     'https://i.ibb.co/f1y1608/spring-painting-wallpaper-1280x800.jpg',
    //     'https://i.ibb.co/19N3MPR/vincent-van-gogh-the-starry-night-oil-canvas-117815-1600x900.jpg',
    //     'https://i.ibb.co/ZdY5yXS/ff.jpg',
    //     'https://i.ibb.co/gmjPh3p/dd.jpg',
    //     'https://i.ibb.co/0XZ8V0D/311269339-1316585012482492-1919774468395513770-n.jpg',
    // ];

    return (
        <div>
            <h1 className='text-center border text-lime-500 font-bold text-4xl m-12'>Famous section</h1>
            {/* <PhotoProvider>
                <div className="foo grid grid-cols-1 md:grid-cols-2 gap-5">
                    {images.map((item, index) => (
                        <PhotoView key={index} src={item}>
                            <img src={item} alt="" />
                        </PhotoView>
                    ))}
                </div>
            </PhotoProvider> */}
        </div>
    );
};

export default FamousPaints;