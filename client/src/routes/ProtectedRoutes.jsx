import { Navigate } from "react-router-dom";
import { useAuthStore } from "../modules/cms/auth/stores/auth.stores";

const ProtectedRoute = ({ children }) => {
    const isAuthenticated = useAuthStore((s) => s.isAuthenticated);

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

export default ProtectedRoute;
