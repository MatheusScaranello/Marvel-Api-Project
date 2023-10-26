"use client"
import { getCharacters } from "@/data/Characters"
import { editCharacter } from "@/data/Characters"
import styles from "../createCharacters/createCharacters.module.css"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import { useState } from "react"
import Button from "../components/buttons/Button"


export default function createCharacters() {
  const [apiData, setApiData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [name, setName] = useState("");
  const [characterId, setCharacterId] = useState("");

  const handleSearch = async () => {
    try {
      const dados = await getCharacters(searchTerm);
      setApiData(dados);
      setFlag(true);
      setNumCharacters(10);
    } catch (error) {
      console.error(error);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleNameChange = (characterId, name) => {
    const updatedData = apiData.map((item) => {
      if (item.id === characterId) {
        return { ...item, name };
      }
      return item;
    });
    setApiData(updatedData);
    setName(name);
    setCharacterId(characterId);
  };

  const handleRemove = (id) => {
    const updatedData = apiData.filter((item) => item.id !== id);
    setApiData(updatedData);
  }




  return (
    <div className="App">
      <Header />
      <div className={styles.inpts}>
        <div className={styles.inputcontainer}>
          <input
            type="text"
            placeholder="Procurar"
            className={styles.input}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
          />

          <Button onClick={handleSearch} text={"Procurar🔎"} />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
      <h1>Lista de Personagens</h1>
      <ul>
        {apiData.map((character) => (
          <li key={character.id}>
            {character.name}
            <Button onClick={() => handleNameChange(character.id, name)} text={"Editar"} />
            <Button onClick={() => handleRemove(character.id)} text={"Remover"} />
          </li>
        ))}
      </ul>
      <Footer />
    </div>
  );
}