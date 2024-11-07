import React, { useEffect, useState } from "react";
import { Product } from "../Product/Product";

const Products = ({ activeCategory }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/FackData/FackData.json")
      .then((response) => response.json())
      .then((jsonData) => setData(jsonData))
      .catch((error) => console.error("Error fetching JSON data:", error));
  }, []);

  const filteredData = data.filter((product) =>
    activeCategory === "All Product"
      ? true
      : product.category === activeCategory
  );

  return (
    <div className="products_main_div">
      {filteredData.length > 0 ? (
        filteredData.map((product, index) => (
          <Product key={index} product={product} />
        ))
      ) : (
        <div className="text-center w-full">
          {" "}
          <h3 className="text-red-400 font-extrabold text-5xl mt-16">
            Sorry this catagory No Product
          </h3>{" "}
        </div>
      )}
    </div>
  );
};

export default Products;
