import React, { useContext, useState } from "react";
import Cart from "./Cart/Cart";
import Wishlist from "./Wishlist/Wishlist";
import { AppContext } from "../../ContextApi/ContextApi";
import { Helmet } from "react-helmet";

const Dashbord = () => {
  const { activeTab, setActiveTab } = useContext(AppContext);

  return (
    <div>
      <Helmet>
        <title>Dashboard || Gadget Heaven </title>
      </Helmet>
      <div className=" bg-purple-700 rounded-2xl  px-4">
        <div className="hero pt-12 pb-12">
          <div className="hero-content text-center">
            <div className="max-w-[65rem]">
              <h1 className="text-5xl font-bold text-white">Dashboard</h1>
              <p className="py-6 text-white">
                Explore the latest gadgets that will take your experience to the
                next level. From smart devices to the coolest accessories, we
                have it all!
              </p>
              <div className="flex gap-11 w-fit mx-auto pt-7">
                <button
                  className={`btn w-36 rounded-full ${
                    activeTab === "cart"
                      ? "bg-gray-400 text-purple-500"
                      : "text-white bg-purple-500"
                  }`}
                  onClick={() => setActiveTab("cart")}
                >
                  Cart
                </button>
                <button
                  className={`btn w-36 rounded-full ${
                    activeTab === "wishlist"
                      ? "bg-gray-400 text-purple-500"
                      : "text-white bg-purple-500"
                  }`}
                  onClick={() => setActiveTab("wishlist")}
                >
                  Wishlist
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {activeTab === "cart" ? <Cart /> : <Wishlist />}
    </div>
  );
};

export default Dashbord;
