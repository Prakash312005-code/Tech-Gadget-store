import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Styles from "./OrderTracking.module.css";

const OrderTracking = () => {

  const { orderId } = useParams();
  const navigate = useNavigate();

  // Get JWT Token
  const token = localStorage.getItem("token");

  const [order, setOrder] = useState(null);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const fetchOrder = async () => {

      // Check login
      if (!token) {
        console.error("No token found");
        setLoading(false);
        return;
      }

      try {

        // =========================
        // FETCH ORDER DETAILS
        // =========================

        const orderResponse = await fetch(
          `https://tech-ecommerce-production-e05c.up.railway.app/api/orders/details/${orderId}`,
          {
            method: "GET",

            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json"
            }
          }
        );

        if (!orderResponse.ok) {

          console.error(
            "Order API Error:",
            orderResponse.status
          );

          throw new Error("Failed to fetch order");
        }

        const orderData =
          await orderResponse.json();

        setOrder(orderData);


        // =========================
        // FETCH ORDER ITEMS
        // =========================

        const itemsResponse = await fetch(
          `https://tech-ecommerce-production-e05c.up.railway.app/api/orders/details/${orderId}/items`,
          {
            method: "GET",

            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json"
            }
          }
        );

        if (!itemsResponse.ok) {

          console.error(
            "Items API Error:",
            itemsResponse.status
          );

          throw new Error(
            "Failed to fetch order items"
          );
        }

        const itemsData =
          await itemsResponse.json();

        setItems(itemsData);

      } catch (error) {

        console.error(
          "Order Tracking Error:",
          error
        );

      } finally {

        setLoading(false);

      }

    };

    fetchOrder();

  }, [orderId, token]);


  // =========================
  // LOADING
  // =========================

  if (loading) {

    return (
      <div className={Styles["loading"]}>
        Loading order...
      </div>
    );

  }


  // =========================
  // ORDER NOT FOUND
  // =========================

  if (!order) {

    return (

      <div className={Styles["loading"]}>

        <h2>Order not found</h2>

        <button
          onClick={() => navigate("/")}
        >
          Go Home
        </button>

      </div>

    );

  }


  // =========================
  // ORDER STATUSES
  // =========================

  const statuses = [

    "PLACED",
    "CONFIRMED",
    "PACKED",
    "SHIPPED",
    "OUT FOR DELIVERY",
    "DELIVERED",

  ];

  const currentStatus =
    statuses.indexOf(order.status);


  // =========================
  // UI
  // =========================

  return (

    <div className={Styles["tracking-page"]}>

      <div className={Styles["tracking-container"]}>


        {/* BACK BUTTON */}

        <button
          className={Styles["back-button"]}
          onClick={() => navigate("/")}
        >

          ← Continue Shopping

        </button>


        {/* TITLE */}

        <h1>Order Tracking</h1>


        {/* ORDER ID */}

        <p
          className={Styles["order-number"]}
        >

          Order #{order.id}

        </p>


        {/* STATUS */}

        <div
          className={Styles["status-card"]}
        >

          <h2>Order Status</h2>


          <div
            className={Styles["tracking"]}
          >

            {statuses.map(
              (status, index) => (

                <div

                  className={`${Styles["status-step"]} ${
                    index <= currentStatus
                      ? Styles["completed"]
                      : ""
                  }`}

                  key={status}

                >

                  <div
                    className={
                      Styles["status-circle"]
                    }
                  >

                    {index <= currentStatus
                      ? "✓"
                      : ""}

                  </div>


                  <span>
                    {status}
                  </span>

                </div>

              )
            )}

          </div>


          <p
            className={
              Styles["current-status"]
            }
          >

            Current Status:{" "}

            <strong>
              {order.status}
            </strong>

          </p>

        </div>


        {/* ORDER ITEMS */}

        <div
          className={Styles["items-card"]}
        >

          <h2>Ordered Products</h2>


          {items.length === 0 ? (

            <p>
              No products found
            </p>

          ) : (

            items.map((item) => (

              <div

                className={
                  Styles["order-item"]
                }

                key={item.id}

              >

                <div>

                  <h3>
                    {item.productName}
                  </h3>

                  <p>

                    Quantity:{" "}

                    {item.quantity}

                  </p>

                </div>


                <strong>

                  ${(
                    item.price *
                    item.quantity
                  ).toFixed(2)}

                </strong>

              </div>

            ))

          )}

        </div>


        {/* DELIVERY DETAILS */}

        <div
          className={Styles["details-card"]}
        >

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

        <div
          className={Styles["total-card"]}
        >

          <span>
            Total Amount
          </span>


          <strong>

            $
            {Number(
              order.totalAmount
            ).toFixed(2)}

          </strong>

        </div>


      </div>

    </div>

  );

};

export default OrderTracking;