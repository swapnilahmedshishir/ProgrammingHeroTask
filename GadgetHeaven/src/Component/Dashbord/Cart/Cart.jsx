import React, { useContext, useState } from "react";
import { AppContext } from "../../../ContextApi/ContextApi";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart } = useContext(AppContext);
  const [sortedCart, setSortedCart] = useState(cart);
  const navigate = useNavigate();

  const sortByPrice = () => {
    const sorted = [...cart].sort((a, b) => b.price - a.price);
    setSortedCart(sorted);
  };

  const getTotalPrice = () => {
    return sortedCart.reduce((total, item) => total + item.price, 0);
  };

  const handleCheckout = () => {
    document.getElementById("my_modal_5").showModal();
    clearCart();
  };

  const handleCloseModal = () => {
    navigate(`/`);
  };
  return (
    <div className="max-w-[80rem] m-auto mt-10">
      <div className="flex justify-between">
        <h1 className="mainHedding_text">Cart</h1>
        <div className="flex items-center gap-6">
          <div className="text-right font-bold">
            Total Price: ${getTotalPrice()}
          </div>
          <button
            className="btn bg-white wave text-purple-500 rounded-full w-fit text-lg outline-double outline-purple-500 whitespace-nowrap"
            onClick={() => sortByPrice()}
          >
            Sort by Price{" "}
            <svg
              width="24.000000"
              height="24.000000"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
            >
              <desc>Created with Pixso.</desc>
              <defs>
                <clipPath id="clip13_2554">
                  <rect
                    id="Frame"
                    rx="0.000000"
                    width="23.000000"
                    height="23.000000"
                    transform="translate(0.500000 0.500000)"
                    fill="white"
                    fill-opacity="0"
                  />
                </clipPath>
              </defs>
              <rect
                id="Frame"
                rx="0.000000"
                width="23.000000"
                height="23.000000"
                transform="translate(0.500000 0.500000)"
                fill="#FFFFFF"
                fill-opacity="0"
              />
              <g clip-path="url(#clip13_2554)">
                <path
                  id="Vector"
                  d="M4.58 11.41C4.96 11.78 5.46 12 6 12C6.53 12 7.03 11.78 7.41 11.41C7.78 11.03 8 10.53 8 10C8 9.46 7.78 8.96 7.41 8.58C7.03 8.21 6.53 8 6 8C5.46 8 4.96 8.21 4.58 8.58C4.21 8.96 4 9.46 4 10C4 10.53 4.21 11.03 4.58 11.41Z"
                  stroke="#8332C5"
                  stroke-opacity="1.000000"
                  stroke-width="1.500000"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector"
                  d="M6 4L6 8"
                  stroke="#8332C5"
                  stroke-opacity="1.000000"
                  stroke-width="1.500000"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                />
                <path
                  id="Vector"
                  d="M6 12L6 20"
                  stroke="#8332C5"
                  stroke-opacity="1.000000"
                  stroke-width="1.500000"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                />
                <path
                  id="Vector"
                  d="M10.58 17.41C10.96 17.78 11.46 18 12 18C12.53 18 13.03 17.78 13.41 17.41C13.78 17.03 14 16.53 14 16C14 15.46 13.78 14.96 13.41 14.58C13.03 14.21 12.53 14 12 14C11.46 14 10.96 14.21 10.58 14.58C10.21 14.96 10 15.46 10 16C10 16.53 10.21 17.03 10.58 17.41Z"
                  stroke="#8332C5"
                  stroke-opacity="1.000000"
                  stroke-width="1.500000"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector"
                  d="M12 4L12 14"
                  stroke="#8332C5"
                  stroke-opacity="1.000000"
                  stroke-width="1.500000"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                />
                <path
                  id="Vector"
                  d="M12 18L12 20"
                  stroke="#8332C5"
                  stroke-opacity="1.000000"
                  stroke-width="1.500000"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                />
                <path
                  id="Vector"
                  d="M16.58 8.41C16.96 8.78 17.46 9 18 9C18.53 9 19.03 8.78 19.41 8.41C19.78 8.03 20 7.53 20 7C20 6.46 19.78 5.96 19.41 5.58C19.03 5.21 18.53 5 18 5C17.46 5 16.96 5.21 16.58 5.58C16.21 5.96 16 6.46 16 7C16 7.53 16.21 8.03 16.58 8.41Z"
                  stroke="#8332C5"
                  stroke-opacity="1.000000"
                  stroke-width="1.500000"
                  stroke-linejoin="round"
                />
                <path
                  id="Vector"
                  d="M18 4L18 5"
                  stroke="#8332C5"
                  stroke-opacity="1.000000"
                  stroke-width="1.500000"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                />
                <path
                  id="Vector"
                  d="M18 9L18 20"
                  stroke="#8332C5"
                  stroke-opacity="1.000000"
                  stroke-width="1.500000"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                />
              </g>
            </svg>
          </button>
          <button
            className="btn bg-purple-500 wave text-white hover:text-gray-900 rounded-full w-40 text-lg"
            onClick={handleCheckout}
            disabled={cart.length === 0 || getTotalPrice() === 0}
          >
            Purchase
          </button>
        </div>
      </div>

      <div className="mt-6">
        {sortedCart.map(
          (item, index) => (
            console.log(item),
            (
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
            )
          )
        )}
        ;
      </div>

      {/* Modal */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box text-center">
          <img src="/assets/Group.png" alt="" className="w-fit mx-auto" />
          <h3 className="font-bold text-lg pt-3">Payment SuccessFully</h3>
          <div className="divider h-0"></div>
          <p className="font-bold text-gray-800">Thanks for Purchasing.</p>
          <p className="py-3">Total:{getTotalPrice()} </p>

          <button className="btn btn-wide" onClick={handleCloseModal}>
            Close
          </button>
        </div>
      </dialog>
    </div>
  );
};

export default Cart;
