import React, { useState } from "react";
//assets
import headphone from "../../assets/headphone.jpg";
//mui
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const CartProduct = ({ item }) => {
  const [quantity, setQuantity] = useState(item.itemquantity);

  /*   let primarycolor = useState(
    getComputedStyle(document.documentElement).getPropertyValue(`--primary`) //getting value of primary var from css
  ); */
  const handleQuantity = (text) => {
    if (text === "add") {
      setQuantity(quantity + 1);
    } else {
      if (quantity - 1 !== 0) {
        setQuantity(quantity - 1);
      }
    }
  };
  return (
    <div className="cartproduct">
      <img src={headphone} alt="Product" className="cartproductimg" />
      <div className="cartproductd1">
        <h1 className="cartproducth1">{item.itemname}</h1>
        <p className="cartproductp1">$ {item.itemprice}</p>
      </div>
      <div className="cartproductd2">
        <AddIcon
          className="cartproductd2icon"
          sx={{
            cursor: "pointer",
            fontSize: "2rem",
          }}
          onClick={() => handleQuantity("add")}
        />
        <p className="cartproductd2quannumber"> {quantity} </p>

        <RemoveIcon
          className="cartproductd2icon"
          sx={{
            cursor: "pointer",
            fontSize: "2rem",
          }}
          onClick={() => handleQuantity("remove")}
        />
      </div>
    </div>
  );
};

export default CartProduct;
