import React, { useState } from "react";

//components
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ProductCard from "../components/ProductCard/ProductCard";
//mui
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const ProductList = () => {
  const [state, setState] = useState(false);
  const [price, setPrice] = useState("");

  const [checkboxes, setCheckboxes] = useState({
    electronics: false,
    fashion: false,
    tv: false,
    toys: false,
    furniture: false,
    software: false,
    price1: false,
    price2: false,
    price3: false,
  });
  const toggleDrawer = (open) => (event) => {
    setState(open);
  };

  const handleChange = (event) => {
    setPrice(event.target.value);
  };
  const handleCheckbox = (e) => {
    const Value = e.target.checked;

    setCheckboxes({
      ...checkboxes,
      [e.target.name]: Value,
    });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="productlistd2">
        <h6 className="productlistd2h1">Filters</h6>
        <div className="line"></div>
        <div className="productlistcheckboxdiv">
          <Checkbox
            name="price1"
            className="form-check-input"
            checked={checkboxes.price1}
            onChange={handleCheckbox}
          />
          <p className="productlistcheckboxp">Below $$$</p>
        </div>
        <div className="productlistcheckboxdiv">
          <Checkbox
            name="price2"
            className="form-check-input"
            checked={checkboxes.price2}
            onChange={handleCheckbox}
          />
          <p className="productlistcheckboxp">Below $$$</p>
        </div>
        <div className="productlistcheckboxdiv">
          <Checkbox
            name="price3"
            className="form-check-input"
            checked={checkboxes.price3}
            onChange={handleCheckbox}
          />
          <p className="productlistcheckboxp">Below $$$</p>
        </div>
        <div className="line"></div>
        <div className="productlistcheckboxdiv">
          <Checkbox
            name="electronics"
            className="form-check-input"
            checked={checkboxes.electronics}
            onChange={handleCheckbox}
          />
          <p className="productlistcheckboxp">Electronics</p>
        </div>
        <div className="productlistcheckboxdiv">
          <Checkbox
            name="fashion"
            className="form-check-input"
            checked={checkboxes.fashion}
            onChange={handleCheckbox}
          />
          <p className="productlistcheckboxp">Men's Fashion</p>
        </div>
        <div className="productlistcheckboxdiv">
          <Checkbox
            name="software"
            className="form-check-input"
            checked={checkboxes.software}
            onChange={handleCheckbox}
          />
          <p className="productlistcheckboxp">Software</p>
        </div>
        <div className="productlistcheckboxdiv">
          <Checkbox
            name="toys"
            className="form-check-input"
            checked={checkboxes.toys}
            onChange={handleCheckbox}
          />
          <p className="productlistcheckboxp">Toys</p>
        </div>
        <div className="productlistcheckboxdiv">
          <Checkbox
            name="furniture"
            className="form-check-input"
            checked={checkboxes.furniture}
            onChange={handleCheckbox}
          />
          <p className="productlistcheckboxp">Furniture</p>
        </div>
        <div className="productlistcheckboxdiv">
          <Checkbox
            name="tv"
            className="form-check-input"
            checked={checkboxes.tv}
            onChange={handleCheckbox}
          />
          <p className="productlistcheckboxp">Television</p>
        </div>
      </div>
    </Box>
  );
  return (
    <>
      <Navbar />
      <div className="productlist">
        <div className="productlistd1">
          <FormControl fullWidth>
            <Select
              value={price}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <p style={{ margin: "0" }}>None</p>
              </MenuItem>
              <MenuItem value={1}>Low - High</MenuItem>
              <MenuItem value={2}>High - Low</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="productlistd2">
          <h6 className="productlistd2h1">Filters</h6>
          <div className="line"></div>
          <div className="productlistcheckboxdiv">
            <Checkbox
              name="price1"
              className="form-check-input"
              checked={checkboxes.price1}
              onChange={handleCheckbox}
            />
            <p className="productlistcheckboxp">Below $$$</p>
          </div>
          <div className="productlistcheckboxdiv">
            <Checkbox
              name="price2"
              className="form-check-input"
              checked={checkboxes.price2}
              onChange={handleCheckbox}
            />
            <p className="productlistcheckboxp">Below $$$</p>
          </div>
          <div className="productlistcheckboxdiv">
            <Checkbox
              name="price3"
              className="form-check-input"
              checked={checkboxes.price3}
              onChange={handleCheckbox}
            />
            <p className="productlistcheckboxp">Below $$$</p>
          </div>
          <div className="line"></div>
          <div className="productlistcheckboxdiv">
            <Checkbox
              name="electronics"
              className="form-check-input"
              checked={checkboxes.electronics}
              onChange={handleCheckbox}
            />
            <p className="productlistcheckboxp">Electronics</p>
          </div>
          <div className="productlistcheckboxdiv">
            <Checkbox
              name="fashion"
              className="form-check-input"
              checked={checkboxes.fashion}
              onChange={handleCheckbox}
            />
            <p className="productlistcheckboxp">Men's Fashion</p>
          </div>
          <div className="productlistcheckboxdiv">
            <Checkbox
              name="software"
              className="form-check-input"
              checked={checkboxes.software}
              onChange={handleCheckbox}
            />
            <p className="productlistcheckboxp">Software</p>
          </div>
          <div className="productlistcheckboxdiv">
            <Checkbox
              name="toys"
              className="form-check-input"
              checked={checkboxes.toys}
              onChange={handleCheckbox}
            />
            <p className="productlistcheckboxp">Toys</p>
          </div>
          <div className="productlistcheckboxdiv">
            <Checkbox
              name="furniture"
              className="form-check-input"
              checked={checkboxes.furniture}
              onChange={handleCheckbox}
            />
            <p className="productlistcheckboxp">Furniture</p>
          </div>
          <div className="productlistcheckboxdiv">
            <Checkbox
              name="tv"
              className="form-check-input"
              checked={checkboxes.tv}
              onChange={handleCheckbox}
            />
            <p className="productlistcheckboxp">Television</p>
          </div>
        </div>
        <div className="productlistd2mobile">
          <Button
            className="productlistd2mobilebtn"
            onClick={toggleDrawer(true)}
          >
            <ChevronRightIcon className="menupic" />
            <p className="productlistd2mobilep">Filter</p>
          </Button>
          <Drawer anchor={"left"} open={state} onClose={toggleDrawer(false)}>
            {list()}
          </Drawer>
        </div>

        <div className="productlistd3">
          {[...Array(6)].map((element, index) => (
            <ProductCard key={index} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductList;
