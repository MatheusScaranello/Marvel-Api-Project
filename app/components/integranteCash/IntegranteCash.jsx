import styles from "./integranteCash.module.css";

function integranteCash({ nome, cargo, foto, description, insta }) {
  return (
    <div className={styles.card}>
      <a href={insta} target="_blank">
        <div className={styles.card_image}>
          <img className={styles.foto} src={foto} alt={nome} />
        </div>
        <div className={styles.card_content}>
          <h2 className={styles.card_title}>{nome}</h2>
          <h3 className={styles.card_name}>{cargo}</h3>
          <p className={styles.card_text}>{description}</p>
        </div>
      </a>
    </div>
  );
}

export default integranteCash;
