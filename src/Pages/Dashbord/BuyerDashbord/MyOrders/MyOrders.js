import React, { useContext } from 'react';
import { AuthContext } from '../../../../Context/AurhProvider/AuthProvider';

const MyOrders = () => {
    const { user, userInfo } = useContext(AuthContext);
    const role = userInfo?.userRole;

    if (role === "Buyer") {
    return (
        <div>
            <p>eigula kinbo </p>
            <p>my orders</p>
        </div>
    );
    }
};

export default MyOrders;