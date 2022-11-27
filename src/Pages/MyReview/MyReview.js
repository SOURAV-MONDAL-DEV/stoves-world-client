// import React, { useContext, useEffect, useState } from 'react';
// import { AuthContext } from '../../Context/AurhProvider/AuthProvider';

const MyReview = () => {


    // const { user } =  useContext(AuthContext);

    // const [nuser, setNuser] = useState([user])
    
    // const [reviews, setReviews] = useState([]);

    // user?.uid && setNuser(user);
    

    // const url = user?.uid && `https://paint-service-server.vercel.app/reviews?email=${user?.email}`
    // useEffect(() => {
    //     fetch(url)
    //         .then(res => res.json())
    //         .then(data => setReviews(data))
    // }, [] )

// console.log('nuser', nuser);
// user && console.log(reviews);

    return (

        <h1>my reviews</h1>
        // <div  className=' lg:mx-20 grid grid-cols-1 md:grid-cols-2 lg::grid-cols-3 gap-10 mx-auto my-10'>
        //         {   
        //             reviews.map(review => 
                        
        //                 <ReviewCard
        //                 key={review._id}
        //                 review={review}
        //                 >

        //                 </ReviewCard>
        //             )

        //         }
        //         </div>
    );
};

export default MyReview;