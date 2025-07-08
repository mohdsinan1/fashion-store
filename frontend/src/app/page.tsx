"use client";

import React, { useRef, useState } from "react";
import "./home.css";
import "../components/scroll-progress.css";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";
import { Swiper as SwiperType } from "swiper";
import Lottie from "lottie-react";
import animatedbutton from "../assets/button.json.json";
import shopbtn from '../assets/shpbtn.json.json'
import Categories from "@/components/Categories/Categories";




export default function Home() {
  const swiperRef = useRef<SwiperType | null>(null);
  const lottieRef = useRef<any>(null);
  const [hovering, setHovering] = useState(false);
  const images = [
    "pic12.jpg",
    "pic13.jpg",
    "pic9.jpg",
    "pic15.jpg",
    "pic14.jpg",
  ];
  const initialIndex = Math.floor(images.length / 2);
  return (
    <div className="home-container">
      
      {/* Hero Section */}
      <section className="hero-vacay">
  <div className="hero-content">
    <p className="hero-intro">shop our</p>
    <h1 className="hero-title">Vacay Collection</h1>
    <p className="hero-text">
      Be the first to shop just-dropped new arrivals.
    </p>
    <Link href="/products">
    <div className="shop-button-wrapper" >
            <Lottie
              lottieRef={lottieRef}
              animationData={shopbtn}
              loop={true}
              autoplay={true}
              className="shop-button-animation"
            />
            
            <span className="shop-button-text">Shop Now</span>
          </div>
          </Link>
  </div>
</section>

      <div className="popular-container">
        
        <div className="left">
          <h1>Popular product</h1>
          <p>
            Fashion Here We've provide a compiled list of the beauty and fashion
            slogan ideas
          </p>
          <img src="/images/pic1.jpg" alt="" />
        </div>

        <div>
          <div className="right">
            <img src="/images/pic2.jpg" alt="" />
            <img src="/images/pic5.jpg" alt="" />
            <img src="/images/pic4.jpg" alt="" />
            <img src="/images/pic6.jpg" alt="" />
          </div>
        </div>
      </div>

      <div
        className="view-all"
        onMouseEnter={() => {
          setHovering(true);
          lottieRef.current?.play();
        }}
        onMouseLeave={() => {
          setHovering(false);
          lottieRef.current?.stop();
        }}
      >
        <Link href="/products">
          <div className="hover-wrapper">
            <span className={`view-text ${hovering ? "fade-out" : "fade-in"}`}>
              View All
            </span>
            <div
              className={`lottie-button ${hovering ? "fade-in" : "fade-out"}`}
            >
              <Lottie
                lottieRef={lottieRef}
                animationData={animatedbutton}
                autoplay={false}
                loop={false}
                style={{ width: "150px", height: "50px" }}
              />
            </div>
          </div>
        </Link>
      </div>
      <hr />

      <div className="our-product">
        <h1>Fashion that Speaks for You</h1>
        <p>
          Fashion conjures up positive imagery about your business or your
          product.
          <br /> A good is memorable and desirable.
        </p>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          speed={600}
          initialSlide={initialIndex}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="productSwiper"
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={`/images/${img}`}
                alt={`Product ${index + 1}`}
                onClick={() => swiperRef.current?.slideTo(index)}
                className="clickable-img"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

   


      <div className="our-blog">
        <h1>Our Latest News & Blog</h1>
        <p>
          Catch up on the latest fashion trends, styling tips, and seasonal
          must-haves.
        </p>

        <div className="blog-container">
          <div className="right-blog">
            <div className="blog-box">
              <img src="/images/pic19.jpg" alt="Fashion Blog 1" />
              <div className="blog-content">
                <h6>Publisher: Mia Laurent • Feb 5, 2025</h6>
                <p>
                  From power suits to oversized blazers, here’s how to nail the
                  boss-babe look this year with confidence and style.
                </p>
                <br />
                <br />
                <h5>Mastering the Modern Office Look</h5>
              </div>
            </div>

            <div className="blog-box">
              <img
                className="top-img"
                src="/images/pic7.jpg"
                alt="Fashion Blog 2"
              />
              <div className="blog-content">
                <h6>Publisher: Luca Martin • Mar 18, 2025</h6>
                <p>
                  Neutral tones, soft knits, and minimal accessories—let's dive
                  into the minimalist fashion wave sweeping 2025.
                </p>
                <br />
                <br />
                <h5>The Rise of Minimalist Fashion Look</h5>
              </div>
            </div>
          </div>

          <div className="left-blog">
            <img src="/images/pic18.jpg" alt="Featured Fashion" />
            <h6>Publisher: Amelia Rose • Jan 24, 2025</h6>
            <p>
              Step into spring with bold florals and breezy layers. Discover our
              top picks for the season and how to style them effortlessly for
              every occasion.
            </p>
            <h5>Spring Revival: Fresh Looks for a New Season</h5>
          </div>
        </div>
      </div>

      <Categories/>
    </div>

  
  );
}
