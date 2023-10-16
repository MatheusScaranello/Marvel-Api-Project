"use client"
import styles from './page.module.css'
import { useState, useEffect } from 'react'
import fetchApi, { getCharacters } from '@/data/Characters'
import { TailSpin} from 'react-loader-spinner'

function Home() {
  const [apiData, setApiData] = useState("")

  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const dados = await getCharacters()
        console.log(dados)
        setApiData(dados)
      } catch (error) {
        throw error;
      }
    };
    fetchCharacters();
  }, []);

  return (
    <div className={styles.container}>

      <div className={styles.inpts}>
        <div className={styles.inputcontainer}>

      <input type="text" placeholder="Procurar" className={styles.input}/>
      <button type="button" className={styles.btn}>Submit</button>
        </div>
      </div>

    <div className={styles.grid}>
      {
        apiData ? apiData.map((item) => (
          <div className={styles.card} key={item.id}>
            <h3 className={styles.name}>{item.name}</h3>
            <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt={item.name} className={styles.img}/>
            <p>{item.description}</p>
          </div>
        )) : <TailSpin color="#000" height={80} width={80} />
      }

    </div>

    </div>
  )  
}

export default Home
