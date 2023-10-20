"use client";

import styles from './createCharacters.module.css'
import { useState } from 'react'
import createdCharacters from '@/models/createdCharacters';
import showCharacters from '../showCharacters/showCharacters';

const characters = new createdCharacters()


export default function CreateCharacters() {
    const [name, setName] = useState('')
    const [descri, setDescri] = useState('')
    const [avatar, setAvatar] = useState('')
    const [id, setId] = useState(0)
    const [idEdit, setIdEdit] = useState(0)
    const [flag, setFlag] = useState(false)

    const generateId = () => {
        setId(id + 1)
        return id
    }

    const addCharacters = () => {
        characters.addCharacter(name, descri, avatar, generateId())
        generateId()
        setName('')
        setDescri('')
        setAvatar('')
    }

    const removeCharacters = (id) => {
        characters.deleteCharacter(id)
    }

    const editCharacters = (id) => {
        setIdEdit(id)
        const chara = characters.getCharacter(id)
        setName(chara.name)
        setDescri(chara.descri)
        setAvatar(chara.avatar)

        setFlag(true)
    }

    function atualizarCharacters(id) {
        const chara = characters.getCharacter(id)
        chara.name = name
        chara.descri = descri
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
        setDescri('')
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
                <label className={styles.labelAvatar}>Sua foto:</label>
                <div>
                    <input type="file" className={styles.avatar} value={avatar} onChange={e => setAvatar(e.target.value)} />
                    </div>
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