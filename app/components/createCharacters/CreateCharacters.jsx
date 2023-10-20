"use client";

import styles from './createCharacters.module.css'
import { useState } from 'react'
import powers from '@/data/Powers';
import avatarsData from '@/data/Avatars';
import createdCharacters from '@/models/createdCharacters';
import showCharacters from '../showCharacters/showCharacters';

const characters = new createdCharacters()


export default function CreateCharacters() {
    const [name, setName] = useState('')
    const [power, setPower] = useState('')
    const [powerImg, setPowerImg] = useState('')
    const [avatar, setAvatar] = useState('')
    const [id, setId] = useState(0)
    const [idEdit, setIdEdit] = useState(0)
    const [flag, setFlag] = useState(false)

    const generateId = () => {
        setId(id + 1)
        return id
    }

    const addCharacters = () => {
        characters.addCharacter(name, power, avatar, generateId())
        generateId()
        setName('')
        setPower('')
        setAvatar('')
    }

    const removeCharacters = (id) => {
        characters.deleteCharacter(id)
    }

    const editCharacters = (id) => {
        setIdEdit(id)
        const chara = characters.getCharacter(id)
        setName(chara.name)
        setPower(chara.power)
        setAvatar(chara.avatar)

        setFlag(true)
    }

    function atualizarCharacters(id) {
        const chara = characters.getCharacter(id)
        chara.name = name
        chara.power = power
        chara.avatar = avatar

        characters.updateCharacter(chara)
        limparInput()
    }

    const updateCharacters = () => {
        atualizarCharacters(idEdit)
        setFlag(false)
    }

    function limparInput(){
        setName('')
        setPower('')
        setAvatar('')
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
            <div>
                {
                    flag ? <button onClick={updateCharacters} className={styles.buttonUpgrade}>Atualizar</button> : <button onClick={addCharacters} className={styles.addButton}>Adicionar</button>
                }
            </div>
            
        </div>
        <div>
            {showCharacters(characters.characters, editCharacters, removeCharacters)}

      
        </div>
        </>
    )
}