"use client"
import { useState, useEffect } from 'react';
import styles from './searchPage.module.css';
import { getCharacters, getCharactersRadom } from '@/data/Characters';
import { useRouter } from 'next/navigation';
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

function Home() {
  const [apiData, setApiData] = useState([]);
  const [apiDataRadom, setApiDataRadom] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [flag, setFlag] = useState(false);
  const [numCharacters, setNumCharacters] = useState(100);
  

  const router = useRouter();

  useEffect(() => {
    const fetchCharactersRandom = async () => {
      try {
        const dados = await getCharactersRadom();
        setApiDataRadom(dados);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCharactersRandom();
  }, []);

  

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

  const moreInfos = (id) => {
    router.push(`/hero/${id}`);
  };

  const loadMoreCharacters = () => {
    if (numCharacters < (flag ? apiData.length : apiDataRadom.length)) {
      setNumCharacters(numCharacters + 100);
    }
  };


  return (
    <div>
      <Header />
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

        <div className={styles.grid}>
          <div className={styles.allCards}>
          {(flag ? apiData : apiDataRadom).slice(0, numCharacters).map((item) => (
            <div className={styles.card} key={item.id}>
              <div className={styles.front}>

                {
                  item.thumbnail.path === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" ? 
                  <img src="/interro.png"
                  alt={item.name}
                  className={styles.img}
                  /> : <img
                  src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                  alt={item.name}
                  className={styles.img}
                />
                }
                <h3 className={styles.name}>{item.name}</h3>
              </div>
              <div className={`${styles.info} ${styles.back}`}>
                {item.description ? (
                  <div className={styles.infos}>
                    <p className={styles.desc}>Descrição: {item.description}</p>
                    <button className={styles.btn} onClick={() => moreInfos(item.id)}>Ver mais</button>
                  </div>
                ) : (
                  <div className={styles.infos}>
                    <p className={styles.noDescription}>
                      Esse personagem não possui descrição
                    </p>
                    <button className={styles.btn} onClick={() => moreInfos(item.id)}>Ver mais</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        {numCharacters < (flag ? apiData.length : apiDataRadom.length) && (
          <button className={styles.btn} onClick={loadMoreCharacters}>
            Ver mais personagens
          </button>
        )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;