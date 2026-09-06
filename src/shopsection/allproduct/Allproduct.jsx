import React, { useState, useEffect } from "react";
import Styles from "../allproduct/Allproduct.module.css";
import { fetchProducts } from "../../components/Productlist";

import { useParams, useNavigate } from "react-router-dom";

const Allproduct = () => {

  const [selectedCategory, setSelectedCategory] = useState("All");

  // Products will now come from Spring Boot
  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const { category } = useParams();

  const navigate = useNavigate();


  // GET ALL PRODUCTS FROM SPRING BOOT
  useEffect(() => {

    fetchProducts()

      .then((data) => {

        console.log("Products from Spring Boot:", data);

        setProducts(data);

        setLoading(false);

      })

      .catch((error) => {

        console.error(error);

        setError("Failed to load products");

        setLoading(false);

      });

  }, []);


  // CATEGORY FROM URL
  useEffect(() => {

    if (category) {
      setSelectedCategory(category);
    }

  }, [category]);


  // SCROLL TO SHOP SECTION
  useEffect(() => {

    const section = document.getElementById("shopsection");

    if (section) {

      section.scrollIntoView({
        behavior: "smooth",
      });

    }

  }, []);


  // FILTER PRODUCTS
  const filteredProducts =
    selectedCategory === "All"
      ? products

      : selectedCategory === "BestSale"
      ? products.filter((item) => item.sale)

      : products.filter(
          (item) => item.category === selectedCategory
        );


  // LOADING
  if (loading) {
    return <div>Loading products...</div>;
  }


  // ERROR
  if (error) {
    return <div>{error}</div>;
  }


  return (

    <div
      id="shopsection"
      className={Styles.main_container}
    >

      {/* LEFT SIDEBAR */}

      <div className={Styles.left_sidebar}>

        <h2 className={Styles.sidebar_title}>
          Browse by
        </h2>


        <ul className={Styles.category_list}>

          <li onClick={() => setSelectedCategory("All")}>
            All Products
          </li>


          <li
            onClick={() =>
              setSelectedCategory("BestSale")
            }
          >
            Best Sale
          </li>


          <li
            onClick={() =>
              setSelectedCategory("Computers")
            }
          >
            Computers
          </li>


          <li
            onClick={() =>
              setSelectedCategory("Gaming")
            }
          >
            Gaming
          </li>


          <li
            onClick={() =>
              setSelectedCategory("Headphones")
            }
          >
            Headphones
          </li>


          <li
            onClick={() =>
              setSelectedCategory("Drones&Cameras")
            }
          >
            Drones & Cameras
          </li>


          <li
            onClick={() =>
              setSelectedCategory("Tablets")
            }
          >
            Tablets
          </li>


          <li
            onClick={() =>
              setSelectedCategory("Mobile")
            }
          >
            Mobile
          </li>


          <li
            onClick={() =>
              setSelectedCategory("TV&HomeCinema")
            }
          >
            TV & Home Cinema
          </li>


          <li
            onClick={() =>
              setSelectedCategory("Speakers")
            }
          >
            Speakers
          </li>


          <li
            onClick={() =>
              setSelectedCategory("Wearable")
            }
          >
            Wearable Tech
          </li>

        </ul>

      </div>


      {/* RIGHT PRODUCT SECTION */}

      <div className={Styles.right_product_section}>


        <div>

          <p className={Styles.biglet}>

            Home &gt;{" "}

            {selectedCategory === "All"
              ? "All Products"
              : selectedCategory === "BestSale"
              ? "Best Sale"
              : selectedCategory}

          </p>


          <h1 className={Styles.page_title}>

            {selectedCategory === "All"
              ? "All Products"
              : selectedCategory === "BestSale"
              ? "Best Sale"
              : selectedCategory}

          </h1>

        </div>


        <div className={Styles.top_section}>

          <p className={Styles.product_total}>

            {filteredProducts.length} Products

          </p>

        </div>


        {/* PRODUCT GRID */}

        <div className={Styles.product_grid}>

          {filteredProducts.map((item) => (

            <div
              className={Styles.product_card}
              key={item.id}
              onClick={() =>
                navigate(`/product/${item.id}`)
              }
            >


              {item.sale && (

                <span className={Styles.sale_badge}>
                  SALE
                </span>

              )}


              <div className={Styles.image_box}>

                <img
                  src={item.image}
                  alt=""
                  className={Styles.product_image}
                />

              </div>


              <div className={Styles.product_details}>


                <div className={Styles.product_name}>

                  {item.content}

                </div>


                <div className={Styles.price_box}>


                  {item.delete && (

                    <span className={Styles.old_price}>

                      {item.delete}

                    </span>

                  )}


                  <span className={Styles.new_price}>

                    {item.price}

                  </span>

                </div>


              </div>

            </div>

          ))}

        </div>

      </div>

    </div>

  );
};


export default Allproduct;