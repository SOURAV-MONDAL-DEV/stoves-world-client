import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AurhProvider/AuthProvider';

const AddService = () => {



    const { user } = useContext(AuthContext);


    const handlePlaceService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.Name.value;
        const image = form.PhotoUrl.value;
        const price = form.Price.value;
        const description = form.Description.value;


        const service = {
            name,
            image,
            price,
            description
        }

        console.log(service);


        fetch('https://paint-service-server.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('service add successfully')
                    form.reset();

                }
            })
            .catch(er => console.error(er));

    }




    return (
        <div>
            {
                    user?.uid ?
                        <>
                            <form onSubmit={handlePlaceService}>
                                <h2 className="text-2xl">Add a service</h2>
                                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-5'>
                                    <input name="Name" type="text" placeholder="Write Service Name" className="input input-ghost w-full  input-bordered" required />
                                    <input name="PhotoUrl" type="text" placeholder="Input Service PhotoUrl" className="input input-ghost w-full  input-bordered" required />
                                    <input name="Price" type="text" placeholder="price" className="input input-ghost w-full  input-bordered" required />
                                </div>
                                <textarea name="Description" className="textarea textarea-bordered h-24 w-full" placeholder="Service description" required></textarea>

                                <input className='btn ' type="submit" value="Add service" />
                            </form>
                        </>
                        :
                        <>
                            <p className='text-center text-dark-500 font-bold text-2xl m-8'>Please Login first for add sevice</p>
                        </>
                }
        </div>
    );
};

export default AddService;