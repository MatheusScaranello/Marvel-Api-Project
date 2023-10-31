"use client"
import React, { useRef, useEffect } from 'react';
import styles from './sobrenos.module.css';
import IntegranteCash from '../components/integranteCash/IntegranteCash';
import integrantes from '@/data/Integrantes';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Sobrenos = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiper = swiperRef.current;

    const nextSlide = () => {
      if (swiper) {
        swiper.slideNext();
      }
    };

    const prevSlide = () => {
      if (swiper) {
        swiper.slidePrev();
      }
    };

    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    });

    return () => {
      document.removeEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
          prevSlide();
        }
      });
    };
  }, []);

  return (
    <>
      <Header />
      <div className={styles.fundo}>
      <h1 className={styles.title}>Sobre nós</h1>
      <div className={styles.container}>
        <Swiper
          spaceBetween={200}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          <div className={styles.carouselContainer}>
            <div className={styles.carouselSlide}>
              {integrantes.map((integrante, index) => (
                <SwiperSlide key={index}>
                  <IntegranteCash {...integrante} />
                </SwiperSlide>
              ))}
            </div>
          </div>
        </Swiper>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default Sobrenos;
