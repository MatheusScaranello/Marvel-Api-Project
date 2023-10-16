import styles from './header.module.css'

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.marvel}><p className={styles.marvelTitle}>MARVEL</p></div>
            <div className={styles.studios}><p className={styles.studiosTitle}>Studios</p></div>
        </div>
    )
    }

export default Header