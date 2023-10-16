"use client";

import styles from './createCharacters.module.css'
import { useState } from 'react'
import powers from '@/data/Powers';
import avatarsData from '@/data/Avatars';
import characters from '@/models/Characters';


export default function CreateCharacters() {
    const [name, setName] = useState('')
    const [power, setPower] = useState('')
    const [avatar, setAvatar] = useState('')
    const [characters, setCharacters] = useState([])
    const [id, setId] = useState(0)

    const generateId = () => {
        setId(id + 1)
        return id
    }

    const addCharacters = () => {
        generateId()
        setCharacters([...characters, {id, name, power, avatar}])
        setName('')
        setPower('')
        setAvatar('')
    }

    const removeCharacters = (id) => {
        setCharacters(characters.filter((character) => character.id !== id))
    }

    return (
        <>
        <div className={styles.container}>
            <h1 className={styles.title}>Create Characters</h1>
            <form>
                <label className={styles.labels}>
                    Name:
                    <input type="text" value={name} onChange={e => setName(e.target.value)} className={styles.inputs}/>
                </label>
                <div className={styles.divAvatar}>
                <label className={styles.labelAvatar}>Avatar:</label>
                <div>
                    
                    {
                        avatarsData.map((avatar) => {
                            return(
                                <label className={styles.avatarLabel}>
                                    <input type="radio" name="avatar" value={avatar.link} onChange={e => setAvatar(e.target.value)} className={styles.avatarInput}/>
                                    <img src={avatar.link} alt={avatar.name} className={styles.avatarImage}/>
                                </label>
                            )
                        })
                    }</div>
                </div>
                <label className={styles.labels} >Poder:
                <select name="power" id="power" value={power} onChange={e => setPower(e.target.value)} className={styles.inputs}>
                    {
                        powers.map((power) => (
                            <option key={power.id} value={power.name}>{power.name}</option>
                        ))
                    }
                </select></label>
            </form>
            <button onClick={addCharacters} className={styles.addButton}>Adicione seu Personagem</button>
        </div>
        <div className={styles.charactersList}>
            {
                characters.map((character) => {
                    return(
                        <div className={styles.character}>
                            <p className={styles.characterName}>{character.name}</p>
                            <img src={character.avatar} alt={character.name} className={styles.characterAvatar}/>
                            <p className={styles.powerTitle}>Poder:</p>
                            {
                                powers.map((power) => {
                                    if (power.name === character.power) {
                                        return(
                                            <>
                                            <p className={styles.powerName}>{power.name}</p>
                                            <img src={power.link} alt={power.name} className={styles.imagesPower}/>
                                            </>
                                            )
                                    }
                                })
                            }
                            <button onClick={() => removeCharacters(character.id)} className={styles.removeButton}>Remover</button>
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}