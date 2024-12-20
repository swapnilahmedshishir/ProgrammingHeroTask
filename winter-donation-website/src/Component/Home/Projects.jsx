import React from "react";
import { FaArrowRight } from "react-icons/fa";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(useGSAP);

const campaigns = [
  {
    id: 1,
    title: "Warm Blankets for Children",
    image: "/assets/campaigns/blanket-donation.png",
    description:
      "Help us provide cozy blankets to underprivileged children this winter.",
  },
  {
    id: 2,
    title: "Sweater Drive for Seniors",
    image: "/assets/campaigns/sweater-drive.png",
    description:
      "Donate sweaters to keep our senior citizens warm during the cold nights.",
  },
  {
    id: 3,
    title: "Winter Kits for Homeless",
    image: "/assets/campaigns/winter-kits.png",
    description:
      "Join us in distributing winter kits including gloves, scarves, and beanies.",
  },
];

const FeaturedCampaignsSection = () => {
  useGSAP(() => {
    const cards = document.querySelectorAll(".campaign-card");
    cards.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 100 * (index % 2 === 0 ? 1 : -1),
        duration: 0.8,
        delay: 0.2 * index,
      });
    });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <section className="bg-white py-20 FeaturedCampaigns">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-bold text-[#011C52] text-center mb-12">
          Featured Campaigns
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {campaigns.map((campaign) => (
            <div
              key={campaign.id}
              className={`bg-gray-100 rounded-lg shadow-lg p-5 campaign-card`}
            >
              <img
                src={campaign.image}
                alt={campaign.title}
                className="w-full h-96 object-cover rounded-lg mb-5"
              />
              <h3 className="text-2xl font-semibold text-[#031741] mb-3">
                {campaign.title}
              </h3>
              <p className="text-gray-700 mb-5">{campaign.description}</p>
              <button className="flex items-center text-[#031741] font-bold hover:underline">
                Learn More <FaArrowRight className="ml-2" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCampaignsSection;
