import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../Context/AurhProvider/AuthProvider';

const AddProduct = () => {

    const { user, userInfo } = useContext(AuthContext);
    const role = userInfo?.userRole;

    const navigate = useNavigate();

    const current = new Date();
    const date = `${current.getDate()}-${current.getMonth() + 1}-${current.getFullYear()}`;

    const handlePlaceProduct = event => {
        event.preventDefault();
        const form = event.target;
        const productName = form.productName.value;
        const photoUrl = form.photoUrl.value;
        const originalPrice = form.originalPrice.value;
        const resalePrice = form.resalePrice.value;
        const usedYear = form.usedYear.value;
        const condition = form.condition.value;
        const category = form.category.value;
        const sellerName = form.sellerName.value;
        const phone = form.phone.value;
        const email = form.sellerEmail.value;
        const location = form.location.value;
        const postingDate = date;
        const description = form.description.value;


        const product = {
            productName,
            photoUrl,
            originalPrice,
            resalePrice,
            usedYear,
            condition,
            category,
            phone,
            location,
            postingDate,
            sellerName,
            email,
            description,
            isSold: false,
            isAdvertised: false,
        }



        fetch('https://stoves-world-server.vercel.app/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast('product add successfully')
                    form.reset();
                    navigate('/dashbord/myProducts')

                }
            })
            .catch(er => console.error(er));

    }
    if (role === "Seller") {
        return (
            <div>
                <div>
                    {
                        user?.uid ?
                            <>
                                <form onSubmit={handlePlaceProduct}>
                                    <h2 className="text-2xl">Add a Product</h2>
                                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5'>
                                        <input name="productName" type="text" placeholder="Write Product Name" className="input input-ghost w-full  input-bordered" required />
                                        <input name="photoUrl" type="text" placeholder="Input product PhotoUrl" className="input input-ghost w-full  input-bordered" required />
                                        <input name="originalPrice" type="text" placeholder="originalPrice" className="input input-ghost w-full  input-bordered" required />
                                        <input name="resalePrice" type="text" placeholder="resalePrice" className="input input-ghost w-full  input-bordered" required />
                                        <input name="usedYear" type="text" placeholder="used year" className="input input-ghost w-full  input-bordered" required />
                                        <div className='flex items-center border'>
                                            <p className='px-6'>category :</p>
                                            <select name='category' className="select max-w-xs">
                                                <option>Gas Stoves</option>
                                                <option>Electric Stoves</option>
                                                <option>Induction Stoves</option>
                                            </select>
                                        </div>
                                        <div className='flex items-center border'>
                                            <p className='px-6'>condition :</p>
                                            <select name='condition' className="select max-w-xs">
                                                <option>Excellent</option>
                                                <option>Good</option>
                                                <option>Fair</option>
                                            </select>
                                        </div>
                                        <input name="sellerName" defaultValue={userInfo?.name} type="text" placeholder="Write Your Name" className="input input-ghost w-full  input-bordered" readOnly required />
                                        <input name="sellerEmail" defaultValue={userInfo?.email} type="text" placeholder="Write Your Name" className="input input-ghost w-full  input-bordered" readOnly required />
                                        <input name="phone" type="text" placeholder="phone" className="input input-ghost w-full  input-bordered" required />
                                        <input name="location" type="text" placeholder="Product location" className="input input-ghost w-full  input-bordered" required />                                    </div>
                                    <textarea name="description" className="textarea textarea-bordered h-24 w-full" placeholder="Product description" required></textarea>

                                    <input className='btn ' type="submit" value="Add Product" />
                                </form>
                            </>
                            :
                            <>
                                <p className='text-center text-dark-500 font-bold text-2xl m-8'>Please Login first for add sevice</p>
                            </>
                    }
                </div>
            </div>
        );
    }
};

export default AddProduct;