import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import { auth } from "../Auth/FirebaseAuth";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // Pre-fill email if passed via state
  const prefilledEmail = location.state?.email || "";

  useEffect(() => {
    if (prefilledEmail) setEmail(prefilledEmail);
  }, [prefilledEmail]);

  const handleResetPassword = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email.");
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Password reset email sent! Check your inbox.");
        window.location.href = "https://mail.google.com/";
      })
      .catch((error) => {
        // console.error(error);
        toast.error(
          error.message || "Failed to send password reset email. Try again."
        );
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4 py-20">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Reset Password
        </h2>
        <form onSubmit={handleResetPassword} className="space-y-4">
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
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Reset Button */}
          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-[#031741] via-[#03d2fc] to-[#022d33] text-white font-bold rounded-lg hover:bg-blue-500 transition duration-300"
          >
            Reset Password
          </button>
        </form>
        <p className="text-center text-gray-600 mt-6">
          Remember your password?{" "}
          <button
            onClick={() => navigate("/login")}
            className="text-blue-600 hover:underline"
          >
            Go back to Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
