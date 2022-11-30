import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AurhProvider/AuthProvider';

const Header = () => {

    const {user, logOut, userInfo} = useContext(AuthContext);

    const menuItems = <>
        <li className='font-semibold text-teal-500'><Link to='/'>Home</Link></li>
        <li className='font-semibold text-teal-500'><Link to='/products'>Product</Link></li>
        <li className='font-semibold text-teal-500'><Link to='/blog'>Blog</Link></li>
        {
            user?.uid ?
            <>
                <li className='font-semibold'><Link to='/dashbord'>DashBord</Link></li>
            </>
            :
            <></>
        }

    </>



    return (
        <div className="navbar py-10 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="flex md:mx-5">
                    <img src='../../../logo.png' className="inline-block fill-current w-1/6" alt='paint hub'></img>
                    <h1 className='font-bold text-2xl md:text-3xl mx-3 text-yellow-500'>Stove World</h1>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user?.uid ?
                    <>
                        <img src={user?.photoURL} className='w-1/12 rounded-full md:mx-3' alt=''></img> 
                        <span className='mx-1 font-semibold text-sm md:text-lg'>{user?.displayName || userInfo?.name}</span>
                        <button onClick={logOut} className="btn btn-outline btn-xs rounded-md p-1 text-xs text-blue-800 mx-3" > Log out</button>
                    </>
                    :
                    <>
                        <Link to='/login'><button className="btn btn-outline btn-primary btn-sm rounded-md">Login</button></Link>
                    </>
                }
            </div>
        </div>
    );
};

export default Header;