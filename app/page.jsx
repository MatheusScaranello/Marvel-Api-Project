
import styles from "./page.module.css"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import NavLink from "./components/NavLink/NavLink"
import Carossel from "./components/carrossel/Carrossel"


const home = () => {
  return (<>
    <Header />

    <div className={styles.container}>
      <div className={styles.introducao}>
        <h1 className={`${styles.bemVindo} ${styles.fade}`}>Seja bem vindo!</h1>
        <p className={styles.text}>Esse é o site de personagens da Marvel, aqui você pode criar seu próprio personagem, ou ver os personagens originais da própria Marvel.</p>
      </div>
      <div className={styles.marvel}>
        <h1 className={styles.marvelTitle}>Marvel</h1>
        <img src="https://segredosdomundo.r7.com/wp-content/uploads/2020/06/marvel-a-historia-da-editora-nos-quadrinhos-e-no-cinema.jpg" alt="Marvel" />
        <p className={styles.text}>A Marvel Comics, ou simplesmente Marvel, é uma das principais editoras de histórias em quadrinhos do mundo. Fundada em 1939 como Timely Publications e posteriormente conhecida como Atlas Comics, a empresa se tornou Marvel Comics na década de 1960. Sob a liderança de figuras icônicas como Stan Lee, Jack Kirby e Steve Ditko, a Marvel revolucionou a indústria de quadrinhos com a criação de personagens memoráveis, como o Homem-Aranha, X-Men, Quarteto Fantástico, Hulk, Thor, Homem de Ferro e os Vingadores.</p>
        <p className={styles.text}>O universo da Marvel também se expandiu para outras formas de mídia, incluindo filmes, séries de TV, jogos e produtos relacionados. O Marvel Cinematic Universe (MCU), lançado em 2008 com o filme Homem de Ferro, tornou-se uma franquia cinematográfica extremamente popular, conectando histórias e personagens em uma narrativa compartilhada. Isso levou a uma série de filmes de sucesso, incluindo Os Vingadores, Pantera Negra, Capitã Marvel e muitos outros.</p>
        <p className={styles.text}>Além disso, a Marvel continuou a criar histórias inovadoras e diversificadas nos quadrinhos, abordando questões sociais e políticas de maneiras criativas. A empresa é conhecida por suas narrativas complexas, desenvolvimento de personagens e por explorar temas relevantes, tornando-se uma parte importante da cultura pop global.</p>
      </div>
      <section className={styles.features}>
        <div className={styles.feature}>
          <h2>Conheça nossa equipe</h2>
          <NavLink texto={"Click Aqui"} rota="/sobrenos" />
        </div>
        <div className={styles.feature}>
          <h2>Procure por um Personagem</h2>
          <NavLink texto={"Click Aqui"} rota="/searchPage" />
        </div>
        <div className={styles.feature}>
          <h2>Crie seus Personagens</h2>
          <NavLink texto={"Click Aqui"} rota="/createCharacters" />

        </div>
      </section>
    </div>
    <Footer />
  </>
  )
}

export default home