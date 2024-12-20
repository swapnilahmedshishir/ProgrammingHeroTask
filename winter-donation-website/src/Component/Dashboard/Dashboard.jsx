import React, { useContext } from "react";

import { useNavigate } from "react-router-dom";
import { AppContext } from "../../Context/ContextApi";

const Dashboard = () => {
  const { user } = useContext(AppContext);
  const navigate = useNavigate();

  if (!user) {
    return <p>Loading...</p>;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-20 mb-3">
      <h1 className="text-3xl font-bold mb-6">Welcome, {user.displayName}!</h1>
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-sm">
        <img
          src={user.photoURL || "https://via.placeholder.com/150"}
          alt={user.displayName}
          className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
        />
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-2">{user.displayName}</h2>
          <p className="text-gray-600 mb-4">{user.email}</p>
          <button
            onClick={() => navigate("/update-profile")}
            className="w-full py-2 bg-gradient-to-r from-[#031741] via-[#03d2fc] to-[#022d33] text-white font-bold rounded-lg hover:bg-gradient-to-l transition duration-300"
          >
            Update Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
