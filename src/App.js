import React from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Login from "./userPages/Login";
import SignUp from "./userPages/SignUp";
import TermConditions from "./userPages/TermsConditions";
import Home from "./userPages/Home";
import ProductList from "./userPages/ProductList";
import Product from "./userPages/Product";
import Checkout from "./userPages/Checkout";
import Thankyou from "./userPages/Thankyou";
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route path="/" element={<Navigate replace to="/login" />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/termconditions" element={<TermConditions />} />
          <Route exact path="/home" element={<Home />} />
          <Route exact path="/productlist" element={<ProductList />} />
          <Route exact path="/product" element={<Product />} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/thankyou" element={<Thankyou />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
