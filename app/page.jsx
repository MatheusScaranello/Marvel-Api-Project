"use client"
import { useState, useEffect } from 'react';
import { TailSpin } from 'react-loader-spinner';
import styles from './page.module.css';
import { getCharacters } from '@/data/Characters';

function Home() {
  const [apiData, setApiData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const dados = await getCharacters(searchTerm);
        setApiData(dados);
      } catch (error) {
        throw error;
      }
    };
    fetchCharacters();
  }, [searchTerm]);

  const handleSearch = () => {
    fetch();
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
          />
          <button type="button" className={styles.btn} onClick={handleSearch}>
            Submit
          </button>
        </div>
      </div>

      <div className={styles.grid}>
        {apiData ? (
          apiData.map((item) => (
            <div
              className={styles.card}
              key={item.id}
              onClick={() => navigate(`/${item.id}`)}
            >
              <img
                src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                alt={item.name}
                className={styles.img}
              />
              <h3 className={styles.name}>{item.name}</h3>
            </div>
          ))
        ) : (
          <div className={styles.spinner}>
            <TailSpin
              height="80"
              width="80"
              color="#ffffff"
              ariaLabel="tail-spin-loading"
              radius="1"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
