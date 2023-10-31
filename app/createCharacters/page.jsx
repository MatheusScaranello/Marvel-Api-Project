
"use client";
import CreateCharacters from "../components/createCharacters/CreateCharacters";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import styles from "./createCharacters.module.css";


const page = () => {

  return(
    <div className={styles.container}>
      <Header />
      <CreateCharacters />
      <Footer />
    </div>
  )

};

export default page;

