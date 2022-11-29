import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../Context/AurhProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (

            <div className="flex justify-center items-center">
                <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full text-purple-500" role="status">
                </div>
                <span className="visually-hidden">Loading...</span>

            </div>
        );
    }

    if (user) {
        return children;
    }


    return <Navigate to="/login" state={{ form: location }} replace ></Navigate>;
};

export default PrivateRoute;