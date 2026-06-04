import React from 'react'
import bgt1 from '../../assets/template1.webp'
import bgt2 from '../../assets/template2.webp'
import bgt3 from '../../assets/template3.webp'
import Styles from '../gamingbestsale/Gamingbs.module.css'
import { useNavigate } from 'react-router-dom'
const Gamingbestsale = () => {
     const navigate = useNavigate();
  return (
    <div >
        <div className={Styles.section}>

       
        <div className={Styles.top_section} style={{
    backgroundImage: `url(${bgt1})`,
  }}  onClick={() => navigate("/allproduct/Gaming")}>
        <p>Gaming BestSeller</p>
        <h1>AeroTrack 300</h1>
        <h5> Ultimate Gaming Mouse </h5>
    </div>
         <div className={Styles.mid_section} style={{
    backgroundImage: `url(${bgt2})`,
  }} onClick={() => navigate("/allproduct/Gaming")}>
        <p>Gaming BestSeller</p>
        <h1>QuantumX1</h1>
        <h5>Keyboard For Gamers</h5>

    </div>
         <div className={Styles.bottom_section} style={{
    backgroundImage: `url(${bgt3})`,
    
  }} onClick={() => navigate("/allproduct/Gaming")}>
        <p>Gaming BestSeller</p>
        <h1>KeyGoX1</h1>
        <h5>Wireless Gaming Headphone</h5>
    </div>
    </div>
    </div>
  )
}

export default Gamingbestsale