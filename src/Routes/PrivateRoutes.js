import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';

/**
------------------------------
the use case of private route
------------------------------
 * 1. only allowing the Authenticated user on that particuler route.
 * 2. 
 * 3. Redirect the user to that page they wanted to go before login.
 * 4.
 */

const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation()
    if (loading) {
        return <div> Loading.....</div>
    }
    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></ Navigate>
    }
    return children
};

export default PrivateRoutes;