import React, { useContext } from 'react';
import { AuthContext } from '../../../../Context/AurhProvider/AuthProvider';

const AllBuyers = () => {
    const { userInfo } = useContext(AuthContext);
    const role = userInfo?.userRole;
    if (role === "Admin"){
    return (
        <div>
            <p>Admin see ALL BUYERS</p>
        </div>
    );
    }
};

export default AllBuyers;