import CreateCharacters from "../components/createCharacters/CreateCharacters"
import styles from"../createCharacters/createCharacters.module.css"
import Header from "../components/header/Header"
import Footer from "../components/footer/Footer"

export default function teste() {
    return (
        <>
        <div className={styles.container}>
            <Header />
            <div className={styles.conteudo}>
            <CreateCharacters />
            </div>
            <Footer />
            </div>
        </>
    )
}