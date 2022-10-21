import React, { useContext } from 'react';
import { Spinner } from 'react-bootstrap';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();

    if (loading) {
        return <Spinner size='sm' animation="grow" variant="primary" />
    }

    if (!user) {

        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
}


export default PrivateRoute;