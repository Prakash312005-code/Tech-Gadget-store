import React, { useRef } from "react";
import Styles from '../../sections/homeonsale/Homeonsale.module.css'
import os2 from '../../assets/onsalewatch.avif'
import os3 from '../../assets/oscamera.avif'
import os4 from '../../assets/osglass.avif'
import os5 from '../../assets/oslap.avif'
import os6 from '../../assets/osspeaker.avif'
import hp9 from "../../assets/hp10.png";
import hp13 from "../../assets/hp15.png";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Buttons from "../../components/Buttons";
import { useNavigate } from "react-router-dom";
const Homeonsale = () => {
  const navigate = useNavigate();
     const sliderRef = useRef(null);
    const product = [
   {
      id: 1,
      image: hp9,
      content: "Nova SoundPro Gaming 3000",
      delete: "$95.00",
      price: "$85.00",  
      sale: true,
      category: "Gaming",
    },
    {
      id: 2,
      image: os2,
      content:  
          "Space Moon Smartwatch With Charger",
      
     
delete  : "$80.00",
      price: "$ 70.00",
    },
     {
      id: 3,
      image: hp13,
      content: "QuantumPulse X1(0000)",
      delete: "$85.00",
      price: "$75.00",  
      sale: true,
      category: "Gaming",
    },
    {
      id: 4,
      image: os3,
      content: "H1C Indoor Wireless 1080p <br/> Network Security Camera",
       delete : '$95.00',
      price: "$ 85.00",
    },
    {
      id: 5,
      image: os4,
      content: "Journey Glass XD Virtual Reality Headset",
       delete : '$70.00',
      price: "$ 60.00",
    },
    {
      id: 6,
      image: os5,
      content: "Pilates 16 Touch Screen Laptop 24GB Memory",
       delete : '$100.00',
      price: "$ 90.00",
    },
   
    {
      id: 7,
      image: os6,
      content: "Turn5 Portable Bluetooth Speaker",
      delete : '$30.00',
      price: "$ 20.00",
    },
    ];
     const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft += 300;
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft -= 300;
    }
  };
  return (
   <div>
      <div className={Styles.new}>
        <p className={Styles.para}>On Sale</p>

        <div className="container-fluid">
          <div className="container">
            <div className={Styles.homesecond_div}>
              <div className={Styles.buttons}>
                <button onClick={prevSlide}>
   <IoIosArrowBack />
                </button>

                <div className={Styles.slider} ref={sliderRef}>
                  {product.map((p ) => (
                    <div className={Styles.product_row} key={p.id}
                    >
                      <div
                        className="card       "
                        style={{
                          width: "300px",
                          borderRadius: "20px",
                          overflow: "hidden",
                          border : '1px solid whitesmoke'
                        }}
                      >
                        <p>
                         <p className={Styles.sale}>SALE 10% OFF</p>
                          <img
                            className={Styles.product_image}
                            src={p.image}
                            alt={p.content}
                             
                          />
                        </p>

                        <p
                          className={Styles.product_content}
                          style={{ textAlign: "center",  }}
                        >
                          {p.content}
                        </p>

                        <p
                          className={Styles.product_price}
                          style={{ textAlign: "center" , color :'rgb(117, 31, 255)' }}
                        >
                          <p><del>{p.delete}</del> {p.price}</p>
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <button onClick={nextSlide}>
   <IoIosArrowForward />
                </button>
              </div>
            </div>
          </div>
        </div>
       <p style={{display : 'flex', justifyContent : 'center' ,width : '100%'}}><Buttons   onClick={() => navigate("/allproduct")} col={'white'} bg={'rgb(117, 31, 255)'} br={'20px'} padd={'10px'} wid={'250px'} text={'View All'}/></p>

      </div>
    </div>
  );
};



export default Homeonsale