import React, { useContext } from 'react';
import { AuthContext } from '../../../../Context/AurhProvider/AuthProvider';

const AllSellers = () => {
    const { userInfo } = useContext(AuthContext);
    const role = userInfo?.userRole;
    if (role === "Admin"){
    return (
        <div>
            <p>Admin see ALL sellers</p>
        </div>
    );
    }
};

export default AllSellers;