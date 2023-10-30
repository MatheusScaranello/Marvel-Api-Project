"use client"
import Image from 'next/image';
import styles from './heroEdit.module.css'
import { getCharacterById } from '@/data/Characters';
import { useEffect, useState } from 'react';
import Footer from '@/app/components/footer/Footer';
import Header from '@/app/components/header/Header';


function HeroEdit({ params }) {

    const [apiData, setApiData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [img, setImg] = useState("");
    const [characterId, setCharacterId] = useState("");
    const [flag, setFlag] = useState(false);


    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const dados = await getCharacterById(params.id)
                setApiData(dados)
            } catch (error) {
                throw error;
            }
        };
        fetchCharacters();
    }, []);

    const handleSearch = async () => {
        try {
            const dados = await getCharacters(searchTerm);
            setApiData(dados);
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
    
    const generateId = () => {
        const maxId = apiData.reduce((max, item) => (item.id > max ? item.id : max), apiData[0].id);
        return maxId + 1;
    };

    const Adicionar = (character) => {
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
        <Header />
            <div className={styles.all}>
            <div className={styles.grid}>
        <div className={styles.inpts}>
              <label htmlFor="search">Procure um personagem</label>
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
        <div>
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
            </div></div></div>
            <h1>Lista de Personagens</h1>
            <ul>
                <div className={styles.lista}>
                    {apiData.map((item) => (
                        <div className={styles.allCards}>
                            <div className={styles.item} key={item.id} >
                                <p className={styles.name}>{item.name}</p>
                                {
                                    item.img ? <img src={item.img} alt={item.name} /> : item.thumbnail ? <img src={item.thumbnail.path + "." + item.thumbnail.extension} alt={item.name} /> : <img src="https://i.pinimg.com/originals/0f/8a/9a/0f8a9a5b5b5b5b5b5b5b5b5b5b5b5b5b.jpg" alt={"imagem não encontrada"} />
                                }
                                <p className={styles.info}>{item.description}</p>

                                <div className={styles.bnts}>
                                <button className={styles.bntRemove} onClick={() => handleRemove(item.id)}>Remover</button>
                                <button className={styles.bntEdit} onClick={() => handleEdit(item.id, item.name, item.description, item.img)}>Editar</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </ul>

        </div>
        <Footer />
        </>
    )
}

export default HeroEdit