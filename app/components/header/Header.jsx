"use client";
import React from "react";
import styles from "./header.module.css";
import NavLink from "../navLink/NavLink";
import { useCollapse } from "react-collapsed";
import { AiOutlineMenu } from "react-icons/ai";
import { ImHome3 } from "react-icons/im";
import { IoMdPeople } from "react-icons/io";
import { GiSpiderMask } from "react-icons/gi";
import { MdCreateNewFolder } from "react-icons/md";

const Header = () => {
    const { getCollapseProps, getToggleProps, isExpanded } = useCollapse();

    return (
        <>
            <div className={styles.header}>
                <div className={styles.collapsible} {...getToggleProps()}>
                    <AiOutlineMenu />
                </div>
                <div className={styles.imagem}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Marvel_Studios_2016_logo.svg/2560px-Marvel_Studios_2016_logo.svg.png"
                        alt="logo"
                        height={50}
                        width={190}
                    />
                </div>
                <div {...getCollapseProps()} className={styles.menuContent}>
                    <div className={styles.gradientBackground} />
                    <div className={styles.content}>
                        <div className={styles.DHome}>
                            <li>
                                <NavLink texto={<ImHome3 />} rota="/" />
                            </li>
                            <p className={styles.pzin}>
                                <NavLink texto={"Home"} rota={"/"} />
                            </p>
                        </div>
                        <div className={styles.DAbout}>
                            <li>
                                <NavLink texto={<IoMdPeople />} rota="/sobrenos" />
                            </li>
                            <p className={styles.pzin}>
                                <NavLink texto={"Sobre Nós"} rota={"/sobrenos"} />
                            </p>
                        </div>
                        <div className={styles.DCharacter}>
                            <li>
                                <NavLink texto={<GiSpiderMask />} rota="/searchPage" />
                            </li>
                            <p className={styles.pzin}>
                                <NavLink texto={"Personagens"} rota={"/searchPage"} />
                            </p>
                        </div>
                        <div className={styles.DCreate}>
                            <li>
                                <NavLink texto={<MdCreateNewFolder />} rota="/createCharacters" />
                            </li>
                            <p className={styles.pzin}>
                                <NavLink texto={"Criar Personagem"} rota={"/createCharacters"} />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
