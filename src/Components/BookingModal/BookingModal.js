import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AurhProvider/AuthProvider';

const BookingModal = ({ bookProduct }) => {
    const { productName, _id, isVarified, picture, email, phone, resalePrice, originalPrice, condition, sellerName, usedYear, location, postingDate } = bookProduct;
    const { userInfo, isLoading } = useContext(AuthContext);
    const navigate = useNavigate();

    // console.log(userInfo, "modal user  info");


    const handleBookNow = event => {
        event.preventDefault();
        const form = event.target;

        const order = {
            productId: _id,
            productName,
            picture,
            resalePrice,
            originalPrice,
            condition: condition,
            sellerName,
            sellerLocation: location,
            sellerEmail: email,
            sellerPhone: phone,
            buyerEmail: userInfo.email,
            buyerLocation: form.meetingLocation.value,
            buyerPhone: form.buyerPhone.value

        }


        const status = { isSold: true };


        fetch('http://localhost:5000/orders', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast('order placed successfully')
                    navigate('/dashbord/myOrders')

                    fetch(`http://localhost:5000/productSold/${_id}`, {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(status)
                    })
                        .then(res => res.json())
                        .then(data => { 
                            console.log(data);
                        })
                        .catch(er => console.error(er));

                }

            })
            .catch(er => console.error(er));

    }


    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">Put your information</h3>
                    <form onSubmit={handleBookNow} className='grid grid-cols-1 gap-3 mt-10'>
                        <label className="label pb-0 ">
                            Product name
                        </label>
                        <input name="" type="text" defaultValue={productName} placeholder="Your Name" className="input w-full input-bordered" readOnly />
                        <label className="label pb-0 ">
                            Price
                        </label>
                        <input name="" type="text" defaultValue={resalePrice} placeholder="Your Name" className="input w-full input-bordered" readOnly />
                        <label className="label pb-0 ">
                            Your Name
                        </label>
                        <input name="name" type="text" defaultValue={userInfo?.name} placeholder="Your Name" className="input w-full input-bordered" readOnly />
                        <label className="label pb-0 ">
                            Your Email
                        </label>
                        <input name="buyerEmail" type="email" defaultValue={userInfo?.email} placeholder="Email Address" className="input w-full input-bordered" readOnly />
                        <label className="label pb-0 ">
                            Write Your Phone Number
                        </label>
                        <input name="buyerPhone" type="text" placeholder="Phone Number" className="input w-full input-bordered" required />
                        <label className="label pb-0 ">
                            Write Your Meeting Location
                        </label>
                        <input name="meetingLocation" type="text" placeholder="Meeting Location" className="input w-full input-bordered" required />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;