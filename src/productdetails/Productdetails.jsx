import React, { useEffect, useState, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Styles from "../productdetails/Productdetails.module.css";
import Products from "../components/Productlist";

const API_URL = "https://tech-ecommerce-production-e05c.up.railway.app";

const Productdetails = ({ cart, setCart, showCart, setShowCart }) => {

  const { id } = useParams();
  const navigate = useNavigate();

  const [singleProduct, setSingleProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  // JWT Token
  const token = localStorage.getItem("token");


  // ================= GET PRODUCT =================

  useEffect(() => {

    const fetchProduct = async () => {

      try {

        setLoading(true);

        const response = await fetch(
          `${API_URL}/api/products/${id}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }

        const data = await response.json();

        const localProduct = Products.find(
          (product) => product.id === Number(id)
        );

        const formattedProduct = {
          ...data,
          content: data.name,
          price: `$${Number(data.price).toFixed(2)}`,
          delete:
            data.oldPrice !== null &&
            data.oldPrice !== undefined
              ? `$${Number(data.oldPrice).toFixed(2)}`
              : null,
          image: localProduct ? localProduct.image : null,
        };

        setSingleProduct(formattedProduct);

      } catch (error) {

        console.error("Error fetching product:", error);

      } finally {

        setLoading(false);

      }

    };

    fetchProduct();

  }, [id]);


  // ================= LOAD CART =================

  const loadCart = useCallback(async () => {

    if (!token) {
      setCart([]);
      return;
    }

    try {

      const response = await fetch(
        `${API_URL}/api/cart`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      if (!response.ok) {
        throw new Error("Failed to load cart");
      }

      const data = await response.json();

      const formattedCart = data.map((item) => {

        const localProduct = Products.find(
          (product) => product.id === item.product.id
        );

        return {
          id: item.product.id,
          content: item.product.name,
          price: `$${Number(item.product.price).toFixed(2)}`,
          delete:
            item.product.oldPrice !== null &&
            item.product.oldPrice !== undefined
              ? `$${Number(item.product.oldPrice).toFixed(2)}`
              : null,
          image: localProduct ? localProduct.image : null,
          quantity: item.quantity,
          category: item.product.category,
          sale: item.product.sale,
        };

      });

      setCart(formattedCart);

    } catch (error) {

      console.error("Error loading cart:", error);

    }

  }, [token, setCart]);


  // ================= LOAD CART ON PAGE OPEN =================

  useEffect(() => {

    loadCart();

  }, [loadCart]);


  // ================= ADD TO CART =================

  const handleCart = async () => {

    if (!singleProduct) return;

    if (!token) {

      alert("Please login first");

      navigate("/login");

      return;
    }

    try {

      const response = await fetch(
        `${API_URL}/api/cart/add/${singleProduct.id}?quantity=${selectedQuantity}`,
        {
          method: "POST",

          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      if (!response.ok) {
        throw new Error("Failed to add product to cart");
      }

      await loadCart();

      setShowCart(true);

    } catch (error) {

      console.error("Error adding product to cart:", error);

      alert("Failed to add product to cart");

    }

  };


  // ================= UPDATE QUANTITY =================

  const updateQuantity = async (
    productId,
    newQuantity
  ) => {

    try {

      const response = await fetch(
        `${API_URL}/api/cart/update/${productId}?quantity=${newQuantity}`,
        {
          method: "PUT",

          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      if (!response.ok) {
        throw new Error("Failed to update quantity");
      }

      await loadCart();

    } catch (error) {

      console.error(
        "Error updating quantity:",
        error
      );

    }

  };


  // ================= DELETE PRODUCT =================

  const deleteProduct = async (
    productId
  ) => {

    try {

      const response = await fetch(
        `${API_URL}/api/cart/remove/${productId}`,
        {
          method: "DELETE",

          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      if (!response.ok) {
        throw new Error(
          "Failed to remove product"
        );
      }

      await loadCart();

    } catch (error) {

      console.error(
        "Error removing product:",
        error
      );

    }

  };


  // ================= CLEAR CART =================

  const clearCart = async () => {

    try {

      const response = await fetch(
        `${API_URL}/api/cart/clear`,
        {
          method: "DELETE",

          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      if (!response.ok) {
        throw new Error(
          "Failed to clear cart"
        );
      }

      await loadCart();

    } catch (error) {

      console.error(
        "Error clearing cart:",
        error
      );

    }

  };


  // ================= LOADING =================

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!singleProduct) {
    return <div>Product not found</div>;
  }


  // ================= UI =================

  return (

    <div className={Styles["product-details-page"]}>

      <button onClick={() => navigate(-1)}>
        ← Back
      </button>


      <div className={Styles["product-details"]}>

        <div className={Styles["product-image"]}>

          <img
            src={singleProduct.image}
            alt={singleProduct.content}
          />

        </div>


        <div className={Styles["product-info"]}>

          <h1>{singleProduct.content}</h1>


          <div className={Styles["product-price"]}>

            {singleProduct.price}

            {singleProduct.delete && (
              <span>{singleProduct.delete}</span>
            )}

          </div>


          <p>{singleProduct.description}</p>


          {/* QUANTITY */}

          <div className={Styles["quantity"]}>

            <span>Quantity</span>

            <button
              onClick={() =>
                setSelectedQuantity((quantity) =>
                  Math.max(1, quantity - 1)
                )
              }
            >
              -
            </button>

            <span>{selectedQuantity}</span>

            <button
              onClick={() =>
                setSelectedQuantity(
                  (quantity) => quantity + 1
                )
              }
            >
              +
            </button>

          </div>


          {/* ADD TO CART */}

          <button
            className={Styles["add-to-cart"]}
            onClick={handleCart}
          >
            Add To Cart
          </button>

        </div>

      </div>


      {/* CART SIDEBAR */}

      {showCart && (

        <div className={Styles["cart-sidebar"]}>

          <div className={Styles["cart-header"]}>

            <h2>
              Cart ({cart.length})
            </h2>

            <button
              onClick={() => setShowCart(false)}
            >
              ×
            </button>

          </div>


          {cart.length === 0 ? (

            <p>Your cart is empty</p>

          ) : (

            <>

              {cart.map((item) => (

                <div
                  className={Styles["cart-item"]}
                  key={item.id}
                >

                  <img
                    src={item.image}
                    alt={item.content}
                  />

                  <div
                    className={
                      Styles["cart-item-details"]
                    }
                  >

                    <h3>{item.content}</h3>

                    <p>{item.price}</p>


                    {/* QUANTITY */}

                    <div
                      className={
                        Styles["cart-quantity"]
                      }
                    >

                      <button
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            Math.max(
                              1,
                              item.quantity - 1
                            )
                          )
                        }
                      >
                        -
                      </button>

                      <span>{item.quantity}</span>

                      <button
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            item.quantity + 1
                          )
                        }
                      >
                        +
                      </button>

                    </div>


                    {/* DELETE */}

                    <button
                      onClick={() =>
                        deleteProduct(item.id)
                      }
                    >
                      Delete
                    </button>

                  </div>

                </div>

              ))}


              <button
                className={
                  Styles["place-order-button"]
                }
                onClick={() =>
                  navigate("/checkout")
                }
              >
                Proceed to Checkout
              </button>


              <button onClick={clearCart}>
                Clear Cart
              </button>

            </>

          )}

        </div>

      )}

    </div>
  );
};

export default Productdetails;