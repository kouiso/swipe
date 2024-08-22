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
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const handleClose = () => {
    setSelectedImage(null);
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
          <SwiperSlide>
            <Card sx={{ maxWidth: 345, margin: 'auto' }} onClick={() => handleImageClick('/images/image1.jpeg')}>
              <CardMedia
                component="img"
                height="400"
                image="/images/image1.jpeg"
                alt="Image 1"
                style={{ objectFit: 'contain', cursor: 'pointer' }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Image 1
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This is a description for Image 1.
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card sx={{ maxWidth: 345, margin: 'auto' }} onClick={() => handleImageClick('/images/image2.jpeg')}>
              <CardMedia
                component="img"
                height="400"
                image="/images/image2.jpeg"
                alt="Image 2"
                style={{ objectFit: 'contain', cursor: 'pointer' }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Image 2
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This is a description for Image 2.
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card sx={{ maxWidth: 345, margin: 'auto' }} onClick={() => handleImageClick('/images/image3.jpeg')}>
              <CardMedia
                component="img"
                height="400"
                image="/images/image3.jpeg"
                alt="Image 3"
                style={{ objectFit: 'contain', cursor: 'pointer' }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Image 3
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This is a description for Image 3.
                </Typography>
              </CardContent>
            </Card>
          </SwiperSlide>
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
            <SwiperButtonPrev />
            <SwiperButtonNext />
          </Box>
        </Swiper>
        <Box className="swiper-custom-pagination" sx={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }} />
      </Box>

      {selectedImage && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            zIndex: 1000,
          }}
          onClick={handleClose}
        >
          <Card sx={{ maxWidth: '80%', maxHeight: '80%' }}>
            <CardMedia
              component="img"
              image={selectedImage}
              alt="Selected Image"
              style={{ objectFit: 'contain', cursor: 'pointer' }}
            />
          </Card>
        </Box>
      )}
    </Box>
  );
}