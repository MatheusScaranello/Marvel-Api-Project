"use client"

import createdCharacters from "@/models/createdCharacters"
import styles from './showCharacters.module.css'
import { useState } from "react"

const showCharacters = (characters) => {
    const [lista, setLista] = useState(characters)

    return (
        <div className={styles.container}>
            <h1>Personagens</h1>
            <div className={styles.lista}>
                {lista.map((item) => (
                    <div className={styles.item}>
                        <div className={styles.avatar}>
                            <img src={item.avatar} alt={item.name} />
                        </div>
                        <div className={styles.info}>
                            <h2>{item.name}</h2>
                            <p>{item.power}</p>
                        </div>
                        <div className={styles.botoes}>
                            <button onClick={() => removeCharacters(item.id)}>Remover</button>
                            <button onClick={() => editCharacters(item.id)}>Editar</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default showCharacters