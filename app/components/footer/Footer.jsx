import styles from './footer.module.css'
import NavLink from "../NavLink/NavLink"
import {BsGithub} from "react-icons/bs"
import {SiInstagram, SiLinktree} from "react-icons/si"
import {BsLinkedin} from "react-icons/bs"


const Footer = () =>{
return(
    <>
    <footer className={styles.site }>
        <div className={styles.row}>
            <div className={styles.home}>
          <div className={styles.col}>
            <h6>Sobre</h6>
            <p class="text-justify">O Marvel Character Hub é o seu portal para explorar o vasto universo de personagens da Marvel. Neste site, você pode mergulhar nas histórias e aventuras de seus heróis e vilões favoritos, além de criar seu próprio personagem e imaginar novas histórias no universo Marvel.</p>
          </div>
      <br />
          <div className={styles.col}>
            <h6>Categorias</h6>
            <ul className={styles.footer}>
              <li><NavLink texto="Home" rota="/"/></li>
              <li><NavLink texto="Sobre nós" rota="/sobrenos"/></li>
              <li><NavLink texto="Personagens" rota="/searchPage"/></li>
              <li><NavLink texto="Crie personagens" rota="/createCharacters"/></li>
              

            </ul>
          </div>
        </div>
        <br />
       
    
      </div>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            <p className={styles.copyright}>Copyright &copy; 2023 All Rights Reserved by 
         <a href="./sobrenos">6Devs</a>.
            </p>
          </div>

          <div className={styles.col}>
            <ul className={styles.social}>
              <li><a className={styles.facebook} target="_black" href="https://linktr.ee/6d3vs73"><SiLinktree/></a></li>
              <li><a className={styles.twitter} target="_blank" href="https://www.instagram.com/matheus_sca07/"><SiInstagram/></a></li>
              <li><a className={styles.dribbble} target="_blank" href="https://github.com/MatheusScaranello"><BsGithub/></a></li>
              <li><a className={styles.linkedin} target="_blank" href="https://br.linkedin.com/in/matheus-menezes-scaranello-180433261"><BsLinkedin></BsLinkedin></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
</>
)

}

export default Footer;