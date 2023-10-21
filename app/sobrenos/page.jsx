"use client";

import React, { useState } from 'react';
import styles from './sobrenos.module.css';
import IntegranteCash from '../components/integranteCash/IntegranteCash';
import {BsFillCaretLeftFill, BsFillCaretRightFill} from 'react-icons/bs';
import integrantes from '@/data/Integrantes';

const Sobrenos = () => {

  const [IntegranteId, setIntegranteId] = useState(1);

  const nextIntegrant = () => {
    if (IntegranteId < 4) {
      setIntegranteId(IntegranteId + 1);
      return;
    }else {
        setIntegranteId(1);
    }
  };

  const anteriorIntegrant = () => {
    if (IntegranteId > 1) {
      setIntegranteId(IntegranteId - 1);
      return;
    }
    setIntegranteId(4);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Sobre nós</h1>
      <div className={styles.carouselContainer}>
        <div className={styles.carouselSlide}>
            <IntegranteCash {...integrantes[IntegranteId - 1]}/>
            <IntegranteCash {...integrantes[IntegranteId]}/>
            <IntegranteCash {...integrantes[IntegranteId + 1]}/>
        </div>
      </div>
      <div className={styles.controls}>
        <button onClick={anteriorIntegrant}><BsFillCaretLeftFill/></button>
        <button onClick={nextIntegrant}><BsFillCaretRightFill/></button>
      </div>
    </div>
  );
};

export default Sobrenos;
