"use client"

import createdCharacters from "@/models/createdCharacters"
import styles from './showCharacters.module.css'
import { useState } from "react"
import {FaTrash, FaPen} from 'react-icons/fa'

const showCharacters = (characters, edit, removeCharacters) => {
    const [lista, setLista] = useState(characters)


    return (
        <div className={styles.container}>
            <h1>Lista de Personagens</h1>
            <div className={styles.lista}>
                {lista.map((item) => (
                    <div className={styles.item}>
                        <div >
                            <img src={item.avatar} alt={item.name} className={styles.img}/>
                        </div>
                        <div className={styles.info}>
                            <h2>{item.name}</h2>
                            <p>{item.descri}</p>
                        </div>
                        <div className={styles.botoes}>
                            <button className={styles.bnt} onClick={() => removeCharacters(item.id)}><FaTrash/></button>
                            <button className={styles.bnt} onClick={() => edit(item.id)}><FaPen/></button>
                        </div>
                    </div>
                    
                ))}
            </div>
        </div>
    )
}

export default showCharacters