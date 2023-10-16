import styles from './IntegranteCash.module.css'

function integranteCash(nome, cargo, foto, description){
    return (
        <div className={styles.card}>
            <img className={styles.foto} src={foto} alt={nome} />
            <h2 className={styles.nome}>{nome}</h2>
            <h3 className={styles.cargo}>{cargo}</h3>
            <p className={styles.description}>{description}</p>
        </div>
    )
}

export default integranteCash