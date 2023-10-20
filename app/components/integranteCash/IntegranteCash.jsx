import styles from './IntegranteCash.module.css'

const IntegranteCash = (nome, cargo , foto, description) => {
    return (
        <div className={styles.card}>
        <h3 className={styles.name}>{nome}</h3>
        <h4 className={styles.cargo}>{cargo}</h4>
        <img
            src={foto}
            alt={nome}
            className={styles.img}
        />
        <p className={styles.desc}>{description}</p>
        </div>
    )
    }

    export default IntegranteCash