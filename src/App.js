  import "./App.css";

  import Navbar from "./helpers/Navbar";
  import Footer from "./helpers/footer/Footer";
  import Footerend from "./helpers/footerend/Footerend";

  import Routing from "./routing/Routing";

import React, {useState,useEffect,} from "react";

  function App() {
    

    // CART STATE
    const [cart, setCart] = useState(

  JSON.parse(
    localStorage.getItem("cart")
  ) || []

);

    // SIDEBAR OPEN/CLOSE
    const [showCart, setShowCart] = useState(false);
    useEffect(() => {

  localStorage.setItem(
    "cart",
    JSON.stringify(cart)
  );

}, [cart]);

    return (

      <div>

        <Navbar
  cart={cart}
  setShowCart={setShowCart}
/>

        <Routing
          cart={cart}
          setCart={setCart}
          showCart={showCart}
          setShowCart={setShowCart}
        />

        <Footer />

        <Footerend />

      </div>

    );
  }

  export default App;