import React, { useState } from "react";
import { Link } from "react-router-dom";
//assets
import electronics from "./../assets/electronics.jpg";
import furniture from "./../assets/furniture.jpg";
import fashion from "./../assets/fashion.jpg";
import tv from "./../assets/TV.jpg";
import cd from "./../assets/cd.jpg";
import toys from "./../assets/toys.jpg";
import landingimg from "./../assets/landingimg.png";

//components
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ProductCard from "../components/ProductCard/ProductCard";

//others
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Typed from "react-typed";
import Cookies from "universal-cookie";
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

const Home = () => {
  const [cart] = useState([]);
  const cookies = new Cookies();
  cookies.set("cart", cart, { path: "/" });
  return (
    <>
      <Navbar />
      <div className="Home">
        <div className="homed1">
          <div className="homed2">
            <Typed
              strings={["Now shop,"]}
              typeSpeed={35}
              backSpeed={40}
              loop={false}
              showCursor={false}
              className="homed1h1"
            />
            <br />
            <Typed
              strings={["with the digital coin.", "with your card."]}
              typeSpeed={30}
              backSpeed={40}
              startDelay={1800}
              loop
              showCursor={true}
              className="homed1h1"
            />
            <br />
            <br />
            <br />
            <Link to="/productlist">
              <button className="homed1d1b1">Shop Now</button>
            </Link>
          </div>
          <img className="homelandingimg" src={landingimg} alt="" />
        </div>
        <div className="homed3">
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
        <div className="homed4">
          <h6 className="homed4h1">Browse by category</h6>
          <div className="homed5">
            <Link to="/productlist" style={{ textDecoration: "none" }}>
              <div className="homed6">
                <img className="homed6img" src={electronics} alt="" />
                <h6 className="homed4h2">Electronics Accessories</h6>
              </div>
            </Link>
            <Link to="/productlist" style={{ textDecoration: "none" }}>
              <div className="homed6">
                <img className="homed6img" src={fashion} alt="" />
                <h6 className="homed4h2">Men's Fashion</h6>
              </div>
            </Link>
            <Link to="/productlist" style={{ textDecoration: "none" }}>
              <div className="homed6">
                <img className="homed6img" src={cd} alt="" />
                <h6 className="homed4h2">Software</h6>
              </div>
            </Link>
            <Link to="/productlist" style={{ textDecoration: "none" }}>
              <div className="homed6">
                <img className="homed6img" src={tv} alt="" />
                <h6 className="homed4h2">Television</h6>
              </div>
            </Link>
            <Link to="/productlist" style={{ textDecoration: "none" }}>
              <div className="homed6">
                <img className="homed6img" src={toys} alt="" />
                <h6 className="homed4h2">Toys</h6>
              </div>
            </Link>
            <Link to="/productlist" style={{ textDecoration: "none" }}>
              <div className="homed6">
                <img className="homed6img" src={furniture} alt="" />
                <h6 className="homed4h2">Furniture</h6>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
