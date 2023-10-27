import styles from "./navLink.module.css"
import Link from "next/link"

const NavLink = ({rota, texto}) => {
    
    return <Link href={rota} className={styles.nav-link}>{texto}</Link>

}

export default NavLink;
