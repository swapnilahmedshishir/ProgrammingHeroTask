import { Button } from "@material-tailwind/react";
import React, { useContext } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { FaShoppingCart, FaRegHeart } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import { AppContext } from "../../ContextApi/ContextApi";
import { Helmet } from "react-helmet";

const ProductDetalis = () => {
  const { productId } = useParams();
  const data = useLoaderData();
  const { addToCart, addToWishlist, wishlist, cart } = useContext(AppContext);

  const product = data.find((product) => product.product_id === productId);

  const {
    product_title,
    category,
    price,
    product_image,
    description,
    specification,
    availability,
    rating,
  } = product;

  const isInWishlist = wishlist.some((item) => item.product_id === productId);

  if (!data || data.error) {
    return <p>Product not found.</p>;
  }

  return (
    <div>
      <Helmet>
        <title>Product Details || Gadget Heaven </title>
      </Helmet>
      <div className=" bg-purple-700 rounded-2xl  px-4">
        <div className="hero pt-4  pb-32">
          <div className="hero-content text-center">
            <div className="max-w-[65rem]">
              <h1 className="text-5xl font-bold text-white">Product Details</h1>
              <p className="py-6 text-white">
                Explore the latest gadgets that will take your experience to the
                next level. From smart devices to the coolest accessories, we
                have it all!
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Hero Section End */}
      <div className="hero_bttom_section max-w-[79rem] m-auto -translate-y-32">
        <div className="p-5 bg-white rounded-2xl grid grid-cols-3 gap-6">
          <div className="col-span-1 self-center">
            <img src={product_image} alt="" className="rounded-2xl h-96" />
          </div>

          <div className="col-span-2 flex flex-col gap-3">
            <h4 className="productsDatilas_productName">{product_title}</h4>
            <h5 className="productsDatilas_productprice">Price: $ {price}</h5>
            {/* prduct stock product */}
            {availability ? (
              <p className="productsDatilas_productStock">In Stock</p>
            ) : (
              <p className="productsDatilas_productStockOut">In Stock out</p>
            )}

            <p className="productsDatilas_productDes">{description}</p>
            <p className="productsDatilas_productSpecification">
              Specification:
            </p>
            <ul className="productsDatilas_productSpecification_item">
              {specification &&
                specification.map((item, index) => (
                  <li key={index} className="product">
                    {index + 1}. {item}
                  </li>
                ))}
            </ul>
            <p className="productsDatilas_productSpecification">Rating ⭐ </p>
            <div className="productsDatilas_productSpecification flex gap-6">
              <ReactStars size={24} value={rating} edit={false} />
              <span className="ratingNumber">{rating}</span>{" "}
            </div>

            <div className="flex gap-5 mt-3">
              <Button
                onClick={() => addToCart(product)}
                className="btn text-white bg-purple-500 hover:text-black rounded-full w-fit whitespace-nowrap"
              >
                {" "}
                Add To Card{" "}
                <span>
                  <FaShoppingCart />
                </span>{" "}
              </Button>

              <Button
                onClick={() => addToWishlist(product)}
                disabled={isInWishlist}
                className={`btn ${
                  isInWishlist
                    ? "bg-gray-400"
                    : "bg-blue-gray-200 hover:bg-purple-500"
                } text-black rounded-3xl w-fit`}
              >
                <FaRegHeart className="text-2xl" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetalis;
