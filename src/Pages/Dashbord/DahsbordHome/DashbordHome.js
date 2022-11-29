import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/AurhProvider/AuthProvider';
import AdminDashbord from '../AdminDashbord/AdminDashbord';
import BuyerDashbord from '../BuyerDashbord/BuyerDashbord';
import SellerDashbord from '../SellerDashbord/SellerDashbord';


const DashbordHome = () => {
    const {userInfo } = useContext(AuthContext);
    const role = userInfo?.userRole;

    if(role === "Buyer"){
        return(
            <BuyerDashbord></BuyerDashbord>
        )
    }
    if(role === "Seller"){
        return(
            <SellerDashbord></SellerDashbord>
        )
    }
    if(role === "Admin"){
        return(
            <AdminDashbord></AdminDashbord>
        )
    }

    
};

export default DashbordHome;