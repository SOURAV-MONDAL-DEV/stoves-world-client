import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../../Context/AurhProvider/AuthProvider';

const AllBuyers = () => {
    const { userInfo } = useContext(AuthContext);
    const [buyers, setBuyers] = useState();
    const [deletingUser, setDeletingUser] = useState(null);
    const navigate = useNavigate();
    const role = userInfo?.userRole;

    // console.log(Buyers);

    useEffect(() => {
        fetch('http://localhost:5000/usersRole/Buyer')
            .then(res => res.json())
            .then(data => setBuyers(data))
    }, [])

    const handleDeleteUser = user => {
        fetch(`http://localhost:5000/users/${user.email}`,{
            method: "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            toast("Delete user successfully")
            navigate('/dashbord/allBuyers')

        })

        console.log(user, "fun dilam");
    }


    if (role === "Admin"){
    return (
        <div>
                <p> ALL Buyers</p>

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
                                buyers?.map((buyer, idx) =>
                                    <tr key={buyer._id} className="hover">
                                        <th>{idx + 1}</th>
                                        <td>{buyer.name}</td>
                                        <td>{buyer.email}</td>
                                        <td className='text-center '><label onClick={() => setDeletingUser(buyer)} htmlFor="confirmation-modal" className="btn btn-xs border-none font-bold text-white bg-red-600">X</label></td>
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

export default AllBuyers;