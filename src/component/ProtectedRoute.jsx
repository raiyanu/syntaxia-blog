import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = () => {
    const { loggedIn } = useSelector((state) => state.auth);

    return loggedIn ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;