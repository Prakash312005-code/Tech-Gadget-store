import React from 'react'
import ftimg1 from '../../assets/footerimg.avif'
import Styles from '../footer/Footer.module.css'
import Buttons from '../../components/Buttons'
import { useNavigate } from "react-router-dom";
const Footer = () => {
   const navigate = useNavigate();
  return (
<div className={Styles.homesection}>
    <div className={Styles.Homefifth}>
      <div className={Styles.fifthcontent}>
      <p style={{ fontSize: "35px", fontWeight: "600" , margin : '20px' }}>
Need Help? Check Out Our Help Center</p>
      <p style={{ fontSize: "20px", fontWeight: "300" , margin : '20px'}}>I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
         <p style={{padding  : '20px'}}><Buttons  onClick={() => navigate("//helpcenter")}col={'rgb(117, 31, 255)'} bg={ 'white'} br={'20px'} padd={'10px'} wid={'150px'} text={'Go to Help Center'}/></p>
    </div>

    <div className={Styles.fifthcontext}>
      <img src={ftimg1} alt="footer logo"></img>
    </div>
    </div>
    </div> 
     )
}

export default Footer