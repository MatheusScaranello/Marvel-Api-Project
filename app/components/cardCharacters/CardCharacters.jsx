"use client"
import { useState } from 'react';
import styles from "./cardCharacters.module.css"
import { useEffect } from 'react';
import { getCharactersRadom } from '@/data/Characters';
import { TailSpin } from 'react-loader-spinner';

const CardCharacters = () => {
    const [apiData] = useState([]);
    const [apiDataRadom, setApiDataRadom] = useState([]);
    const [flag] = useState(false);

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

    return (
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
                                    <p className={styles.desc}>Descrição: {item.description}</p>
                                ) : (
                                    <p className={styles.noDescription}>
                                        Esse personagem não possui descrição
                                    </p>
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
                                                <p className={styles.desc}>Descrição: {item.description}</p>
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
    )
}

export default CardCharacters