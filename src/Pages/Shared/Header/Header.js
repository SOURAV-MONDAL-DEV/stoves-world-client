import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AurhProvider/AuthProvider';

const Header = () => {

    const {user, logOut, userInfo} = useContext(AuthContext);
    console.log(userInfo);


    const menuItems = <>
        <li className='font-semibold text-xl rounded-lg hover:bg-lime-200 hover:rounded-lg text-red-500'><Link className='hover:rounded-lg' to='/'>Home</Link></li>
        <li className='font-semibold text-xl rounded-lg hover:bg-lime-200 hover:rounded-lg text-red-500'><Link className='hover:rounded-lg' to='/products'>Product</Link></li>
        <li className='font-semibold text-xl rounded-lg hover:bg-lime-200 hover:rounded-lg text-red-500'><Link className='hover:rounded-lg' to='/blog'>Blog</Link></li>
        {
            userInfo?.userRole === "Admin" ?
            <>
                <li className='font-semibold text-xl rounded-lg hover:bg-lime-200 hover:rounded-lg text-red-500'><Link className='hover:rounded-lg' to='/dashbord/allSellers'>My DashBord</Link></li>
            </>
            : 
            <></>
        }
        {
            userInfo?.userRole === "Seller" ?
            <>
                <li className='font-semibold text-xl rounded-lg hover:bg-lime-200 hover:rounded-lg text-red-500'><Link className='hover:rounded-lg' to='/dashbord/addProduct'>My DashBord</Link></li>
            </>
            :
            <></>
        }
        {
            userInfo?.userRole === "Buyer" ?
            <>
                <li className='font-semibold text-xl rounded-lg hover:bg-lime-200 hover:rounded-lg text-red-500'><Link className='hover:rounded-lg' to='/dashbord/myOrders'>My DashBord</Link></li>
            </>
            :
            <></>
        }

    </>


            // user?.uid ?
            // <>
            //     <li className='font-semibold  rounded-lg hover:bg-yellow-200 hover:rounded-lg text-teal-500'><Link className='hover:rounded-lg' to='/dashbord'>DashBord</Link></li>
            // </>
            // :
            // <></>




    return (
        <div className="navbar py-2  w-full bg-opacity-30 sticky top-0 z-10 shadow  backdrop-filter backdrop-blur-lg ">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden px-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="flex items-center md:mx-5">
                    <img src='../../../logonew.png' className="inline-block fill-current w-1/4 md:w-1/6" alt='paint hub'></img>
                    <h1 className='font-bold text-2xl md:text-3xl tracking-wide mx-1 md:mx-2 text-rose-500 font-link'>Kitchener</h1>
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
                        <p>
                        <Link to='/login'><button className=" text-sm md:text-base underline text-cyan-600 p-1">Login </button></Link>
                        <Link ><button className=" text-sm md:text-base text-cyan-600"> / </button></Link>
                        <Link to='/signup'><button className=" text-sm md:text-base underline text-cyan-600 p-1"> Sign Up</button></Link>
                        </p>
                    </>
                }
            </div>
        </div>
    );
};

export default Header;