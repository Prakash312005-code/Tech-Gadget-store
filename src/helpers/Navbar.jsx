import React from "react";
import { CiSearch } from "react-icons/ci";
import { MdAccountCircle } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Styles from '../helpers/Navbar.module.css'
const Navbar = ({
  cart,
  setShowCart,
}) => {
  const navigate = useNavigate( );
  return (
    <div style={{
  //  border  :'1px solid red',
        height : '100px',
          fontSize: "50px",
          fontWeight: "600",
        
          display: "flex",
       
          justifyContent: "space-between",
          alignItems : 'center',
          padding: "40px", 
        }}
          >

<p
        style={{
    //  border  :'1px solid red',
          fontSize: "50px",
          fontWeight: "600",
          padding: "10px",
       
        }}
        
      >
        TechShed   </p>
        <p   className={Styles.nav_text}
        style={{
      // border  :'1px solid red',
        
          backgroundColor: "whitesmoke",
          borderRadius : '30px',
          color : 'black',
          height: "50px", 
          padding : "10px", 
          margin :'10px', 
          display: "flex",
          gap: "40px",
          fontSize: "20px",
          
           
        }}
      >
        
        <p onClick={() => navigate("/about")}  >ABOUT  </p>
        <p onClick={() => navigate("/allproduct")}> PRODUCTS</p>
        <p onClick={() => navigate("/")}> SHOP</p>
        <p onClick={() => navigate("/helpcenter")}>HELP CENTER</p>
        
      </p> 
        <p
          style={{
          //  border  :'1px solid red',
            color : 'black',
            fontSize: "30px",
            padding  : "10px",  
            display: "flex",
            gap: "60px",
             margin :'10px',
          }}
        >
          <CiSearch />
          <MdAccountCircle />
          <CiHeart />
        <FaCartShopping
  onClick={() => setShowCart(true)}
  
/>
        </p>

      

 
    </div>
  );
};

export default Navbar;
