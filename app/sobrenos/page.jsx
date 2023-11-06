"use client"
import React, { useRef, useEffect, useState } from 'react';
import styles from './sobrenos.module.css';
import IntegranteCash from '../components/integranteCash/IntegranteCash';
import integrantes from '@/data/Integrantes';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {BsFillCaretRightFill, BsFillCaretLeftFill} from 'react-icons/bs';

const Sobrenos = () => {
  const swiperRef = useRef(null);
  const [slideAtual, setSlideAtual] = useState(0);

  useEffect(() => {
    const swiper = swiperRef.current;

    const nextSlide = () => {
      if (swiper) {
        swiper.slideNext();
        setSlideAtual(slideAtual + 1);
        if (slideAtual > 4) {
          setSlideAtual(0);
        }
      }
    };

    const prevSlide = () => {
      if (swiper) {
        swiper.slidePrev();
        setSlideAtual(slideAtual - 1);
        if (slideAtual < 0) {
          setSlideAtual(4);
        }
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

  const proximoSlide = () => {
    setSlideAtual(slideAtual + 1);
    if (slideAtual > 4) {
      setSlideAtual(0);
    }
  };

  const anteriorSlide = () => {
    setSlideAtual(slideAtual - 1);
    if (slideAtual < 0) {
      setSlideAtual(4);
    }
  };

  return (
    <>
      <Header />
      <div className={styles.fundo1}>
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
         <div className={styles.container2}>
          <Swiper
        spaceBetween={200}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
         <div className={styles.carouselContainer}>
        <div className={styles.carouselSlide}>
          <SwiperSlide>
            <IntegranteCash {...integrantes[slideAtual]}/>
          </SwiperSlide>
        </div>
      </div>
      </Swiper>
      <div className={styles.controls}>
        <button className={styles.button} onClick={anteriorSlide}><BsFillCaretLeftFill/></button>
        <button className={styles.button} onClick={proximoSlide}><BsFillCaretRightFill/></button>
      </div>
          </div>
          </div>
      <Footer />
    </>
  );
};

export default Sobrenos;
