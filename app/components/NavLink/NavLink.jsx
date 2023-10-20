import styles from "./navlnk.module.css"

import Link from "next/link"

const NavLink = ({rota, texto}) => {
    return(
        <div>
            <Link className={styles.textLinks} href={rota}>{texto}</Link>
        </div>
    )
}

export default NavLink