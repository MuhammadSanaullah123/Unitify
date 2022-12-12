import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//components
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import CartProduct from "../components/CartProduct/CartProduct";

//assets
import plane from "./../assets/plane.svg";

//other
import Cookies from "universal-cookie";

//mui
import DeleteIcon from "@mui/icons-material/Delete";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
const Checkout = () => {
  const cookies = new Cookies();
  const [cart] = useState(cookies.get("cart"));
  const [totalPrice, settotalPrice] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [addresses, setAddresses] = useState([]);
  const [address, setAddress] = useState();
  const [FinalAddress, setFinalAddress] = useState();
  const [FinalAddressIndex, setFinalAddressIndex] = useState();

  console.log("FinalAddress");
  console.log(FinalAddress);
  const [billing, setBilling] = useState("");
  const [cvc, setCvc] = useState("");
  const [crypto, setCrypto] = useState("");

  const [open, setOpen] = useState(false);
  const [openaddress, setOpenAddress] = useState(false);

  const handleOpen = () => {
    if (crypto === "") {
      alert("Select one payment method!");
    } else {
      setOpen(true);
      redirect_Page();
    }
  };

  const handleOpenAddress = () => {
    setOpenAddress(true);
  };
  const handleClose = () => setOpen(false);
  const handleCloseAddress = () => setOpenAddress(false);

  let redirect_Page = () => {
    let tID = setTimeout(function () {
      window.location.href = "http://localhost:3000/thankyou";
      window.clearTimeout(tID); // clear time out.
    }, 3000);
  };
  const Submit = () => {
    setAddresses([...addresses, address]);
    handleCloseAddress();
  };
  const Remove = (index) => {
    var array = [...addresses];
    array.splice(index, 1);
    setAddresses(array);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "650px",
    height: "141px",
    borderRadius: "6px",
    paddingLeft: "15px",
    display: "flex",
    flexDirection: "column",
  };
  const styleaddress = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "650px",
    height: "200px",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    padding: "10px",
  };
  useEffect(() => {
    let price = 0;
    cart.forEach((element) => {
      price = price + element.itemprice * element.itemquantity;
    });
    settotalPrice(price);
  }, [cart, totalPrice]);
  return (
    <>
      <Navbar />
      <div className="Checkout">
        <div className="checkoutinfo">
          <h6 className="checkoutinfoh1">Required Info</h6>

          <div className="checkoutinfod1">
            <div className="checkoutinfod3">
              <p className="checkoutinfolabel">Name</p>
              <TextField
                className="filled-basic1"
                value={name}
                onChange={(e) => setName(e.target.value)}
                variant="filled"
              />
            </div>
            <div className="checkoutinfoverl1"></div>
            <div className="checkoutinfod3">
              <p className="checkoutinfolabel">Email</p>

              <TextField
                className="filled-basic2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                variant="filled"
              />
            </div>
          </div>
          <h1 className="checkoutinfoh1">Select Address</h1>
          <div className="checkoutinfod2">
            {addresses.map((addrs, index) => (
              <>
                <p
                  style={{
                    width: "95%",
                    textAlign: "start",
                    marginTop: "0",
                  }}
                  className="checkoutinfolabel"
                >
                  Address #{index + 1}
                </p>
                <div
                  style={{
                    display: "flex",
                    margin: "0 0 10px 0",
                    alignItems: "center",
                  }}
                >
                  <button
                    className={`${
                      index === FinalAddressIndex
                        ? "addressreadonlybtnactive"
                        : "addressreadonlybtn"
                    }`}
                    onClick={(e) => {
                      setFinalAddress(e.target.innerText);
                      setFinalAddressIndex(index);
                    }}
                  >
                    {addrs}
                  </button>

                  <DeleteIcon
                    onClick={() => Remove(index)}
                    className="deleteicon"
                  />
                </div>
              </>
            ))}
            <span onClick={handleOpenAddress} className="checkoutinfod2s1">
              <AddCircleOutlineOutlinedIcon className="addicon" />
              <p className="checkoutinfod2p1">Add Address</p>
            </span>
            <Modal
              open={openaddress}
              onClose={handleCloseAddress}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box className="addressBox" sx={styleaddress}>
                <textarea
                  className="addressBoxinput"
                  placeholder="Write your address here..."
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
                <button onClick={Submit} className="addressBoxbtn">
                  Submit
                </button>
              </Box>
            </Modal>
          </div>
          <h1
            style={{
              margin: "30px 0 10px 20px",
            }}
            className="checkoutinfoh1"
          >
            Choose Payment Method
          </h1>
          <div className="checkoutinfod1">
            <div className="checkoutinfod1radioparent">
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="Visa"
                  checked={crypto === false ? true : false}
                  onClick={() => setCrypto(false)}
                  control={<Radio />}
                  label=""
                />
              </RadioGroup>
              <h1 className="checkoutinfod1radioparenth1">VISA</h1>
            </div>

            <div
              style={{
                width: "45%",
              }}
              className={`checkoutinfodr ${
                crypto ? "checkoutinfodisable" : ""
              }`}
            >
              <p className="checkoutinfolabel">Billing Info</p>

              <TextField
                className="filled-basic1 backimg"
                value={crypto === false ? billing : ""}
                onChange={(e) => setBilling(e.target.value)}
                variant="filled"
              />
            </div>

            <div
              style={{
                width: "45%",
              }}
              className={`checkoutinfodr ${
                crypto ? "checkoutinfodisable" : ""
              }`}
            >
              <p className="checkoutinfolabel">CVC #</p>
              <TextField
                className="filled-basic2"
                value={crypto === false ? cvc : ""}
                onChange={(e) => setCvc(e.target.value)}
                variant="filled"
              />
            </div>
          </div>
          <div className="checkoutinfod1">
            <div className="checkoutinfod1radioparent">
              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                className="checkoutinfod1radio"
              >
                <FormControlLabel
                  value="Visa"
                  checked={crypto ? true : false}
                  onClick={() => setCrypto(true)}
                  control={<Radio />}
                  label=""
                />
              </RadioGroup>
              <h1 className="checkoutinfod1radioparenth1">Crypto</h1>
            </div>

            <div
              style={{
                width: "45%",
              }}
              className={`checkoutinfodr ${
                crypto === false ? "checkoutinfodisable" : ""
              }`}
            >
              <p className="checkoutinfolabel">Wallet Info</p>

              <TextField
                className="filled-basic1 backimgcrypto"
                value={crypto === true ? billing : ""}
                onChange={(e) => setBilling(e.target.value)}
                variant="filled"
              />
            </div>

            <div
              style={{
                width: "45%",
              }}
              className={`checkoutinfodr ${
                crypto === false ? "checkoutinfodisable" : ""
              }`}
            >
              <p className="checkoutinfolabel">CV #</p>
              <TextField
                className="filled-basic2"
                value={crypto === true ? cvc : ""}
                onChange={(e) => setCvc(e.target.value)}
                variant="filled"
              />
            </div>
          </div>
        </div>

        <div className="checkoutpay">
          <h6 className="checkoutpayh1">Payment </h6>
          <div className="checkoutpayd1">
            {/*   {[...Array(6)].map((element, index) => (
              <CartProduct key={index} />
            ))} */}
            {cart.map((item, index) => (
              <CartProduct item={item} key={index} />
            ))}
          </div>

          <div className="checkoutpayd2">
            <p className="checkoutpayp1">Total </p>
            <p className="checkoutpayp2">${totalPrice}</p>
          </div>
        </div>
      </div>
      <div className="checkoutbtndiv">
        <Link className="checkoutbtndivb1" onClick={handleOpen}>
          Check Out
        </Link>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className="confirmationBox" sx={style}>
            <img className="checkoutbtndivimg1" src={plane} alt="" />
            <p className="checkoutbtndivp1">
              Confirmation will be sent to your email address
            </p>
          </Box>
        </Modal>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
