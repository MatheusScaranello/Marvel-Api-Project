"use client"
import Image from 'next/image';
import styles from './route.module.css';
import { getCharacterById } from '@/data/Characters';
import { useEffect, useState } from 'react';


function Hero({ params }) {

    const [apiDataRadom, setApiDataRadom] = useState([]);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const dados = await getCharacterById(params.id)
                console.log(dados)
                setApiDataRadom(dados)
            } catch (error) {
                throw error;
            }
        };
        fetchCharacters();
    }, []);

    return (
        <>
            <div className={styles.cont}>
                {
                    apiDataRadom.map((item) => (
                        <div key={item.id}>

                            <div className={styles.info}>
                                <h1 className={styles.h1n}>{item.name}</h1>
                            </div>
                            <div className={styles.perso}>


{
    item.thumbnail.path === "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available" ? 
    <img src="/interro.png" 
    alt={item.name} 
    className={styles.img} 
    width={300} 
    height={300} /> :<img src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                        alt={item.name}
                        className={styles.img}
                        width={300}
                        height={300}
/>
}

                {
                    item.description === "" ? <p className={styles.desc}>Descrição: Não há descrição para este personagem</p> : <p className={styles.desc}>Descrição: {item.description}</p>
                }
                            </div>
                            <div className={styles.line}></div>
                        </div>
                    ))
                }
            </div>
            <div className={styles.all}>

                <h1 className={styles.h1}>Aparições em Historias:</h1>
                <div className={styles.movie}>
                    {
                        apiDataRadom.map((item) => (
                            item.stories.items.map((story) => (
                                <ul key={story.name}>
                                    {
                                        story.name === "" ? <li>O personagem não tem aparição em nenhuma historia.</li> : <li>{story.name}</li>
                                    }
                                </ul>
                            )
                            )
                        ))
                    }
                </div>
                <div className={styles.line}></div>

                <h1 className={styles.h1}>Aparições em Quadrinhos:</h1>
                <div className={styles.comics}>
                    {
                        apiDataRadom.map((item) => (
                            item.comics.items.map((comic) => (
                                <ul key={comic.name}>
                                    {
                                        comic.name === "" ? <li>O personagem não tem aparição em nenhum quadrinho.</li> : <li>{comic.name}</li>
                                    }
                                </ul>
                            )
                            )
                        ))
                    }
                </div>

                 {/* copilot fez a boa nesse onclick 🔥 */}
                <button className={styles.btn} onClick={() => window.history.back()}>Voltar</button>

            </div>

            
            

        </>
    )
}

export default Hero