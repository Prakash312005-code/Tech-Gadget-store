import React from 'react'
import Styles from '../../sections/homefifth/Homefifth.module.css'
import img7 from '../../assets/c837a6_ecf32c7284d4430582fcc90f60a1b4e6~mv2.jpg'
import Buttons from '../../components/Buttons'
import { useNavigate } from "react-router-dom";

const Homefifth = () => {
  const navigate = useNavigate();
  return (
    <div className={Styles.homesection}>
    <div className={Styles.Homefifth}>
      <div className={Styles.fifthcontent}>
      <p style={{ fontSize: "20px", fontWeight: "500" ,  color :'white',backgroundColor :'red' , width : 'max-content' , padding : '5px' }}>Today's Special</p>
      <p style={{ fontSize: "30px", fontWeight: "600" }}>Best Arial View In Town </p>
      <p style={{ fontSize: "100px", fontWeight: "500" , color : 'rgb(117, 31, 255)' }}>30% OFF</p>
      <p style={{ fontSize: "25px", fontWeight: "500" }}>On Proffesional Camera Drones</p>
      <p style={{ fontSize: "20px", fontWeight: "350" }}>Limited quantities.<br/>
         See product detail pages for availability.</p>
         <p><Buttons   onClick={() => navigate("/allproduct/Drones&Cameras")} col={'white'} bg={'rgb(117, 31, 255)'} br={'20px'} padd={'10px'} wid={'150px'} text={'Shop'}/></p>
    </div>

    <div className={Styles.fifthcontext}>
      <img src={img7} alt="product "></img>
    </div>
    </div>
    </div>
  )
}

export default Homefifth