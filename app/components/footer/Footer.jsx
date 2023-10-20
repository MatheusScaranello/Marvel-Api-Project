import styles from './footer.module.css'
import NavLink from "../NavLink/NavLink"


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

          <div className={styles.col}>
            <h6>Categorias</h6>
            <ul className={styles.footer}>
              <li>Home</li>
              <li>Sobre nós</li>
            </ul>
          </div>
      
          <div className={styles.col}>
            <h6>Quick Links</h6>
            <ul className={styles.footer}>
              <li><NavLink texto="Home" rota="/"/></li>
              <li><NavLink texto="Sobre nós" rota="/sobrenos"/></li>
              <li><NavLink texto="Personagens" rota="/searchPage"/></li>
              <li><NavLink texto="Crie personagens" rota="/createCharacters"/></li>
              

            </ul>
          </div>
        </div>
       
    
      </div>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.col}>
            <p className={styles.copyright}>Copyright &copy; 2017 All Rights Reserved by 
         <a href="#">Scanfcode</a>.
            </p>
          </div>

          <div className={styles.col}>
            <ul className={styles.social}>
              <li><a className={styles.facebook} href="#"></a></li>
              <li><a className={styles.twitter} href="#"></a></li>
              <li><a className={styles.dribbble} href="#"></a></li>
              <li><a className={styles.linkedin} href="#"></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
</>
)

}

export default Footer;