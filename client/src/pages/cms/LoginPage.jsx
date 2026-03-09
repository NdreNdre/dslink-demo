import { Navigate } from "react-router-dom";
import { LoginForm, useAuthStore } from "../../modules/cms/auth/index";

const LoginPage = () => {
    const isAuthenticated = useAuthStore((s) => s.isAuthenticated);

    if (isAuthenticated) {
        return <Navigate to="/login" replace />
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-200 px-4">
            <LoginForm />
        </div>
    );
};

export default LoginPage;