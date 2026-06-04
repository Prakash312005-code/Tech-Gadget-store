import React, { useRef } from "react";
import Styles from "../../sections/homethird/Homethird.module.css";
import dealimg2 from "../../assets/comp7.avif";
import dealimg3 from "../../assets/c22c23_77a52a8e6f8b4879a6548e11a3df3613~mv2.avif";
import dealimg4 from "../../assets/c22c23_9a6d29ecf9c640b28cc79f695e9fb3c2~mv2.avif";
import dealimg5 from "../../assets/c22c23_c25f748ee2264db6a3767d99717a2b84~mv2.avif";
import dealimg7 from "../../assets/dealimgairpods.avif";
import dealimg8 from "../../assets/dealimgtab.avif";
import dealimg9 from "../../assets/dealmobile.avif";
import dealimg10 from "../../assets/dealtv2.avif";
import dealimg11 from "../../assets/dealwtch.avif";
import dealimg12 from "../../assets/dealdb.avif";
import gaming from '../../assets/gaming.png'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import Buttons from "../../components/Buttons";
import { useNavigate } from "react-router-dom";

const Homethird = () => {
  const navigate = useNavigate();
  const sliderRef = useRef(null);
  const product = [
    {
      id: 1,
      image: gaming,
      content: "NovaStick Elite N5",
     delete: "$95.00",
      price: "$85.00",  
      sale: true,
      category: "Gaming",
    },
    {
      id: 2,
      image: dealimg2,
      content: (
        <>
          JP Gaming Laptop 15.6 <br /> Laptop 256GB
        </>
      ),
      price: "$ 70.00",
    },
    {
      id: 3,
      image: dealimg3,
      content: (
        <>
          HKI Tech Quadcopter Drone With <br />
          360 Camera & Controller
        </>
      ),
      delete: "$95.00",
      price: "$ 75.00",
    },
    {
      id: 4,
      image: dealimg4,
      content: "JP - Space Tablet 10.4' Wi-Fi 32GB",
      delete: "$70.00",
      price: "$ 60.00",
    },
    {
      id: 5,
      image: dealimg5,
      content: (
        <>
          Megapixel Waterproof <br />
          Mini Digital Camera
        </>
      ),
      delete: "$115.00",
      price: "$ 100.00",
    },

    {
      id: 6,
      image: dealimg7,
      content: (
        <>
          White Buds Wireless <br />
          Earbud Headphones
        </>
      ),
      price: "$ 10.50",
    },
    {
      id: 7,
      image: dealimg8,
      content: "Ocean Pro 11 - 12.3 Touch Screen",
      delete: "$55.00",
      price: "$ 45.50",
    },
    {
      id: 8,
      image: dealimg9,
      content: (
        <>
          Smartphone Z Pixel Max <br />
          128GB Unlocked
        </>
      ),
      price: "$ 50.00",
    },
    {
      id: 9,
      image: dealimg10,
      content: "Shel 50 Class LED 4K UHD Smart TV",
      delete: "$59.99",
      price: "$ 49.99",
    },
    {
      id: 10,
      image: dealimg11,
      content: (
        <>
          Fitboot Inspire Fitness Tracker <br />
          With Heart Rate Tracking
        </>
      ),
      price: "$ 29.00",
    },
    {
      id: 11,
      image: dealimg12,
      content: "SDK Portable Bluetooth Speaker",
      price: "$ 10.50",
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
        <p className={Styles.para}>Best Sellers</p>

        <div className="container-fluid">
          <div className="container">
            <div className={Styles.homesecond_div}>
              <div className={Styles.buttons}>
                <button onClick={prevSlide}>
                  <IoIosArrowBack />
                </button>

                <div className={Styles.slider} ref={sliderRef}>
                  {product.map((p) => (
                    <div className={Styles.product_row} key={p.id}>
                      <div
                        className="card "
                        style={{
                          width: "300px",
                          borderRadius: "20px",
                          overflow: "hidden",
                        }}
                      >
                        <p>
                          <img
                            className={Styles.product_image}
                            src={p.image}
                            alt={p.content}
                          />
                        </p>

                        <p
                          className={Styles.product_content}
                          style={{ textAlign: "center" }}
                        >
                          {p.content}
                        </p>

                        <p
                          className={Styles.product_price}
                          style={{
                            textAlign: "center",
                            color: "rgb(117, 31, 255)",
                          }}
                        >
                          <p>
                            <del>{p.delete}</del> {p.price}
                          </p>
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
        <p style={{ display: "flex", justifyContent: "center", width: "100%" }}>
          <Buttons
           onClick={() => navigate("/allproduct")}
            col={"white"}
            bg={"rgb(117, 31, 255)"}
            br={"20px"}
            padd={"10px"}
            wid={"250px"}
            text={"View All"}
          />
        </p>
      </div>
    </div>
  );
};

export default Homethird;
