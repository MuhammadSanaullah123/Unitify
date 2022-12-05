import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./Navbar.scss";

//components
import CartProduct from "../CartProduct/CartProduct";
//assets
import logo from "../../assets/logo.png";

//mui
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircle from "@mui/icons-material/AccountCircle";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#ffffff",
  border: "1px solid #ff5e00",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "#ff5e00",
  fontFamily: "Inter",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const [scroll, setScroll] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  let primarycolor = useState(
    getComputedStyle(document.documentElement).getPropertyValue(`--primary`) //getting value of primary var from css
  );
  const handleClose = () => setOpen(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "35%",
    height: "600px",
    background: "#ffffff",
    border: `1px solid ${primarycolor[0]}`,
    borderRadius: "6px",
    display: "flex",
    flexDirection: "column",
    padding: "10px",
    overflowY: "auto",
    overflowX: "hidden",
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem style={{ fontFamily: "Inter" }} onClick={handleMenuClose}>
        Profile
      </MenuItem>
      <MenuItem style={{ fontFamily: "Inter" }} onClick={handleMenuClose}>
        Log Out
      </MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle className="navicons" sx={{ fontSize: "30px" }} />
        </IconButton>
        <p style={{ fontFamily: "Inter" }}>Profile</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <AccountBalanceWalletIcon
            className="navicons"
            sx={{ fontSize: "30px" }}
          />
        </IconButton>
        <p style={{ fontFamily: "Inter" }}>Wallet</p>
      </MenuItem>
      <MenuItem onClick={handleOpen}>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <ShoppingCartIcon className="navicons" sx={{ fontSize: "30px" }} />
        </IconButton>
        <p style={{ fontFamily: "Inter" }}>Cart</p>
      </MenuItem>
    </Menu>
  );
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setScroll(window.pageYOffset > 10)
      );
    }
  }, []);
  return (
    <>
      <div
        style={{
          boxShadow: `${scroll ? "0px 3px 19px rgba(0, 0, 0, 0.25)" : ""}`,
        }}
        className="Navbar"
      >
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar>
              <img
                style={{ width: "120px", height: "40px" }}
                src={logo}
                alt=""
              />
              <Search>
                <SearchIconWrapper>
                  <SearchIcon className="navicons" />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
              <Box sx={{ flexGrow: 1 }} />

              <Box sx={{ display: { xs: "none", md: "flex" } }}>
                <IconButton
                  size="large"
                  edge="end"
                  aria-label="account of current user"
                  aria-controls={menuId}
                  aria-haspopup="true"
                  onClick={handleProfileMenuOpen}
                  color="inherit"
                >
                  <AccountCircle
                    className="navicons"
                    sx={{ fontSize: "30px", marginRight: "10px" }}
                  />
                </IconButton>
                <IconButton
                  size="large"
                  aria-label="show 17 new notifications"
                  color="inherit"
                >
                  <AccountBalanceWalletIcon
                    className="navicons"
                    sx={{ fontSize: "30px" }}
                  />
                </IconButton>

                <IconButton
                  size="large"
                  aria-label="show 4 new mails"
                  color="inherit"
                >
                  <ShoppingCartIcon
                    className="navicons"
                    sx={{ fontSize: "30px" }}
                    onClick={handleOpen}
                  />
                </IconButton>
                <Modal open={open} onClose={handleClose}>
                  <Box sx={style}>
                    {[...Array(6)].map((element, index) => (
                      <CartProduct key={index} />
                    ))}
                    <Link to="/checkout" style={{ textAlign: "center" }}>
                      <button className="cartcheckoutbtn">CheckOut</button>
                    </Link>
                  </Box>
                </Modal>
              </Box>
              <Box sx={{ display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <MenuIcon className="navicons" sx={{ fontSize: "30px" }} />
                </IconButton>
              </Box>
            </Toolbar>
          </AppBar>
          {renderMobileMenu}
          {renderMenu}
        </Box>
      </div>
    </>
  );
};

export default Navbar;
