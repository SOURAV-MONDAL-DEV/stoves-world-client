import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../../Context/AurhProvider/AuthProvider';

const AllSellers = () => {
    const { userInfo, } = useContext(AuthContext);
    const [sellers, setSellers] = useState();
    const [deletingUser, setDeletingUser] = useState(null);
    const role = userInfo?.userRole;

    const [ doFetch, setDoFetch] = useState();

    console.log(doFetch, "seller");

    useEffect(() => {
        fetch('http://localhost:5000/usersRole/Seller')
            .then(res => res.json())
            .then(data => {
                setSellers(data)
                setDoFetch(false)
            })
    }, [doFetch])

    const handleDeleteUser = user => {
        fetch(`http://localhost:5000/users/${user.email}`,{
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                setDoFetch(true)
                console.log(data);
            }
            toast("Delete user successfully")
        })

        console.log(user, "fun dilam");
    }



    if (role === "Admin") {
        return (
            <div>
                <p>Admin see ALL sellers</p>

                <div className="overflow-x-auto">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Email</th>
                                <th className='text-center'>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                sellers?.map((seller, idx) =>
                                    <tr key={seller._id} className="hover">
                                        <th>{idx + 1}</th>
                                        <td>{seller.name}</td>
                                        <td>{seller.email}</td>
                                        <td className='text-center '><label onClick={() => setDeletingUser(seller)} htmlFor="confirmation-modal" className="btn btn-xs border-none font-bold text-white bg-red-600">X</label></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>

                {
                    deletingUser && <div>
                        <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
                        <div className="modal">
                            <div className="modal-box">
                                <h3 className="font-bold text-lg">Delete "{deletingUser.name}" ?</h3>
                                <p className="py-4">Once you delete. You can not undo the user. </p>
                                <div className="modal-action">
                                    <button onClick={() => setDeletingUser(null)} className='btn btn-outline'>Cancel</button>
                                    <label onClick={()=> handleDeleteUser(deletingUser)} htmlFor="confirmation-modal" className="btn">Delete</label>
                                </div>
                            </div>
                        </div>
                    </div>
                }

            </div>
        );
    }
};

export default AllSellers;