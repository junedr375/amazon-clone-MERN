import React, { useState, useEffect } from "react";
import { db } from "./firebase";
import "./Home.css";
import Product from "./Product";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Home() {
  const [products, setProducts] = useState([]);

  // console.log("Products are >>>", products);
  const fetchProducts = async () => {
    db.collection("products")
      .orderBy("id", "desc")
      .onSnapshot((snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
  };
  fetchProducts();
  useEffect(() => {});

  // console.log("Products are", products);
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        ></img>
        <div className="home__row">
          {products?.slice(1, 3).map((product) => (
            <Product
              id={product.id}
              title={product.data.title}
              price={product.data.price}
              image={product.data.image}
              rating={product.data.rating}
            ></Product>
          ))}
          {/* <Product
            id="12515"
            title="HP desktop |512GB SSD |8 GB RAM |External Hard Disk drive free inside in the boxHP desktop |512GB SSD |8 GB RAM | "
            price={929.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81pezrPSgOL._SX679_.jpg"
            rating={5}
          ></Product> */}
          {/* <Product
            id="125145"
            title="Lenovo Thinkpad Hybrid Laptop T430 Intel Core i5 - 3320m Processor, 8 GB Ram, 1TB Harddisk & 128 GB SSD, Windows 10 Pro, 14.1 Inches Notebook Computer"
            price={819.99}
            image="https://m.media-amazon.com/images/I/61FWSA8BcDL._AC_UY218_.jpg"
            rating={2}
          ></Product> */}
        </div>
        <div className="home__row">
          <Carousel
            swipeable={true}
            autoPlay={true}
            stopOnHover={true}
            infiniteLoop={true}
            showArrows={true}
          >
            {products?.slice(3).map((product) => (
              <Product
                id={product.id}
                title={product.data.title}
                price={product.data.price}
                image={product.data.image}
                rating={product.data.rating}
              ></Product>
            ))}
          </Carousel>
          {/* <Product
            id="125154"
            title="AHP 245 G7 Laptop 2D8C6PA (AMD Ryzen 3-3300U/4GB Ram/ 1TB HDD/ 14.0 inch HD /Windows-10/AMD Radeon Vega 6 Graphics/ Dark Ash Silver/1.52Kg)"
            price={819.99}
            image="https://m.media-amazon.com/images/I/314rRH-BnJL._AC_UY218_.jpg"
            rating={2}
          ></Product>
          <Product
            id="125525"
            title="HP 14s core i5 10th Gen 14 inch FHD Laptop (8 GB/256 GB SSD/1TB HDD/Windows 10/MS Office 2019/Natural Silver /1.43kg) 14s-cr2000tu"
            price={1819.99}
            image="https://m.media-amazon.com/images/I/712rw0zcH8L._AC_UL320_.jpg"
            rating={4}
          ></Product>
          <Product
            id="185515"
            title="Dell Inspiron 3595 15.6-inch HD Laptop (A9-9425/4GB/1TB HDD/Win 10 + MS Office/Radeon R5 Integrated Graphics/Silver) D560167WIN9SE"
            price={419.99}
            image="https://m.media-amazon.com/images/I/81yaUrHPUoL._AC_UL320_.jpg"
            rating={1}
          ></Product> */}
        </div>
        <div className="home__row">
          {products?.slice(0, 1).map((product) => (
            <Product
              id={product.id}
              title={product.data.title}
              price={product.data.price}
              image={product.data.image}
              rating={product.data.rating}
            ></Product>
          ))}
          {/* <Product
            id="522515"
            title="Samsung 138 cm (55 Inches) 4K UHD QLED Smart TV 55Q8C (Metallic Silver), Ceremic White,Curved LED Backlit Computer Monitor - Full HD, VA Panel with VGA, HDMI, Audio Ports - LC24F390FHWXXL (Black),Ultra HD 4K TVs that would be great for your home. Most of the latest content is available in 4K resolution so it makes sense to buy a 4K TV and enjoy lifelike colors, exceptional details, and high contrast in every frame."
            price={229.99}
            image="https://cdn.mos.cms.futurecdn.net/6ceD9WMbvQ8CAQQRpeNCbZ.jpg"
            rating={5}
          ></Product> */}
        </div>
      </div>
    </div>
  );
}

export default Home;
