"use client"
import { useState } from 'react';
import styles from './searchPage.module.css';
import { useEffect } from 'react';
import { getCharacters, getCharactersRadom } from '@/data/Characters';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import CardCharacters from '../components/cardCharacters/CardCharacters';


function Home() {
  const [apiData, setApiData] = useState([]);
  const [apiDataRadom, setApiDataRadom] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [flag, setFlag] = useState(false);

  const router = useRouter();

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

  const moreInfos = (id) => {
    router.push(`/hero/${id}`)
  }

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

      <div className={styles.grid}>
        {
          flag ? apiData.length > 0 ? apiData ? (
            apiData.map((item) => (
              <div className={styles.card} key={item.id}>
                <div className={styles.front}>
                  <img
                    src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                    alt={item.name}
                    className={styles.img}
                  />
                  <h3 className={styles.name}>{item.name}</h3>
                </div>
                <div className={`${styles.info} ${styles.back}`}>
                  {item.description ? (

                    <div>
                      <p className={styles.desc}>Descrição: {item.description}</p>
                      <button className={styles.btn} onClick={() => moreInfos(item.id)}>Ver mais</button>

                    </div>

                  ) : (
                    <div>
                      <p className={styles.noDescription}>
                      Esse personagem não possui descrição
                    </p>
                    <button className={styles.btn} onClick={() => moreInfos(item.id)}>Ver mais</button> 
                    </div>

                  )}
                </div>
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
          ) : (
            <div className={styles.nothing}>
              <h1 className={styles.nothingText}>
                Nenhum personagem encontrado
              </h1>
            </div>
          ) : (
            apiDataRadom ? (
              apiDataRadom.map((item) => {

                if (item.description && item.thumbnail.path && item.thumbnail.extension && item.name && item.id) {
                  return (
                    <div className={styles.card} key={item.id}>

                      <div className={styles.front}>
                        <img
                          src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                          alt={item.name}
                          className={styles.img}
                        />
                        <h3 className={styles.name}>{item.name}</h3>
                      </div>
                      <div className={`${styles.info} ${styles.back}`}>
                        {item.description ? (

                          <div>
                            <p className={styles.desc}>Descrição: {item.description}</p>
                            <button className={styles.btn} onClick={() => moreInfos(item.id)}>Ver mais</button>
                          </div>

                        ) : (
                          <p className={styles.noDescription}>
                            Esse personagem não possui descrição
                          </p>
                        )}
                      </div>
                    </div>
                  )
                }

              })
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
            )
          )}
      </div>
    </div >
  );
}

export default Home;
