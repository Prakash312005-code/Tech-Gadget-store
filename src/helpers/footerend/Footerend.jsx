import React from 'react'
import styles from '../../helpers/footerend/Footerend.module.css'
import { useNavigate } from 'react-router-dom';
const Footerend = () => {
   const navigate = useNavigate();
  return (
    <div className={styles.footermain}>
<div  className={styles.footerone}>
    <p style={{fontSize : '25px', fontWeight : '500'}}>Store Location</p>
    <p>500 Terry Francine Street<br/>
San Francisco, CA 94158<br/>
info@mysite.com<br/>

123-456-7890</p>

</div>
<div  className={styles.footertwo}>
  <p style={{fontSize : '25px', fontWeight : '500'}}>Shop</p>
   
        <p  onClick={() => navigate("/allproduct/Computers")}>Computers</p>    
         <p  onClick={() => navigate("/allproduct/Tablets")}>Tablets</p>  
          <p  onClick={() => navigate("/allproduct/Drones&Cameras")}>Drones&Cameras</p>  
           <p  onClick={() => navigate("/allproduct/Gaming")}>Gaming</p>  
            <p  onClick={() => navigate("/allproduct/Headphones")}>Headphones</p>  
             <p  onClick={() => navigate("/allproduct/Mobile")}>Mobile</p> 
              <p  onClick={() => navigate("/allproduct/TV&HomeCinema")}>TV&HomeCinema</p>  
               <p  onClick={() => navigate("/allproduct/Speakers")}>Speakers</p>  
                <p  onClick={() => navigate("/allproduct/Wearable")}>Wearable Tech</p>   

</div>
<div  className={styles.footerthree}>
  <p style={{fontSize : '25px', fontWeight : '500'}}>Customer Support</p>
  <p> 
Contact Us<br/>
Help Center<br/>
About Us<br/>
Careers</p>
  
</div>
<div  className={styles.footerfour}>
  <p style={{fontSize : '25px', fontWeight : '500'}}> Policy</p>
  <p>
Shipping & Returns<br/> 
Terms & Conditions<br/>
Payment Methods <br/>
FAQ</p>
</div>

    </div>
  )
}

export default Footerend