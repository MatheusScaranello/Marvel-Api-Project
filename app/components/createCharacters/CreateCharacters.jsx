"use client";
import { getCharacters } from "@/data/Characters";
import styles from "../createCharacters/createCharacters.module.css";
import { useEffect, useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { RiUserSearchLine } from "react-icons/ri";
import { TailSpin } from "react-loader-spinner";
import { Alert, AlertTitle } from "@mui/material";
import { GoMoveToTop } from "react-icons/go";


const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
});

export default function createCharacters() {
    const [apiData, setApiData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [img, setImg] = useState("");
    const [characterId, setCharacterId] = useState("");
    const [id, setId] = useState(0);
    const [flag, setFlag] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [scrollToCardId, setScrollToCardId] = useState(null);


    function generateId() {
        setId(id + 1);
        return id;
    }

    const topGo = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const [alerData, setAlertData] = useState({
        open: false,
        message: "",
        severity: "success",
    });

    const closeAlert = () => {
        setAlertData({
            ...setAlertData,
            open: false,
        });
    }

    useEffect(() => {
        if (alerData.open) {
            const timeOut = setTimeout(closeAlert, 5000);
            return () => clearTimeout(timeOut);
        }
    }, [alerData.open]);

    const handleSearch = async () => {
        setIsLoading(true);
        try {
            const dados = await getCharacters(searchTerm);
            setApiData(dados);
        } catch (error) {
            console.error(error);
        }
        setIsLoading(false);
    };

    const handleKeyPress = (e) => {
        if (e.key == "Enter") {
            handleSearch();
        }
    };

    const handleEdit = (characterId, name, descri, img) => {

        if (name.trim == "" || description.trim == "" || img == "") {
            setAlertData({
                open: true,
                message: "Preencha todos os campos para editar o personagem",
                severity: "error",
            });
            return;
        }

        setName(name);
        setDescription(descri);
        setImg(img);
        setCharacterId(characterId);
        setFlag(true);

        window.scrollTo(0, 0);
    };

    const handleChange = () => {
        const updatedData = apiData.map((item) => {
            if (item.id == characterId) {
                return { ...item, name, description, img };
            }
            return item;
        });
        setFlag(false);
        setApiData(updatedData);
        setCharacterId(characterId);
        clundFilds();


        setScrollToCardId(characterId);
    };

    useEffect(() => {
        if (scrollToCardId) {
            const cardToScroll = document.getElementById(`card-${scrollToCardId}`);
            if (cardToScroll) {
                cardToScroll.scrollIntoView({ behavior: "smooth" });
            }

            setScrollToCardId(null);
        }
    }, [scrollToCardId]);

    const handleRemove = (id) => {
        const updatedData = apiData.filter((item) => item.id !== id);
        setApiData(updatedData);
    };

    const Adicionar = () => {

        if (name.trim == "" || description.trim == "" || img == "") {
            setAlertData({
                open: true,
                message: "Preencha todos os campos para adicionar o personagem",
                severity: "error",
            });
            return;
        } else {
            setAlertData({
                open: true,
                message: `${name} adicionado com sucesso`,
                severity: "success",
            });
        }

        generateId();
        const newCharacter = { id: id, name, description, img };
        const updatedData = [newCharacter, ...apiData];
        setApiData(updatedData);
        clundFilds();
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
    };

    return (
        <>
        <div className={styles.topGo} onClick={topGo}>
        <GoMoveToTop />
      </div>
            <div className={styles.all}>
                <div className={styles.grid}>
                    <div className={styles.inpts}>
                        <label htmlFor="search">Procure um personagem</label>
                        <div className={styles.inputcontainer}>
                            <div className={styles.inputWithButton}>
                                <input
                                    type="text"
                                    placeholder="Procurar"
                                    className={styles.input}
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                />
                                <button type="button" className={styles.btn} onClick={handleSearch}>
                                    <RiUserSearchLine color="black" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className={styles.containerInputs}>
                            <label htmlFor="name">Nome</label>
                            <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                            <label htmlFor="avatar">Sua foto:</label>
                            <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
                                Upload file
                                <VisuallyHiddenInput type="file" onChange={handleImageChange} />
                            </Button>
                            <label htmlFor="descri">Descrição</label>
                            <textarea className={styles.textarea} id="descri" value={description} onChange={(e) => setDescription(e.target.value)} />
                            <div>
                                {!flag ? (
                                    <button className={styles.bntAdd} onClick={Adicionar}>
                                        Adicionar
                                    </button>
                                ) : (
                                    <button className={styles.bntEdit} onClick={handleChange}>
                                        Salvar
                                    </button>
                                )}
                            </div>
                        </div>
                        {
                            alerData.open && (
                                <Alert severity={alerData.severity} onClose={(closeAlert)}>
                                    <AlertTitle>{alerData.severity}</AlertTitle>
                                    {alerData.message}
                                </Alert>
                            )
                        }
                    </div>
                </div>
                <h1>Lista de Personagens</h1>
                <ul>
                    <div className={styles.lista}>
                        {isLoading ? (
                            <div className={styles.loading}>
                                <TailSpin height="80"
                                    width="80"
                                    color="#861111  "
                                    ariaLabel="tail-spin-loading"
                                    radius="1"
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                    visible={true} />
                            </div>
                        ) : (
                            apiData.map((item) => (
                                <div
                                    id={`card-${item.id}`}
                                    className={styles.allCards}
                                    key={item.id}
                                >
                                    <div className={styles.item} >
                                        <p className={styles.name}>{item.name}</p>
                                        {item.img ? (
                                            <img src={item.img} alt={item.name} />
                                        ) : item.thumbnail ? (
                                            <img src={item.thumbnail.path + "." + item.thumbnail.extension} alt={item.name} />
                                        ) : (
                                            <img src="https://i.pinimg.com/originals/0f/8a/9a/0f8a9a5b5b5b5b5b5b5b5b5b5b5b5b5b.jpg" alt={"imagem não encontrada"} />
                                        )}
                                        <p className={styles.info}>{item.description}</p>
                                        <div className={styles.bnts}>
                                            <button className={styles.bntRemove} onClick={() => handleRemove(item.id)}>
                                                Remover
                                            </button>
                                            <button className={styles.bntEdit} onClick={() => handleEdit(item.id, item.name, item.description, item.img)}>
                                                Editar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
                </ul>
            </div>
        </>
    );
}
