import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Styles from "./OrderSuccess.module.css";

const OrderSuccess = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const order = location.state?.order;

  if (!order) {
    return (
      <div className={Styles["success-page"]}>
        <h2>Order not found</h2>

        <button onClick={() => navigate("/")}>
          Go Home
        </button>
      </div>
    );
  }

  return (
    <div className={Styles["success-page"]}>
      <div className={Styles["success-card"]}>

        <div className={Styles["success-icon"]}>
          ✓
        </div>

        <h1>Order Placed Successfully!</h1>

        <p className={Styles["success-text"]}>
          Thank you for your order.
        </p>

        <div className={Styles["order-info"]}>
          <div>
            <span>Order ID</span>
            <strong>#{order.id}</strong>
          </div>

          <div>
            <span>Total Amount</span>
            <strong>${Number(order.totalAmount).toFixed(2)}</strong>
          </div>

          <div>
            <span>Status</span>
            <strong>{order.status}</strong>
          </div>
        </div>

        <div className={Styles["success-buttons"]}>
          <button
            onClick={() =>
              navigate(`/orders/${order.id}`)
            }
          >
            Track Order
          </button>

          <button
            onClick={() => navigate("/")}
          >
            Continue Shopping
          </button>
        </div>

      </div>
    </div>
  );
};

export default OrderSuccess;