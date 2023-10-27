import ShowCharacters from "../components/showCharacters/showCharacters";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import styles from "./searchPage.module.css";

const page = () => {
    return (
        <div className={styles.container}>
        <Header />
        <ShowCharacters />
        <Footer />
        </div>
    );
    };

export default page;