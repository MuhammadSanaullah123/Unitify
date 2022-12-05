import React, { useState } from "react";
//assets
import headphone from "../../assets/headphone.jpg";
//mui
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const CartProduct = () => {
  const [quantity, setQuantity] = useState(1);
  let price = 123;
  /*   let primarycolor = useState(
    getComputedStyle(document.documentElement).getPropertyValue(`--primary`) //getting value of primary var from css
  ); */
  const handleQuantity = (text) => {
    if (text === "add") {
      setQuantity(quantity + 1);
    } else {
      if (quantity - 1 <= 0) {
        alert("Cannot set quantity to 0");
      } else {
        setQuantity(quantity - 1);
      }
    }
  };
  return (
    <div className="cartproduct">
      <img src={headphone} alt="Product" className="cartproductimg" />
      <div className="cartproductd1">
        <h1 className="cartproducth1">Lorem Ipsum</h1>
        <p className="cartproductp1">$ {price * quantity}</p>
      </div>
      <div className="cartproductd2">
        <AddIcon
          className="cartproductd2icon"
          sx={{
            //  color: primarycolor,
            fontSize: "2rem",
          }}
          onClick={() => handleQuantity("add")}
        />
        <p className="cartproductd2quannumber"> {quantity} </p>

        <RemoveIcon
          className="cartproductd2icon"
          sx={{
            // color: primarycolor,
            fontSize: "2rem",
          }}
          onClick={() => handleQuantity("remove")}
        />
      </div>
    </div>
  );
};

export default CartProduct;
