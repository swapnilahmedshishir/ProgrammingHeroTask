import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AppContext } from "../../Context/ContextApi";
import { auth } from "../Auth/FirebaseAuth";
import { updateProfile } from "firebase/auth";

const UpdateProfile = () => {
  const { user, setUser } = useContext(AppContext);

  const [name, setName] = useState(user?.displayName || "");
  const [photoUrl, setPhotoUrl] = useState(user?.photoURL || "");
  const navigate = useNavigate();

  const handleUpdate = (e) => {
    e.preventDefault();

    if (!name || !photoUrl) {
      toast.error("Please provide both name and photo URL.");
      return;
    }

    const currentUser = auth.currentUser;

    if (!currentUser) {
      toast.error("User not authenticated. Please log in again.");
      return;
    }

    // Update user profile in Firebase
    updateProfile(currentUser, {
      displayName: name,
      photoURL: photoUrl,
    })
      .then(() => {
        // Update the user context
        const updatedUserData = {
          ...user,
          displayName: name,
          photoURL: photoUrl,
        };
        setUser(updatedUserData);

        toast.success("Profile updated successfully!");
        navigate("/dashboard");
      })
      .catch((error) => {
        // console.error("Error updating profile:", error);
        toast.error("Failed to update profile. Please try again.");
      });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold mb-6">Update Profile</h1>
      <form onSubmit={handleUpdate} className="w-full max-w-sm">
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <input
          type="url"
          placeholder="Enter photo URL"
          value={photoUrl}
          onChange={(e) => setPhotoUrl(e.target.value)}
          className="w-full p-2 mb-4 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full py-2 bg-gradient-to-r from-[#031741] via-[#03d2fc] to-[#022d33] text-white rounded"
        >
          Update Information
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
