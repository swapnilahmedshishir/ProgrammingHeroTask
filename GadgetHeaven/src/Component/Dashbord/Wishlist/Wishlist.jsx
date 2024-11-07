import React, { useContext } from "react";
import { FaShoppingCart, FaRegHeart } from "react-icons/fa";
import { AppContext } from "../../../ContextApi/ContextApi";
import { Button } from "@material-tailwind/react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const { wishlist } = useContext(AppContext);

  return (
    <div className="max-w-[80rem] m-auto mt-10">
      <div className="flex justify-between">
        <h1 className="mainHedding_text">Wishlist</h1>
      </div>
      <div className="mt-6">
        {wishlist.map((item, index) => (
          <div
            key={index}
            className="w-full ring-2 ring-gray-200 md:p-7 flex justify-between items-center md:m-4 rounded-md"
          >
            <div className="flex items-center gap-5">
              <img
                src={item.product_image}
                alt="Kane Williamson"
                className="w-40"
              />
              <div className="product_card_details_div ">
                <h2 className="card-title flex items-center gap-2">
                  {item.product_title}
                </h2>
                <p>{item.description}</p>
                <h2 className="productsDatilas_productprice">
                  Price: $ {item.price}
                </h2>
                <Link to={`/product/${item.product_id}`}>
                  <Button
                    onClick={() => addToCart(wishlist)}
                    className="btn text-white bg-purple-500 hover:text-black rounded-full w-fit whitespace-nowrap"
                  >
                    {" "}
                    Add To Card{" "}
                    <span>
                      <FaShoppingCart />
                    </span>{" "}
                  </Button>
                </Link>
              </div>
            </div>
            <div>
              <button className="text-red-500 cursor-pointer">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17 4H22V6H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V6H2V4H7V2H17V4ZM9 9V17H11V9H9ZM13 9V17H15V9H13Z"></path>
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
