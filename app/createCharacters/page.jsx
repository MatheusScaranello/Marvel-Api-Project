"use client"
import { getCharacters } from "@/data/Characters"
import { editCharacter } from "@/data/Characters"
import styles from "../createCharacters/createCharacters.module.css"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"
import { useState } from "react"


export default function createCharacters() {
  const [apiData, setApiData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [name, setName] = useState("");
  const [characterId, setCharacterId] = useState("");
  const [newCharacter, setNewCharacter] = useState("");
  const [id, setId] = useState(0);

  function generateId() {
    setId(id + 1)
    return id
  }

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
  };

  const Adicionar = () => {
    generateId()
    const newCharacter = { id: id, name };
    const updatedData = [ newCharacter, ...apiData];
    setApiData(updatedData);
    setName("");
    setCharacterId("");
  };




  return (

    <div className="App">
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
          <button type="button" className={styles.btn} onClick={handleSearch}>
            Procurar 🔎
          </button>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="button" onClick={Adicionar}>
            Adicionar
          </button>

        </div>
      </div>
      <h1>Lista de Personagens</h1>
      <ul>
        {apiData.map((character) => (
          <li key={character.id}>
            {character.name}
            <button
              onClick={() => handleNameChange(character.id, name)} > salvar </button>
            <button
              onClick={() => handleRemove(character.id)} > remover </button>
          </li>
        ))}
      </ul>

    </div>
  );
}