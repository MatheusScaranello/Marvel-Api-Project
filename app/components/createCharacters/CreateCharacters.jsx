"use client"
import { getCharacters } from "@/data/Characters"
import styles from "../createCharacters/createCharacters.module.css"
import { useState } from "react"

export default function createCharacters() {
    const [apiData, setApiData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [img, setImg] = useState("");
    const [characterId, setCharacterId] = useState("");
    const [newCharacter, setNewCharacter] = useState("");
    const [id, setId] = useState(0);
    const [flag, setFlag] = useState(false);

    function generateId() {
        setId(id + 1)
        return id
    }

    const handleSearch = async () => {
        try {
            const dados = await getCharacters(searchTerm);
            setApiData(dados);
            setFlag(true);
            setNumCharacters(10);
        } catch (error) {
            console.error(error);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key == "Enter") {
            handleSearch();
        }
    };

    const handleEdit = (characterId, name, descri, img) => {
        setName(name);
        setDescription(descri);
        setImg(img);
        setCharacterId(characterId);
        setFlag(true);
    };

    const handleChange = () => {
        const updatedData = apiData.map((item) => {
            if (item.id == characterId) {
                return { ...item, name, description, img };
            }
            return item;
        });
        setFlag(false)
        setApiData(updatedData);
        setCharacterId(characterId);
        clundFilds()
    };

    const handleRemove = (id) => {
        const updatedData = apiData.filter((item) => item.id !== id);
        setApiData(updatedData);
    };

    const Adicionar = () => {
        generateId()
        const newCharacter = { id: id, name, description, img };
        const updatedData = [newCharacter, ...apiData];
        setApiData(updatedData);
        clundFilds()
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setImg(URL.createObjectURL(file));
    };

    const clundFilds = () => {
        setName("");
        setCharacterId("");
        setImg("");
        setDescription("");
    }


    return (
        <>
        <div className={styles.inpts}>
                <div className={styles.inputcontainer}>
                    <input
                        type="text"
                        placeholder="Procurar"
                        className={styles.input}
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onKeyPress={handleKeyPress}
                    />
                    <button type="button" className={styles.btn} onClick={handleSearch}>  Procurar 🔎 </button>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        <div className="App">
            <div className={styles.containerInputs}>
                <label htmlFor="name">Nome</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                <label htmlFor="avatar">Sua foto:</label>
                <input type="file" id="avatar" onChange={handleImageChange} />
                <label htmlFor="descri">Descrição</label>
                <textarea id="descri" value={description} onChange={(e) => setDescription(e.target.value)} />
                <div>
                    {!flag ? <button className={styles.bntAdd} onClick={Adicionar}>Adicionar</button> : <button className={styles.bntEdit} onClick={handleChange}>Salvar</button>}
                </div>
            </div>
            <h1>Lista de Personagens</h1>
            <ul>
                <div className={styles.lista}>
                    {apiData.map((item) => (
                        <div className={styles.allCards}>
                            <div className={styles.item} key={item.id} >
                                <p className={styles.name}>{item.name}</p>
                                {
                                    item.img ? <img src={item.img} className={styles.img} alt={item.name} /> : <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} className={styles.img} alt={item.name} />
                                }
                                <p className={styles.info}>{item.description}</p>


                                <button className={styles.bnt} onClick={() => handleRemove(item.id)}>Remover</button>
                                <button className={styles.bnt} onClick={() => handleEdit(item.id, item.name, item.description, item.img)}>Editar</button>

                            </div>
                        </div>
                    ))}
                </div>
            </ul>

        </div>
        </>
    );
}