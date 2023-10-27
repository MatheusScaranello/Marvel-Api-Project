"use client"
import CreateCharacters from "../components/createCharacters/CreateCharacters";
import ShowCharacters from "../components/showCharacters/ShowCharacters";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { useState } from "react";

export default function page() {
  const [currentPage, setCurrentPage] = useState('personagens');

  const handleChangePage = (page) => {
    setCurrentPage(page);
  };

  return(
    <div>
      <Header changePage={handleChangePage}/>
      {currentPage === 'personagens' && <ShowCharacters handleChangePage={handleChangePage}/>}
      {currentPage === "Criar" && <CreateCharacters handleChangePage={handleChangePage}/>}
      <Footer/>
    </div>
  )
}