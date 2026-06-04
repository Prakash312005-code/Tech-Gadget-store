import React from "react";
import img4 from "../../assets/headphone.avif";
import img5 from "../../assets/iphone.avif";
import Styles from "../homesecond/Homesecond.module.css";
import Buttons from "../../components/Buttons";
import { useNavigate } from "react-router-dom";

const Homesecond = () => {
  const navigate = useNavigate();
  return (
    <div className={Styles.headtext}>
      <div
        className={Styles.headimage}
        style={{ backgroundImage: `url(${img4})` , width : '100%',height : 'auto'}}
      >
        <div className={Styles.headcontent}>
          <p style={{ fontSize: "20px" }}>Just In </p>
          <p style={{ fontSize: "50px", fontWeight: "600" }}>
            Take Your <br /> Sound <br /> Anywhere
          </p>
          <p style={{ fontSize: "25px", fontWeight: "200" }}>
            Top HeadPhone Brand
          </p>
          <p className={Styles.button}><Buttons    onClick={() => navigate("/allproduct/Headphones")}col={'black'} bg={'white'} br={'20px'} padd={'10px'} wid={'100px'} text={'Shop'}/></p>
        </div>
      </div>
      <div
        className={Styles.headcontext}
        style={{ backgroundImage: `url(${img5})`, width : '100%',height : 'auto'}}
      >
        <div className={Styles.context}>
          <p style={{ fontSize: "20px" }}>Holiday Deals</p>
          <p style={{ fontSize: "50px", fontWeight: "600" }}>
            Up To <br />
            30% off
          </p>
          <p style={{ fontSize: "20px", fontWeight: "200" }}>
            Selected Smartphone <br /> Brands
          </p>
          <p><Buttons  onClick={() => navigate("/allproduct/Mobile")} col={'black'} bg={'white'} br={'20px'} padd={'10px'} wid={'100px'} text={'Shop'}/></p>

        </div>
      </div>
    </div>
  );
};

export default Homesecond;
