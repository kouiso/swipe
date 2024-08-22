'use client';
import React, { useState } from 'react';
import Image from "next/image";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Box, Link, Typography, Card, CardContent, CardMedia, Button } from "@mui/material";

const SwiperButtonNext = () => {
  const swiper = useSwiper();
  return (
    <Button variant="contained" color="primary" onClick={() => swiper.slideNext()}>
      Next
    </Button>
  );
};

const SwiperButtonPrev = () => {
  const swiper = useSwiper();
  return (
    <Button variant="contained" color="primary" onClick={() => swiper.slidePrev()}>
      Previous
    </Button>
  );
};

export default function Home() {
  const [slides, setSlides] = useState([
    { id: 1, src: '/images/image1.jpeg', title: 'Image 1', description: 'This is a description for Image 1.' },
    { id: 2, src: '/images/image2.jpeg', title: 'Image 2', description: 'This is a description for Image 2.' },
    { id: 3, src: '/images/image3.jpeg', title: 'Image 3', description: 'This is a description for Image 3.' },
  ]);

  const handleImageClick = (index: number) => {
    const newSlides = [...slides];
    const [selectedSlide] = newSlides.splice(index, 1);
    newSlides.splice(Math.floor(newSlides.length / 2), 0, selectedSlide);
    setSlides(newSlides);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '6rem', minHeight: '100vh', background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)' }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '0.85rem', maxWidth: '100%', width: '100%', zIndex: 2, fontFamily: 'monospace', color: '#333' }}>
        <Typography>
          Get started by editing&nbsp;
          <code>src/app/page.tsx</code>
        </Typography>
        <Link href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app" target="_blank" rel="noopener noreferrer" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', color: '#0070f3', textDecoration: 'none' }}>
          By{" "}
          <Image
            src="/vercel.svg"
            alt="Vercel Logo"
            width={100}
            height={24}
            priority
          />
        </Link>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '2rem 0' }}>
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </Box>

      <Box sx={{ width: '100%', maxWidth: '100%' }}>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true, el: '.swiper-custom-pagination' }}
          spaceBetween={30}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <Card sx={{ maxWidth: 345, margin: 'auto' }} onClick={() => handleImageClick(index)}>
                <CardMedia
                  component="img"
                  height="400"
                  image={slide.src}
                  alt={slide.title}
                  style={{ objectFit: 'contain', cursor: 'pointer' }}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {slide.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {slide.description}
                  </Typography>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
            <SwiperButtonPrev />
            <SwiperButtonNext />
          </Box>
        </Swiper>
        <Box className="swiper-custom-pagination" sx={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }} />
      </Box>
    </Box>
  );
}