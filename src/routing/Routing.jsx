import { Routes, Route } from "react-router-dom";

import Home from "../pages/home/Home";
import Shopsection from "../pages/shopsection/Shopsection";
import Helpcenter from "../shopsection/helpcenter/Helpcenter";
import About from "../aboutsection/Aboutsection";
import Productdetails from "../productdetails/Productdetails";
import Checkout from "../checkout/Checkout";
import OrderSuccess from "../orders/OrderSuccess";
import OrderTracking from "../orders/OrderTracking";
import Login from "../auth/Login";
import Register from "../auth/Register";

const Routing = ({ cart, setCart, showCart, setShowCart }) => {
  return (
    <Routes>

      <Route path="/" element={<Home />} />

      <Route path="/login" element={<Login />} />

      <Route path="/register" element={<Register />} />

      <Route path="/checkout" element={<Checkout />} />

      <Route path="/order-success" element={<OrderSuccess />} />

      <Route path="/orders/:orderId" element={<OrderTracking />} />

      <Route path="/about" element={<About />} />

      <Route
        path="/allproduct/:category"
        element={<Shopsection />}
      />

      <Route
        path="/allproduct"
        element={<Shopsection />}
      />

      <Route
        path="/product/:id"
        element={
          <Productdetails
            cart={cart}
            setCart={setCart}
            showCart={showCart}
            setShowCart={setShowCart}
          />
        }
      />

      <Route
        path="/helpcenter"
        element={<Helpcenter />}
      />

    </Routes>
  );
};

export default Routing;