"use client"
import CreateCharacters from "../components/createCharacters/CreateCharacters"
import getCharactersRadom  from "@/data/Characters"
import styles from "../createCharacters/createCharacters.module.css"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"

export default function createCharacters() {

    return (
        <>
            <Header />
            <div className={styles.container}>
                <div className={styles.conteudo}>
                    <CreateCharacters />
                </div>
                
            </div>
            <Footer />
        </>
    )
}