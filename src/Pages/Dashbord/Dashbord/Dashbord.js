import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../../Context/AurhProvider/AuthProvider';
import Header from '../../Shared/Header/Header';

const Dashbord = () => {
    const { userInfo } = useContext(AuthContext);
    const role = userInfo?.userRole;

    if (role === "Buyer") {
        return (
            <div>
                <Header></Header>
                <div className="drawer drawer-mobile">
                    <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        <Outlet></Outlet>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                            <li><Link to="/dashbord/myOrders">My Orders</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
    if (role === "Seller") {
        return (
            <div>
                <Header></Header>
                <div className="drawer drawer-mobile">
                    <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        <Outlet></Outlet>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                            <li><Link to="/dashbord/addProduct">Add Product</Link></li>
                            <li><Link to="/dashbord/myProducts">My Products</Link></li>
                        </ul>

                    </div>
                </div>
            </div>
        )
    }
    if (role === "Admin") {
        return (
            <div>
                <Header></Header>
                <div className="drawer drawer-mobile">
                    <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-content">
                        <Outlet></Outlet>
                    </div>
                    <div className="drawer-side">
                        <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                            <li><Link to="/dashbord/allSellers">All Sellers</Link></li>
                            <li><Link to="/dashbord/allBuyers">All Buyers</Link></li>
                        </ul>

                    </div>
                </div>
            </div>
        )
    }
};

export default Dashbord;