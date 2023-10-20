"use client"

import createdCharacters from "@/models/createdCharacters"
import styles from './showCharacters.module.css'

const characters = new createdCharacters()

const showCharacters = () => {
    return (
        <div className={styles.container}>
            <h1>Personagens criados</h1>
            <div className={styles.containerCharacters}>
                {characters.getCharacters().map((character) => {
                    return (
                        <div className={styles.character} key={character.id}>
                            <img src={character.avatar} alt={character.name} />
                            <div className={styles.info}>
                                <h2>{character.name}</h2>
                                <p>{character.power}</p>
                            </div>
                            <div className={styles.buttons}>
                                <button onClick={() => characters.deleteCharacter(character.id)}>Excluir</button>
                                <button onClick={() => characters.editCharacter(character.id)}>Editar</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default showCharacters