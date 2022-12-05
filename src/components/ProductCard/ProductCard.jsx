import React, { useState } from "react";
import { Link } from "react-router-dom";

//assets
import headphone from "../../assets/headphone.jpg";
const ProductCard = () => {
  const [path] = useState(window.location.pathname);

  return (
    <>
      <Link to="/product" style={{ textDecoration: "none" }}>
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
      </Link>
    </>
  );
};

export default ProductCard;
