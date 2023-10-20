"use client"
import { useState } from 'react';
import styles from './searchPage.module.css';
import { useEffect } from 'react';
import { getCharacters, getCharactersRadom } from '@/data/Characters';
import CardCharacters from '../components/cardCharacters/CardCharacters';


function Home() {
  const [apiData, setApiData] = useState([]);
  const [apiDataRadom, setApiDataRadom] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [flag, setFlag] = useState(false);

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const dados = await getCharactersRadom()
        console.log(dados)
        setApiDataRadom(dados)
      } catch (error) {
        throw error;
      }
    };
    fetchCharacters();
  }, []);

  const handleSearch = async () => {
    try {
      const dados = await getCharacters(searchTerm);
      setApiData(dados);
      setFlag(true);
    } catch (error) {
      console.error(error);
    }
  };


  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }

  };

  return (
    <div className={styles.container}>
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
        </div>
      </div>

      <CardCharacters apiData={apiData} apiDataRadom={apiDataRadom} flag={flag} />
    </div>
  );
}

export default Home;
