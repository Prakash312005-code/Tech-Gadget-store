import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { MdAccountCircle } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Styles from "../helpers/Navbar.module.css";

const Navbar = ({
  cart,
  setShowCart,
}) => {

  const navigate = useNavigate();

  const [showAccountMenu, setShowAccountMenu] =
    useState(false);

  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");

  const handleLogout = () => {

    localStorage.removeItem("token");
    localStorage.removeItem("username");

    setShowAccountMenu(false);

    navigate("/");
  };


  return (

    <div className={Styles.navbar}>

      {/* LOGO */}

      <div
        className={Styles.logo}
        onClick={() => navigate("/")}
      >
        Techvora
      </div>


      {/* NAVIGATION */}

      <div className={Styles.navText}>

        <span onClick={() => navigate("/about")}>
          ABOUT
        </span>

        <span onClick={() => navigate("/allproduct")}>
          PRODUCTS
        </span>

        <span onClick={() => navigate("/")}>
          SHOP
        </span>

        <span onClick={() => navigate("/helpcenter")}>
          HELP CENTER
        </span>

      </div>


      {/* ICONS */}

      <div className={Styles.icons}>

        <CiSearch />

        {/* ACCOUNT */}

        <div className={Styles.accountContainer}>

          <MdAccountCircle
            className={Styles.icon}
            onClick={() =>
              setShowAccountMenu(
                !showAccountMenu
              )
            }
          />


          {showAccountMenu && (

            <div
              className={
                Styles.accountMenu
              }
            >

              {!token ? (

                <>

                  <button
                    onClick={() => {
                      navigate("/login");
                      setShowAccountMenu(false);
                    }}
                  >
                    Login
                  </button>


                  <button
                    onClick={() => {
                      navigate("/register");
                      setShowAccountMenu(false);
                    }}
                  >
                    Register
                  </button>

                </>

              ) : (

                <>

                  <p>
                    Hello, {username}
                  </p>

                  <button
                    onClick={handleLogout}
                  >
                    Logout
                  </button>

                </>

              )}

            </div>

          )}

        </div>


        <CiHeart />


        {/* CART */}

        <div
          className={Styles.cartContainer}
        >

          <FaCartShopping
            className={Styles.icon}
            onClick={() =>
              setShowCart(true)
            }
          />

          {/* CART COUNT */}

          {cart && cart.length > 0 && (

            <span
              className={
                Styles.cartCount
              }
            >
              {cart.length}
            </span>

          )}

        </div>

      </div>

    </div>

  );

};

export default Navbar;