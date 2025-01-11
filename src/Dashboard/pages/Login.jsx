import React, { useState } from "react";
import BgImage from '../../Assets/images/dashboard-bg.png'
import Logo from '../../Assets/images/logo.png'
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();

    const handleRememberMeToggle = () => {
        setRememberMe(!rememberMe);
    };

    const [userData, setUserData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const {name, value} = e.target;
        console.log({name, value})

        setUserData((prev) => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("userData ===>", userData);

        setUserData({
            name: '',
            email: '',
            password: ''
        })
    }

    return (
        <div
            className="relative min-h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${BgImage})` }}
        >
            <div className="flex flex-col items-center justify-center min-h-screen 2xsm-md:w-10/12 2xsm-md:m-auto ">
                <div className="flex justify-center mb-6">
                    <img
                        src={Logo}
                        alt="Logo"
                        className="h-25 w-100 2xsm-xsm:h-20 2xsm-xsm:w-75"
                    />
                </div>

                <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
                    <h2 className="text-2xl font-bold text-left text-green-700 md:text-3xl">Welcome Back</h2>
                    <h5 className="text-sm font-normal text-left mb-6 text-green-700">Enter your email and password to sign-in</h5>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-left text-md font-medium text-gray-700 mb-1 2xsm-md:text-sm">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 2xsm-md:md:text-sm"
                                placeholder="Enter your email"
                                value={userData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password" className="block text-left text-md font-medium text-gray-700 mb-1 2xsm-md:text-sm">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 2xsm-md:text-sm"
                                placeholder="Enter your password"
                                value={userData.password}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="flex items-center mb-6">
                            <input
                                type="checkbox"
                                id="rememberMe"
                                checked={rememberMe}
                                onChange={handleRememberMeToggle}
                                style={{
                                    width: "16px",
                                    height: "16px",
                                    accentColor: rememberMe ? "green" : undefined,
                                    border: "2px solid gray",
                                    backgroundColor: rememberMe ? "green" : "white",
                                    borderRadius: "4px",
                                    cursor: "pointer",
                                }}
                            />
                            <label htmlFor="rememberMe" className="ml-2 text-sm text-green-700">
                                Remember Me
                            </label>
                        </div>

                        <div className="flex items-center mb-6">
                            <label htmlFor="forgot_password" className="text-sm text-green-700">
                                Forgot password?
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-green-700 text-white mb-4 py-2 px-4 rounded-lg hover:bg-green-800 transition duration-300 2xsm-md:text-sm"
                            // onSubmit={handleSubmit}
                        >
                            SIGN IN
                        </button>
                        <span className="text-green-700 2xsm-md:text-sm">Don't have an account ? &nbsp;
                            <span className="text-green-700" onClick={() => navigate("/dashboard/register")}>
                                Sign up
                            </span>
                        </span>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
