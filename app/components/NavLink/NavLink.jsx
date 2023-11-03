"use client";
import styles from "./navLink.module.css"
import Link from "next/link"

export const NavLink = ({rota, texto}) => {
    return (
            <Link href={rota} className={styles.navLink}>{texto}</Link>
    )
}
