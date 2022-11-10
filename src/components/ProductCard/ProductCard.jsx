import React, { useState } from "react";
//assets
import headphone from "../../assets/headphone.jpg";
const ProductCard = () => {
  const [path] = useState(window.location.pathname);
  console.log(path);
  return (
    <>
      <div
        style={{
          backgroundImage: "url(" + headphone + ")",
        }}
        className={path === "/home" ? "productcardd1" : "productcardlistd1"}
      >
        <div className="productcardd2">
          <h6 className="productcardh1">Lorem Ipsum</h6>
          <p className="productcardp1">Price: $12</p>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
