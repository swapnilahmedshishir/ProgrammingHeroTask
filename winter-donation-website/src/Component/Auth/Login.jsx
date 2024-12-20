import React, { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { AppContext } from "../../Context/ContextApi";
import { FaGoogle, FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const { loginUser, setUser, loginWithGoogle } = useContext(AppContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Get the desired route or default to home page
  const from = location.state?.from?.pathname || "/";

  //   handle login from
  const handleLogin = (e) => {
    e.preventDefault();

    // Validate input
    if (!email || !password) {
      toast.error("Please enter both email and password.");
      return;
    }

    // Attempt to log in the user with email and password
    loginUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // console.log("User data:", user);

        // Fetch the user information (displayName and photoURL)
        const userData = {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName || "No Name",
          photoURL: user.photoURL || "https://via.placeholder.com/150",
        };

        // Set user data in context
        setUser(userData);

        // Store user token in localStorage (for session management)
        localStorage.setItem("authToken", user.accessToken);

        // Navigate to the desired route or home page
        toast.success("Login successful!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // console.error("Login error:", errorCode, errorMessage);
        toast.error("Invalid email or password. Please try again.");
      });
  };

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      toast.success("Google login successful!");
      navigate(from, { replace: true });
    } catch (error) {
      // console.error(error.message);
      toast.error("Google login failed!");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 py-20 mb-3">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          User Login
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email Field */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700"
              required
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <label className="block text-gray-700 font-medium mb-2">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-700"
              required
            />
            <div
              className="absolute right-3 top-11 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </div>
          </div>

          {/* Forgot Password Link */}
          <div className="text-right">
            <Link
              to="/forgot-password"
              state={{ email }}
              className="text-blue-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-[#031741] via-[#03d2fc] to-[#022d33] text-white font-bold rounded-lg hover:bg-blue-500 transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="px-3 text-gray-500">OR</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Google Login Button */}
        <button
          onClick={handleGoogleLogin}
          className="w-full py-3 bg-[#031741] text-white font-bold rounded-lg  transition duration-300 flex gap-3 justify-center items-center"
        >
          <FaGoogle /> Continue with Google
        </button>

        {/* Register Link */}
        <p className="text-center text-gray-600 mt-6">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
