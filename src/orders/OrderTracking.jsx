import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Styles from "./OrderTracking.module.css";

const OrderTracking = () => {
  const { orderId } = useParams();
  const navigate = useNavigate();

  const [order, setOrder] = useState(null);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const orderResponse = await fetch(
          `http://localhost:8080/api/orders/details/${orderId}`
        );

        if (!orderResponse.ok) {
          throw new Error("Failed to fetch order");
        }

        const orderData = await orderResponse.json();
        setOrder(orderData);

        const itemsResponse = await fetch(
          `http://localhost:8080/api/orders/details/${orderId}/items`
        );

        if (!itemsResponse.ok) {
          throw new Error("Failed to fetch order items");
        }

        const itemsData = await itemsResponse.json();
        setItems(itemsData);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [orderId]);

  if (loading) {
    return <div className={Styles["loading"]}>Loading order...</div>;
  }

  if (!order) {
    return (
      <div className={Styles["loading"]}>
        <h2>Order not found</h2>
        <button onClick={() => navigate("/")}>
          Go Home
        </button>
      </div>
    );
  }

  const statuses = [
    "PLACED",
    "CONFIRMED",
    "PACKED",
    "SHIPPED",
    "OUT FOR DELIVERY",
    "DELIVERED",
  ];

  const currentStatus = statuses.indexOf(order.status);

  return (
    <div className={Styles["tracking-page"]}>

      <div className={Styles["tracking-container"]}>

        <button
          className={Styles["back-button"]}
          onClick={() => navigate("/")}
        >
          ← Continue Shopping
        </button>

        <h1>Order Tracking</h1>

        <p className={Styles["order-number"]}>
          Order #{order.id}
        </p>

        {/* STATUS */}
        <div className={Styles["status-card"]}>

          <h2>Order Status</h2>

          <div className={Styles["tracking"]}>

            {statuses.map((status, index) => (
              <div
                className={`${Styles["status-step"]} ${
                  index <= currentStatus
                    ? Styles["completed"]
                    : ""
                }`}
                key={status}
              >
                <div className={Styles["status-circle"]}>
                  {index <= currentStatus ? "✓" : ""}
                </div>

                <span>{status}</span>
              </div>
            ))}

          </div>

          <p className={Styles["current-status"]}>
            Current Status: <strong>{order.status}</strong>
          </p>

        </div>

        {/* ORDER ITEMS */}
        <div className={Styles["items-card"]}>

          <h2>Ordered Products</h2>

          {items.map((item) => (
            <div
              className={Styles["order-item"]}
              key={item.id}
            >
              <div>
                <h3>{item.productName}</h3>

                <p>
                  Quantity: {item.quantity}
                </p>
              </div>

              <strong>
                ${(item.price * item.quantity).toFixed(2)}
              </strong>
            </div>
          ))}

        </div>

        {/* CUSTOMER DETAILS */}
        <div className={Styles["details-card"]}>

          <h2>Delivery Details</h2>

          <p>
            <strong>Name:</strong>{" "}
            {order.customerName}
          </p>

          <p>
            <strong>Email:</strong>{" "}
            {order.email}
          </p>

          <p>
            <strong>Phone:</strong>{" "}
            {order.phone}
          </p>

          <p>
            <strong>Address:</strong>{" "}
            {order.address}
          </p>

          <p>
            <strong>City:</strong>{" "}
            {order.city}
          </p>

          <p>
            <strong>State:</strong>{" "}
            {order.state}
          </p>

          <p>
            <strong>Pincode:</strong>{" "}
            {order.pincode}
          </p>

        </div>

        {/* TOTAL */}
        <div className={Styles["total-card"]}>
          <span>Total Amount</span>

          <strong>
            ${Number(order.totalAmount).toFixed(2)}
          </strong>
        </div>

      </div>

    </div>
  );
};

export default OrderTracking;