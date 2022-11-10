import React from "react";

//assets
import headphone from "./../assets/headphone.jpg";

//components
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ProductCard from "../components/ProductCard/ProductCard";

//others
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

//mui
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

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
  return (
    <>
      <Navbar />
      <div className="product">
        <div
          style={{
            backgroundImage: "url(" + headphone + ")",
          }}
          className="productpicdiv"
        >
          <div className="productcardd2"></div>
        </div>
        <div className="productd1">
          <h6 className="productcardh1">Lorem Ipsum</h6>
          <div className="productd1span1">
            <p className="productcardp1">Price: $12</p>
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
            <button className="productd2btn">Add to Cart</button>
            <div className="productd2totaldiv">
              <p className="productd2totalp">Total: $123</p>
            </div>
          </div>
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