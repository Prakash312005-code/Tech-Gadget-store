import { Routes, Route } from "react-router-dom";
import Home from "../pages/home/Home";
import Shopsection from "../pages/shopsection/Shopsection";
import Helpcenter from "../shopsection/helpcenter/Helpcenter";
import Allproduct from "../shopsection/allproduct/Allproduct";
import About from "../aboutsection/Aboutsection";
import Productdetails from "../productdetails/Productdetails";

const Routing = ({ cart, setCart, showCart, setShowCart }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/about" element={<About />} />

      <Route path="/allproduct/:category" element={<Shopsection />} />

      <Route path="/allproduct" element={<Shopsection />} />
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

      <Route path="/helpcenter" element={<Helpcenter />} />
    </Routes>
  );
};

export default Routing;
