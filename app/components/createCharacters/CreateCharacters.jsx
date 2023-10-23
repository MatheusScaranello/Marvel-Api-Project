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

      
        const handleImageChange = (event) => {
          const file = event.target.files[0];
          setAvatar(URL.createObjectURL(file));
        };

    return (
        <>
        <div className={styles.main}>
        <div className={styles.container}>
            <h1 className={styles.title}>Crie seu Herói</h1>
            <div className={styles.inputContainer}>
                <label htmlFor="name">Nome</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                <label htmlFor="avatar">Sua foto:</label>
                <input type="file" id="avatar" onChange={handleImageChange} />
                <label htmlFor="descri">Descrição</label>
                <textarea id="descri" value={descri} onChange={(e) => setDescri(e.target.value)} />
            </div>
            <div>
                {
                    flag ? <button onClick={updateCharacters} className={styles.buttonUpgrade}>Atualizar</button> : <button onClick={addCharacters} className={styles.addButton}>Adicionar</button>
                }
            </div>
            
        </div>
        <div className={styles.showCharacters}>
            {showCharacters(characters.characters, editCharacters)}

      
        </div>
        </div>
        </>
    )
}