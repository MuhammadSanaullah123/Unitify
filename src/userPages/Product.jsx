import React, { useState, useEffect } from "react";

//assets
import headphone from "./../assets/headphone.jpg";

//components
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ProductCard from "../components/ProductCard/ProductCard";

//others
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { v4 as uuid } from "uuid";
import Cookies from "universal-cookie";
//mui
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const responsive2 = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1130, min: 700 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 760, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  /*  const {
      carouselState: { currentSlide },
    } = rest; */
  return (
    <div className="carousel-button-group">
      <ChevronLeftIcon
        className="left_arr"
        style={{ alignSelf: "center", cursor: "pointer" }}
        sx={{ color: "#ff5e00", fontSize: 60 }}
        onClick={() => previous()}
      />
      <ChevronRightIcon
        className="right_arr"
        style={{ alignSelf: "center", cursor: "pointer" }}
        sx={{ color: "#ff5e00", fontSize: 60 }}
        onClick={() => next()}
      />
    </div>
  );
};

const Product = () => {
  /*   let primarycolor = useState(
    getComputedStyle(document.documentElement).getPropertyValue(`--primary`) //getting value of primary var from css
  ); */
  const cookies = new Cookies();
  const [name] = useState("Lorem Ipsum");
  const [id] = useState(uuid());
  const [quantity, setQuantity] = useState(1);
  const [price] = useState(100);

  const [cart, setCart] = useState(cookies.get("cart"));
  //const [cart, setCart] = useState([]);

  const handleQuantity = (text) => {
    if (text === "add") {
      setQuantity(quantity + 1);
    } else {
      if (quantity - 1 !== 0) {
        setQuantity(quantity - 1);
      }
    }
  };

  const Add = () => {
    setCart([
      ...cart,
      {
        itemname: name,
        itemid: id,
        itemprice: price,
        itemquantity: quantity,
      },
    ]);
    window.location.reload(false);
  };
  useEffect(() => {
    cookies.set("cart", cart, { path: "/" });
  });

  console.log("cart array is");
  console.log(cart);

  return (
    <>
      <Navbar />
      <div className="product">
        <div className="productd1">
          <h6 className="productcardh1">{name}</h6>
          <div className="productd1span1">
            <p className="productcardp1">Price: ${price}</p>
          </div>
          <div style={{ marginTop: "20px" }} className="line"></div>
          <div className="productcarddespdiv">
            <h6 className="productcarddesph1">Description</h6>
            <p className="productcarddespp">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <div style={{ marginTop: "20px" }} className="line"></div>

          <div className="productd2">
            <div className="productd2quandiv">
              <p className="productd2quanp">Quantity: </p>
              <AddIcon
                sx={{
                  cursor: "pointer",
                  border: "1px solid",
                  borderRadius: "8px",
                }}
                onClick={() => handleQuantity("add")}
              />
              <p className="productd2quannumber"> {quantity} </p>

              <RemoveIcon
                sx={{
                  cursor: "pointer",
                  border: "1px solid",
                  borderRadius: "8px",
                }}
                onClick={() => handleQuantity("remove")}
              />
            </div>
            <button onClick={Add} className="productd2btn">
              Add to Cart
            </button>
          </div>
        </div>
        <div
          style={{
            backgroundImage: "url(" + headphone + ")",
          }}
          className="productpicdiv"
        >
          <div className="productcardd2"></div>
        </div>
      </div>
      <div className="productcarousel">
        <h6 className="productcarouselh1">Related Products</h6>
        <Carousel
          arrows={false}
          renderButtonGroupOutside={true}
          customButtonGroup={<ButtonGroup />}
          responsive={responsive2}
          infinite={true}
          swipeable={true}
          containerClass="home-carousel h-full"
        >
          {[...Array(6)].map((element, index) => (
            <ProductCard key={index} />
          ))}
        </Carousel>
      </div>
      <Footer />
    </>
  );
};

export default Product;
