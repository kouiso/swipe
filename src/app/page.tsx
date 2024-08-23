"use client";
import "./swiper-navigator-button.scss";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import styles from "./style.module.scss"; // SASS module import

export default function ThumbnailSlider() {
  const [slides] = useState([
    {
      id: 1,
      src: "/images/image1.jpeg",
      title: "Image 1",
      description: "This is a description for Image 1.",
    },
    {
      id: 2,
      src: "/images/image2.jpeg",
      title: "Image 2",
      description: "This is a description for Image 2.",
    },
    {
      id: 3,
      src: "/images/image3.jpeg",
      title: "Image 3",
      description: "This is a description for Image 3.",
    },
  ]);
  const [selectedImage, setSelectedImage] = useState<string>(slides[0]?.src);

  const handleImageClick = (swiper: any, index: number) => {
    if (slides[index]) {
      setSelectedImage(slides[index].src);
      swiper.slideTo(index);
    }
  };

  useEffect(() => {
    setSelectedImage(slides[0]?.src);
  }, [slides]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <p>
          Get started by editing&nbsp;
          <code>src/app/page.tsx</code>
        </p>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          By{" "}
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            width={100}
            height={24}
            priority
          />
        </a>
      </div>

      <div className={styles.imageContainer}>
        <Image
          src={selectedImage}
          alt="Selected Image"
          width={720}
          height={148}
          priority
          style={{ objectFit: "contain" }}
        />
      </div>

      <div className={styles.swiperContainer}>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true, el: ".swiper-custom-pagination" }}
          spaceBetween={8}
          centeredSlides={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 8,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 8,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 8,
            },
          }}
          onSwiper={(swiper) => {
            swiper.on("click", function () {
              handleImageClick(swiper, swiper.clickedIndex);
            });
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <div
                className={`${styles.card} ${
                  selectedImage === slide.src ? styles.selectedCard : ""
                }`}
              >
                <Image
                  src={slide.src}
                  alt={slide.title}
                  width={200}
                  height={200}
                  style={{ objectFit: "contain", cursor: "pointer" }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={`swiper-custom-pagination ${styles.pagination}`} />
      </div>
    </div>
  );
}
