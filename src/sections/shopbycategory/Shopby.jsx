import React from "react";
import Styles from "../../sections/shopbycategory/Shopby.module.css";
import comp4 from "../../assets/comp4.avif";
import h1 from "../../assets/hp6.avif";
import dc1 from "../../assets/dc4.avif";
import t1 from "../../assets/t4.avif";
import m1 from "../../assets/onsalemobile.avif";
import tv from "../../assets/tv2.avif";
import s from "../../assets/s1.avif";
import w from "../../assets/w1.avif";
import { useNavigate } from "react-router-dom";
const Shopby = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className={Styles.shopname}>
        <p >Shop By Category</p>
      </div>
      <div className={Styles.shopmain}>
        <div className={Styles.shopone}>
          <img
            src={comp4} alt="computers "
            onClick={() => navigate("/allproduct/Computers")}
          ></img>
          {/* <p className={Styles.itemname}>Computers</p> */}
        </div>
        <div className={Styles.shopone}>
          <img
            src={h1} alt="Headphones "
            onClick={() => navigate("/allproduct/Headphones")}
          ></img>

          {/* <p className={Styles.itemname}>Headphones</p> */}
        </div>
        <div className={Styles.shopone}>
          <img
            src={dc1} alt="Drones&Cameras"
            onClick={() => navigate("/allproduct/Drones&Cameras")}
          ></img>

          {/* <p className={Styles.itemname}>Drones&Cameras</p> */}
        </div>
        <div className={Styles.shopone}>
          <img src={t1} alt="Tablets" onClick={() => navigate("/allproduct/Tablets")}></img>

          {/* <p className={Styles.itemname}>Tablets</p> */}
        </div>
      </div>
      <div className={Styles.shopmain}>
        <div className={Styles.shopone}>
          <img src={m1} alt="Mobile" onClick={() => navigate("/allproduct/Mobile")}></img>

          {/* <p className={Styles.itemname}>Mobile</p> */}
        </div>
        <div className={Styles.shopone}>
          <img
            src={tv} alt="TV&HomeCinema"
            onClick={() => navigate("/allproduct/TV&HomeCinema")}
          ></img>

          {/* <p className={Styles.itemname}>TV&HomeCinemas</p> */}
        </div>
        <div className={Styles.shopone}>
          <img src={s}  alt="Speakers "onClick={() => navigate("/allproduct/Speakers")}></img>

          {/* <p className={Styles.itemname}>Speakers</p> */}
        </div>
        <div className={Styles.shopone}>
          <img src={w} alt="Wearable" onClick={() => navigate("/allproduct/Wearable")}></img>

          {/* <p className={Styles.itemname}>Wearables</p> */}
        </div>
      </div>
    </div>
  );
};

export default Shopby;
