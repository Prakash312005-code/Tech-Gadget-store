import React from 'react'
import Styles from './Helpcenter.module.css'
const Helpcenter = () => {
  return (
    <div className={Styles.helpcenter}>
 <div className={Styles.centername}>
  <p>TechShed HelpCenter</p>
 </div>
 <div className={Styles.centertwo}>
  <p>Frequently asked questions</p>
  <p className={Styles.generalname} >General</p>

 <div className="accordion" id="accordionExample" >
  <div className="accordion-item" style={{width : '80%' ,}}>
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        What is FAQs section?
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{fontSize : '17px' , fontWeight : '400'}}>
An FAQ section can be used to quickly answer common questions about your business like "Where do you ship to?", "What are your opening hours?", or "How can I book a service?".       </div>
    </div>
  </div>
  <div className="accordion-item"  style={{ width : '80%' ,}}>
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       Why do FAQs Matter
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{fontSize : '17px' , fontWeight : '400'}}>
FAQs are a great way to help site visitors find quick answers to common questions about your business and create a better navigation experience.
      </div>
    </div>
  </div>
  <div className="accordion-item"  style={{display : 'flex', justifyContent : 'center', flexDirection : 'column' , width : '80%' ,}}>
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
       Where Can I Add My FAQs
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={{fontSize : '17px' , fontWeight : '400'}}>

FAQs can be added to any page on your site or to your Wix mobile app, giving access to members on the go.      </div>
    </div>
  </div>
</div>
 </div>
    </div>
  )
}

export default Helpcenter