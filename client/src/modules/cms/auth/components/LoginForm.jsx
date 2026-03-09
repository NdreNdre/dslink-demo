import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../index";
import { redirectToastResponse } from "../../../../shared/utils/utilityFunctions";
import { Eye, EyeOff } from "lucide-react";
import DSLinkLogo from "../../../../assets/DSLink_logo_text_1.png"

const LoginForm = () => {

    const navigate = useNavigate();
    const { login, loading, error } = useAuthStore();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const submit = async (e) => {
        e.preventDefault();
        const result = await login({ username, password });
        redirectToastResponse('Login Successfully', result, 'dashboard', navigate);
    };

    return (
        <div className="w-full max-w-md bg-white rounded-xl shadow-md border border-gray-200 p-8">

            <div className="w-full flex justify-center items-center h-16">
                <img src={DSLinkLogo} alt="DS Link Logo" className="w-48 h-48 absolute" />
            </div>
            {/* Company Title */}
            {/* <h2 className="text-center text-[#023db3] font-semibold text-lg mb-6">
                DS LINK
            </h2> */}

            {/* Login Title */}
            <h1 className="text-xl font-semibold text-gray-800 mb-6">
                Login
            </h1>

            <form onSubmit={submit} className="space-y-5">

                {/* Username */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                        Email/Username
                    </label>
                    <input
                        className="w-full border border-gray-300 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-gray-400 transition"
                        placeholder="Email/Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>

                {/* Password */}
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                        Password
                    </label>

                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            className="w-full border border-gray-300 rounded-lg px-4 py-2.5 pr-12 focus:outline-none focus:ring-2 focus:ring-gray-400 transition"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    </div>
                </div>

                {/* Error */}
                {error && (
                    <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
                        {error}
                    </p>
                )}

                {/* Button */}
                <button
                    disabled={loading}
                    className="bg-gray-900 text-white px-6 py-2.5 rounded-lg font-medium hover:bg-black transition disabled:opacity-50"
                >
                    {loading ? "Signing in..." : "Login"}
                </button>
            </form>
        </div>
    );
};

export default LoginForm;