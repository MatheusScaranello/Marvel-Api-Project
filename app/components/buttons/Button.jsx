import styles from "./button.module.css"

const Button = ({ onClick, text }) => {
    return (
        <button className={styles.btn} onClick={onClick}>
            {text}
        </button>
    );
}

export default Button;