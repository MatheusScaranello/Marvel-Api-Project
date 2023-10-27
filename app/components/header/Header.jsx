import teste from '@/app/createCharacters/page'
import styles from './header.module.css'
import NavLink from '@/app/components/navLink/NavLink'


const Header = () => {
    return (
        <div className={styles.header}>
            
            <div className={styles.imagem}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Marvel_Studios_2016_logo.svg/2560px-Marvel_Studios_2016_logo.svg.png" alt="logo" height={50} width={190} />
            </div>
            <div className={styles.link}>
             <li><NavLink texto="Home" rota="/"/></li>
            <li><NavLink texto="Sobre nós" rota="/sobrenos"/></li>
            <li><NavLink texto="Personagens" rota="/createCharacters"/></li>
            <li><NavLink texto="Crie personagens" rota="/createCharacters"/></li> 
            </div>
          
        </div>
    )
    }

export default Header