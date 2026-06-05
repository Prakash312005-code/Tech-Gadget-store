import React from 'react'
import Styles from '../../sections/homefourth/Homefourth.module.css'
import img6 from '../../assets/c837a6_42dd66a436e846648736f4bc9546bf14~mv2.avif'
import Buttons from '../../components/Buttons'
import { useNavigate } from "react-router-dom";

const Homefourth = () => {
  const navigate = useNavigate();
  return (
    <div className={Styles.home} >
    <div className={Styles.homefourth}>
<div className={Styles.fourthcontent}>
<img src={img6} alt="deals" style={{height : '70vh' , objectFit : 'cover'}}></img>
</div>
<div className={Styles.fourthcontext}>
<p style={{ fontSize: "30px", fontWeight: "500" }}>Save up to</p>
<p style={{ fontSize: "100px", fontWeight: "600" }}>$150</p>
<p style={{ fontSize: "30px", fontWeight: "500" }}>On Selected Laptop <br/>& Tablet Brands</p>
<p style={{ fontSize: "20px", fontWeight: "250" }}>Terms And Condition Apply</p>
<p><Buttons  onClick={() => navigate("/allproduct/Computers")} col={'white'} bg={'rgb(117, 31, 255)'} br={'20px'} padd={'10px'} wid={'150px'} text={'Shop'}/></p>
</div>

    </div>
    
    </div>
  )
}

export default Homefourth