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
                            <img
                                src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
                                alt={item.name}
                                className={styles.img}
                            />

                            <div className={styles.info}>
                            <h1 className={styles.h1}>{item.name}</h1>
                            <p className={styles.desc}>{item.description}</p>
                            </div>

                        </div>
                    ))
                }
                <div className={styles.character}>
                    <h1>{apiDataRadom.name}</h1>
                    <p>{apiDataRadom.description}</p>
                </div>

                <div className={styles.rightImage}>
                </div>

                <div className={styles.all}>

                    <h1 className={styles.h1}>Filmes:</h1>
                <div className={styles.movie}>
                    {
                        apiDataRadom.map((item) => (
                            item.stories.items.map((story) => (
                                <ul key={story.name}>
                                    <li>{story.name}</li>
                                </ul>
                            )
                            )
                            ))
                        }
                </div>

                    <h1 className={styles.h1}>Quadrinhos:</h1>
                <div className={styles.comics}>
                    {
                        apiDataRadom.map((item) => (
                            item.comics.items.map((comic) => (
                                <ul key={comic.name}>
                                    <li>
                                        {comic.name}
                                    </li>
                                </ul>
                            )
                            )
                            ))
                        }                        
                        </div>
                        
                </div>

            </div>
        </>
    )
}

export default Hero