import styles from "./page.module.css"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import NavLink from "./components/NavLink/NavLink"

const home = () => {
  return (
    <>
      <Header />
      <div className={styles.fundo}>
        <div className={styles.container}>
          <div className={styles.introducao}>
            <h1 className={`${styles.bemVindo} ${styles.fade}`}>Bem Vindo</h1>
            <img className={styles.img} src="https://i.imgur.com/XHtUMGd.png" alt="Marvel" />
          </div>
          <div className={styles.marvel}>
            <p className={styles.text}>A Marvel Comics, ou simplesmente Marvel, é uma das principais editoras de histórias em quadrinhos do mundo. Fundada em 1939 como Timely Publications e posteriormente conhecida como Atlas Comics, a empresa se tornou Marvel Comics na década de 1960. Sob a liderança de figuras icônicas como Stan Lee, Jack Kirby e Steve Ditko, a Marvel revolucionou a indústria de quadrinhos com a criação de personagens memoráveis, como o Homem-Aranha, X-Men, Quarteto Fantástico, Hulk, Thor, Homem de Ferro e os Vingadores.</p>
          </div>
          <div>
            <h2 className={`${styles.incons2} ${styles.fade}`}>CONHEÇA NOSSO SITE</h2>
          </div>
          <div className={styles.icons}>
            <img id={styles.img1} src="https://marvelmission.com/assets/front/images/homepage/ICONO-INTRO_04.png" alt="Marvel" />
            <div>
              <img src="https://marvelmission.com/assets/front/images/homepage/ICONO-INTRO_01.png" alt="Marvel" />
            </div>
            <div>
              <img id={styles.img3} src="https://marvelmission.com/assets/front/images/homepage/ICONO-INTRO_02.png" alt="Marvel" />
            </div>
          </div>
          <section className={styles.features}>
            <div className={styles.feature}>
              <h2>Conheça nossa equipe</h2>

              <NavLink texto={"Veja Mais"} rota="/sobrenos" />
            </div>
            <div className={styles.feature}>
              <h2>Procure por um Personagem</h2>
              <NavLink texto={"Veja Mais"} rota="/searchPage" />
            </div>
            <div className={styles.feature}>
              <h2>Crie seus Personagens</h2>
              <NavLink texto={"Veja Mais"} rota="/createCharacters" />
            </div>

          </section>
        </div>
      </div>
      <div className={styles.container2}>
      </div>
      <Footer />
    </>
  )
}

export default home
