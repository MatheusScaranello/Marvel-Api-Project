import styles from "./integranteCash.module.css";

function integranteCash({ nome, cargo, foto, description, insta }) {
  return (
    <div className={styles.card}>
      <a href={insta} target="_blank">
        <img className={styles.foto} src={foto} alt={nome} />
        <h2 className={styles.nome}>{nome}</h2>
        <h3 className={styles.cargo}>{cargo}</h3>
        <p className={styles.description}>{description}</p>
      </a>
    </div>
  );
}

export default integranteCash;
