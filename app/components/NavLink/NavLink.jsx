"use client";
import styles from "./navLink.module.css"
import Link from "next/link"

const NavLink = ({rota, texto}) => {
    return (
        <div className={styles.navLink}>
            <Link href={rota}>
                <a>{texto}</a>
            </Link>
        </div>
    )
}

export default NavLink
