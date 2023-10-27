"use client";
import CreateCharacters from "../components/createCharacters/CreateCharacters";
import ShowCharacters from "../components/showCharacters/showCharacters";
import { useState } from "react";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import styles from "./createCharacters.module.css";

const page = () => {
  const [flag, setFlag] = useState(false);
  const [pag, setPag] = useState("Crie seu personagem");

  const handleFlag = () => {
    if (flag) {
      setFlag(false);
      setPag("Crie seu personagem");
    }else{
      setFlag(true);
      setPag("Personagens");
    }
  };

  return(
    <div className={styles.container}>
      <Header />
      <div className={styles.containerButton}>
        <button onClick={handleFlag}>{pag}</button>
      </div>
      {flag ? <CreateCharacters /> : <ShowCharacters />}
      <Footer />
    </div>
  )

};

export default page;