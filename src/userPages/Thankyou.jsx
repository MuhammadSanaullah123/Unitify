import React from "react";

//components
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

//assets
import headphone from "./../assets/headphone.jpg";

const Items = () => {
  return (
    <>
      <div className="Items">
        <img src={headphone} alt="Product" className="itemsimg" />
        <div className="itemsd1">
          <h1 className="itemsh1">Lorem Ipsum</h1>
          <p className="itemsp1">$ {123 * 2}</p>
        </div>
        <div className="itemsd2">
          <p className="itemsp2">Quantity</p>
          <p className="itemsp3">1</p>
        </div>
      </div>
    </>
  );
};

const Thankyou = () => {
  return (
    <>
      <Navbar />
      <div className="thankyou">
        <h1 className="thankyouh1">Thankyou, Muhammad</h1>
        <div className="thankyoul1"></div>
        <h1 className="thankyouh2">Order Placed</h1>
        <p className="thankyoup1">
          We Have Accepted Your Order And We Are Preparing It.
          <br /> A Confirmation Email Has Been Sent To xyz@gmail.com <br />
          Please Return To This Page For Updates On The Status Of Your Order.
        </p>
        <div className="thankyoul1"></div>
        <h1 className="thankyouh3">Order #11685</h1>
        <div className="thankyoud1">
          {[...Array(6)].map((element, index) => (
            <Items key={index} />
          ))}
          <div className="thankyoud2">
            <p className="thankyoup2">Total </p>
            <p className="thankyoup3">$1000</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Thankyou;
