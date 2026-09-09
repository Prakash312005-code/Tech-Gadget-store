import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Styles from "./Checkout.module.css";

const Checkout = () => {
  const navigate = useNavigate();

  const cartId = "test123";

  // JWT Token
  const token = localStorage.getItem("token");

  const [formData, setFormData] = useState({
    customerName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();

    // Check login
    if (!token) {
      setError("Please login before placing an order");
      navigate("/login");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const params = new URLSearchParams();

      params.append("customerName", formData.customerName);
      params.append("email", formData.email);
      params.append("phone", formData.phone);
      params.append("address", formData.address);
      params.append("city", formData.city);
      params.append("state", formData.state);
      params.append("pincode", formData.pincode);

      const response = await fetch(
        `https://tech-ecommerce-production-e05c.up.railway.app/api/orders/${cartId}?${params.toString()}`,
        {
          method: "POST",

          headers: {
            "Authorization": `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to place order");
      }

      const order = await response.json();

      console.log("Order created:", order);

      // Go to Order Success page
      navigate("/order-success", {
        state: {
          order: order,
        },
      });

    } catch (error) {
      console.error(error);

      setError("Failed to place order. Please try again.");

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={Styles["checkout-page"]}>
      <div className={Styles["checkout-container"]}>

        <div className={Styles["checkout-header"]}>
          <button onClick={() => navigate(-1)}>
            ← Back
          </button>

          <h1>Checkout</h1>

          <p>Enter your details to place your order</p>
        </div>

        <form
          className={Styles["checkout-form"]}
          onSubmit={handlePlaceOrder}
        >

          <div className={Styles["form-group"]}>
            <label>Full Name</label>

            <input
              type="text"
              name="customerName"
              value={formData.customerName}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className={Styles["form-group"]}>
            <label>Email</label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className={Styles["form-group"]}>
            <label>Phone</label>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div className={Styles["form-group"]}>
            <label>Address</label>

            <textarea
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your address"
              rows="3"
              required
            />
          </div>

          <div className={Styles["form-row"]}>

            <div className={Styles["form-group"]}>
              <label>City</label>

              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="City"
                required
              />
            </div>

            <div className={Styles["form-group"]}>
              <label>State</label>

              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="State"
                required
              />
            </div>

          </div>

          <div className={Styles["form-group"]}>
            <label>Pincode</label>

            <input
              type="text"
              name="pincode"
              value={formData.pincode}
              onChange={handleChange}
              placeholder="Pincode"
              required
            />
          </div>

          {error && (
            <p className={Styles["error-message"]}>
              {error}
            </p>
          )}

          <button
            type="submit"
            className={Styles["place-order-button"]}
            disabled={loading}
          >
            {loading ? "Placing Order..." : "Place Order"}
          </button>

        </form>

      </div>
    </div>
  );
};

export default Checkout;