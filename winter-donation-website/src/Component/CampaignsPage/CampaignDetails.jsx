import React, { useState } from "react";
import { useParams, useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const CampaignDetails = () => {
  const { id } = useParams();
  const campaignsData = useLoaderData();
  const campaign = campaignsData.find((item) => item.id === parseInt(id));

  const [quantity, setQuantity] = useState("");
  const [itemType, setItemType] = useState("");
  const [pickupLocation, setPickupLocation] = useState("");
  const [notes, setNotes] = useState("");

  if (!campaign) {
    return <p>Campaign not found.</p>;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Display a success toast message
    toast.success("Thank you! We will reach your destination soon.");

    // Clear the form fields
    setQuantity("");
    setItemType("");
    setPickupLocation("");
    setNotes("");
  };

  return (
    <div className="min-h-screen  md:px-10 lg:px-20 px-4 py-20 mb-3">
      <h1 className="text-3xl font-bold mb-5">{campaign.title}</h1>
      <img
        src={campaign.image}
        alt={campaign.title}
        className="w-full object-cover rounded-lg mb-5"
      />
      <p className="text-gray-700 mb-5">{campaign.description}</p>
      <p className="text-gray-500 mb-10">Division: {campaign.division}</p>

      <h2 className="text-2xl font-semibold mb-5">Donation Form</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block font-medium mb-2">Quantity of Items</label>
          <input
            type="text"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="2 jackets, 3 blankets"
            className="w-full px-4 py-2 border rounded-lg focus:ring-purple-700"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-2">Item Type</label>
          <input
            type="text"
            value={itemType}
            onChange={(e) => setItemType(e.target.value)}
            placeholder="blanket, jacket, sweater"
            className="w-full px-4 py-2 border rounded-lg focus:ring-purple-700"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-2">Pickup Location</label>
          <input
            type="text"
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
            placeholder="House 12, Road 5, Dhanmondi, Dhaka"
            className="w-full px-4 py-2 border rounded-lg focus:ring-purple-700"
            required
          />
        </div>

        <div>
          <label className="block font-medium mb-2">
            Additional Notes (Optional)
          </label>
          <textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Any additional information..."
            className="w-full px-4 py-2 border rounded-lg focus:ring-purple-700"
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-[#031741] via-[#03d2fc] to-[#022d33]   text-white font-bold rounded-lg hover:bg-blue-500 transition duration-300"
        >
          Submit Donation
        </button>
      </form>
    </div>
  );
};

export default CampaignDetails;
