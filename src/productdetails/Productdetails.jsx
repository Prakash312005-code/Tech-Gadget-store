import React from 'react';

import { useParams } from "react-router-dom";

import Products from '../components/Productlist';
import { MdDelete } from "react-icons/md";
import Styles from "./Productdetails.module.css";

const Productdetails = ({
  cart = [],
  setCart,
  showCart,
  setShowCart,
}) => {

  const { id } = useParams();

  const singleProduct = Products.find(
    (item) => item.id === Number(id)
  );
  const handleCart = () => {

    const existingProduct = cart.find(
      (item) => item.id === singleProduct.id
    );

    if (existingProduct) {

      const updatedCart = cart.map((item) =>

        item.id === singleProduct.id

          ? {
            ...item,
            quantity: item.quantity + 1,
          }

          : item
      );

      setCart(updatedCart);

    } else {

      setCart([
        ...cart,
        {
          ...singleProduct,
          quantity: 1,
        },
      ]);

    }

    setShowCart(true);

  };

 

  return (

    <div className={Styles.main_container}>



      <div className={Styles.left_section}>

        <img
          src={singleProduct.image}
          alt=""
          className={Styles.product_image}
        />

      </div>


      <div className={Styles.right_section}>

        <h1 className={Styles.title}>
          {singleProduct.content}
        </h1>

        <div className={Styles.price_section}>

          {singleProduct.delete && (

            <del className={Styles.delete_price}>
              {singleProduct.delete}
            </del>

          )}

          <h2 className={Styles.price}>
            {singleProduct.price}
          </h2>

        </div>

        <p className={Styles.quantity_text}>
          Quantity*
        </p>

        <div className={Styles.quantity_box}>

          <button>-</button>

          <span>1</span>

          <button>+</button>

        </div>

        <button className={Styles.cart_btn}
          onClick={handleCart}>
          Add To Cart
        </button>
        {/* 
            <button className={Styles.buy_btn}>
              Buy Now
            </button> */}
        <div className={Styles.buy_btn}>


          <button style={{ color: 'white', fontSize: '20px' }} className="btn  " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop" aria-controls="offcanvasTop">Buy Now</button>

          <div className="offcanvas offcanvas-top" tabIndex="-1" id="offcanvasTop" aria-labelledby="offcanvasTopLabel">
            <div className="offcanvas-header" style={{ display: 'flex', justifyContent: 'center' }}>
              <h1 id="offcanvasTopLabel">We can't accept online orders right now.</h1>
      
            </div>
            <div className="offcanvas-body" style={{ display: 'flex', justifyContent: 'center' }}>
              <h5>Please contact us to complete your purchase.</h5>
            </div>


          </div>

        </div>


      </div>

      {showCart && (

        <div className={Styles.cart_sidebar}>

          <div className={Styles.cart_top}>

            <h1>Cart ({cart.length})</h1>

            <button
              onClick={() => setShowCart(false)}
            >
              X
            </button>

          </div>

          {cart.map((item) => (

            <div
              key={item.id}
              className={Styles.cart_item}
            >

              <img
                src={item.image}
                alt=""
              />

              <div className={Styles.cart_details}>

                <h3>{typeof item.content === "string" ? item.content : "Invalid Content"}</h3>

                <p>

                  $
                  {(
                    parseFloat(item.price.replace("$", "")) *
                    item.quantity
                  ).toFixed(2)}

                </p>

                {/* QUANTITY */}

                <div className={Styles.cart_quantity}>

                  {/* DECREASE */}

                  <button

                    onClick={() => {

                      const updatedCart = cart.map((cartItem) =>

                        cartItem.id === item.id

                          ? {
                            ...cartItem,
                            quantity:
                              cartItem.quantity > 1
                                ? cartItem.quantity - 1
                                : 1,
                          }

                          : cartItem
                      );

                      setCart(updatedCart);

                    }}
                  >
                    -
                  </button>

                  <span>{item.quantity}</span>

                  {/* INCREASE */}

                  <button

                    onClick={() => {

                      const updatedCart = cart.map((cartItem) =>

                        cartItem.id === item.id

                          ? {
                            ...cartItem,
                            quantity: cartItem.quantity + 1,
                          }

                          : cartItem
                      );

                      setCart(updatedCart);

                    }}
                  >
                    +
                  </button>

                </div>

                {/* DELETE BUTTON */}

                <button
                  className={Styles.delete_btn}

                  onClick={() =>
                    setCart(
                      cart.filter(
                        (cartItem) =>
                          cartItem.id !== item.id
                      )
                    )
                  }
                >
                  <MdDelete />
                </button>

              </div>

            </div>

          ))}
          <div className={Styles.cart_total_section}>

            <h2>
              Total Products :
              {" "}
              {cart.length}
            </h2>

            <h2>

              Total Amount :
              {" "}

              $

              {cart
                .reduce(

                  (total, item) =>

                    total +
                    parseFloat(
                      item.price.replace("$", "")
                    ) * item.quantity,

                  0
                )
                .toFixed(2)}

            </h2>

          </div>

        </div>

      )}
    </div>

  );
};

export default Productdetails;