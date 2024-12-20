import React from "react";
import { useLoaderData, Link } from "react-router-dom";

const CampaignsPage = () => {
  const campaigns = useLoaderData();

  return (
    <div className="min-h-screen py-10 px-5 md:px-10 lg:px-20 bg-gray-50 md:mb-32">
      <h1 className="text-center text-4xl font-extrabold text-gray-800 mb-10">
        Donation Campaigns
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {campaigns.map((campaign) => (
          <div
            key={campaign.id}
            className="flex flex-col bg-white bg-opacity-70 backdrop-blur-lg rounded-3xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2"
          >
            {/* Image Section */}
            <div className="relative h-72 rounded-t-3xl overflow-hidden">
              <img
                src={campaign.image}
                alt={campaign.title}
                className="w-full h-full object-center"
              />
              <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-blue-500 to-blue-700 text-white rounded-full text-xs">
                {campaign.division}
              </div>
            </div>

            {/* Content Section */}
            <div className="flex flex-col flex-1 p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                {campaign.title}
              </h2>
              <p className="text-gray-600 mb-5 line-clamp-3">
                {campaign.description}
              </p>
            </div>

            {/* Button Section */}
            <div className="p-6">
              <Link to={`/campaigns/${campaign.id}`}>
                <button className="w-full py-3 bg-gradient-to-r from-[#031741] via-[#03d2fc] to-[#022d33] text-white font-bold rounded-lg hover:bg-gradient-to-l transition duration-300">
                  Donate Now
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CampaignsPage;
