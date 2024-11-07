import React, { useState } from "react";
import ProductCatagory from "./ProductCatagory/ProductCatagory";
import Products from "./Products/Products";

const ProductSection = () => {
  const [activeCategory, setActiveCategory] = useState("All Product");

  return (
    <div className="-mt-32">
      {/* product section top text */}
      <div className="text-center mb-12">
        <h2 className="Cutting_Edge_text">Explore Cutting-Edge Gadgets</h2>
      </div>

      <div className="gadget_poduct_main_div">
        <ProductCatagory
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <Products activeCategory={activeCategory} />
      </div>
    </div>
  );
};

export default ProductSection;
