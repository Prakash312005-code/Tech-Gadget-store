import React from 'react'
import bgimage from '../../assets/bgimage.png'
import img2 from '../../assets/ChatGPT Image May 22, 2026, 09_46_17 PM.png'
import Styles from '../homefirst/Homefirst.module.css'
import Buttons from '../../components/Buttons'
import { useNavigate } from "react-router-dom";

const Homefirst = () => {
  const navigate = useNavigate();
  return (
    
  

<div
  className={Styles.top_section}
  style={{
    backgroundImage: `url(${bgimage})`,
  }}
>
  <div className={Styles.banner_content}>
    <p className={Styles.small_text}>Best Prices</p>

    <h1 className={Styles.banner_title}>
      Incredible Prices on All Your Favorite Items
    </h1>

    <p className={Styles.banner_bottom}>
      Get more for less on selected brands
    </p>
             <p><Buttons  onClick={() => navigate("/allproduct")} col={'white'} bg={'rgb(117, 31, 255)'} br={'20px'} padd={'10px'} wid={'150px'} text={'Shop Now'}/></p>

  </div>
</div>

  )
}

export default Homefirst