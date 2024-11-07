import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export const Erro = () => {
  return (
    <div class="bg-gray-100 flex items-center justify-center h-screen">
      <Helmet>
        <title> 404 page || Gadget Heaven </title>
      </Helmet>
      <div class="text-center p-6 max-w-lg">
        <img
          src="/assets/image.png"
          alt="404 Image"
          class="mx-auto mb-6 rounded-lg shadow-lg"
        />

        <h1 class="text-6xl font-bold text-purple-700">Page Not Found</h1>
        <p class="text-gray-500 mt-2">
          The page you are looking for doesn't exist or has been moved.
        </p>

        <Link
          to="/"
          class="mt-6 inline-block bg-purple-600 text-white font-semibold py-2 px-4 rounded-full hover:bg-purple-700 transition duration-200"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};
