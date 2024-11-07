import React from "react";
import { Helmet } from "react-helmet";
const OrderTracking = () => {
  return (
    <div className="bg-gray-100 text-gray-800 rounded-3xl">
      <Helmet>
        <title>Order Tracking || Gadget Heaven </title>
      </Helmet>
      <div className="max-w-3xl mx-auto py-12 px-6">
        <h1 className="text-4xl font-bold text-center text-purple-700 mb-8">
          Order Tracking
        </h1>

        <div className="bg-white shadow-md rounded-lg p-6 mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-lg font-semibold text-gray-700">
                Order ID: <span className="text-gray-900">#12345678</span>
              </h2>
              <p className="text-gray-500">Placed on: October 25, 2024</p>
            </div>
            <div>
              <p className="text-gray-500">Estimated Delivery:</p>
              <p className="font-semibold text-gray-900">November 10, 2024</p>
            </div>
          </div>
        </div>
        {/* progress bar  */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4">
            Tracking Progress
          </h2>
          <div className="relative mb-4">
            <div className="flex justify-between mb-4">
              <span className="text-xs font-medium text-purple-700">
                Order Placed
              </span>
              <span className="text-xs font-medium text-purple-700">
                Processing
              </span>
              <span className="text-xs font-medium text-purple-700">
                Shipped
              </span>
              <span className="text-xs font-medium text-purple-700">
                Delivered
              </span>
            </div>
            <div className="w-full h-1 bg-gray-300 rounded-full">
              <div className="h-1 bg-purple-500 rounded-full w-[75%]"></div>
            </div>
          </div>

          <div className="space-y-6">
            {/* 01 */}
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 flex items-center justify-center bg-purple-500 text-white rounded-full">
                <span className="font-bold">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Order Placed</h3>
                <p className="text-sm text-gray-500">
                  Your order has been successfully placed.
                </p>
              </div>
            </div>
            {/* 02 */}
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 flex items-center justify-center bg-purple-500 text-white rounded-full">
                <span className="font-bold">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Processing</h3>
                <p className="text-sm text-gray-500">
                  Your order is currently being processed.
                </p>
              </div>
            </div>
            {/* 03 */}
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 flex items-center justify-center bg-purple-500 text-white rounded-full">
                <span className="font-bold">✓</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Shipped</h3>
                <p className="text-sm text-gray-500">
                  Your order has been shipped and is on its way.
                </p>
              </div>
            </div>
            {/* 01 */}
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 flex items-center justify-center bg-gray-300 text-gray-500 rounded-full">
                <span className="font-bold">...</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">Delivered</h3>
                <p className="text-sm text-gray-500">
                  Your order will be delivered soon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderTracking;
