"use client"
import { useState, useEffect } from 'react';
import styles from './showCharacters.module.css';
import { getCharacters, getCharactersRadom } from '@/data/Characters';
import { useRouter } from 'next/navigation';
import { BsFillPencilFill } from 'react-icons/bs';
import { GoMoveToTop } from 'react-icons/go';
import { TailSpin } from "react-loader-spinner";

function Home(creaters) {
  const [apiData, setApiData] = useState([]);
  const [apiDataRadom, setApiDataRadom] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [flag, setFlag] = useState(false);
  const [numCharacters, setNumCharacters] = useState(100);
  const [isLoading, setIsLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    const fetchCharactersRandom = async () => {
      try {
        const dados = await getCharactersRadom();
        setApiDataRadom(dados, creaters);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
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
    router.push(`hero/${id}`);
  };

  const editHero = (id) => {
    router.push(`heroEdit/${id}`);
  };

  const loadMoreCharacters = () => {
    if (numCharacters < (flag ? apiData.length : apiDataRadom.length)) {
      setNumCharacters(numCharacters + 100);
    }
  };

  const topGo = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div className={styles.topGo} onClick={topGo}>
        <GoMoveToTop />
      </div>
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
            {isLoading ? (
              <div className={styles.loading}>
                <TailSpin height="80"
                  width="80"
                  color="#861111  "
                  ariaLabel="tail-spin-loading"
                  radius="1"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true} />
              </div>
            ) : (
              (flag ? apiData : apiDataRadom).slice(0, numCharacters).map((item) => (
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
                    <div className={styles.edit} onClick={() => editHero(item.id)} >
                      <BsFillPencilFill />
                    </div>
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
              ))
            )}
          </div>
          {numCharacters < (flag ? apiData.length : apiDataRadom.length) && (
            <button className={styles.btn2} onClick={loadMoreCharacters}>
              Ver mais personagens
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
