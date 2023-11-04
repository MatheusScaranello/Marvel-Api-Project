"use client"
import styles from "./page.module.css"
import Header from "./components/header/Header"
import Footer from "./components/footer/Footer"
import NavLink from "./components/NavLink/NavLink"
import { CCarouselItem } from '@coreui/react'
import { CCarousel } from '@coreui/react'
import { CImage } from '@coreui/react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Card from 'react-bootstrap/Card';
import { CTooltip } from '@coreui/react'
import { CButton } from '@coreui/react'


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
            <div className={styles.carousel}>
              <CCarousel
                controls
                transition="crossfade"
                animateIn={true}
                animateOut={true}
                autoSlide={true}
                autoSlideInterval={3000}
              >
                <CCarouselItem>
                  <CImage className="d-block w-100" src={"https://assets-global.website-files.com/5dfd2203d08cf403964198c2/62bb241ed181683be780cd45_6182d7040018fc3f269a3116_marvel-characters-p-1600.jpeg"} alt="slide 1" />
                </CCarouselItem>
                <CCarouselItem>
                  <CImage className="d-block w-100" src={"https://www.emp.ie/dw/image/v2/BBQV_PRD/on/demandware.static/-/Library-Sites-EMPSharedLibrary/default/dwe169dcbd/100151_MT_Marvel.jpg?sw=768"} alt="slide 2" />
                </CCarouselItem>
                <CCarouselItem>
                  <CImage className="d-block w-100" src={"https://wallpapers.com/images/featured/marvel-comic-book-background-0exuprkk5cwj6ail.webp"} alt="slide 3" />
                </CCarouselItem>
              </CCarousel>
            </div>
            <h2 className={`${styles.incons2} ${styles.fade}`}>Conheça nosso site</h2>
          </div>
          <div className={styles.icons}>
            <Card className={styles.cards} style={{ width: '18rem', margin: "5px", backgroundColo: "red" }}>
              <Card.Img variant="top" src="https://marvelmission.com/assets/front/images/homepage/ICONO-INTRO_02.png" />
              <Card.Body>
                <Card.Title>Personagens</Card.Title>
                <Card.Text>
                  Veja todos os personagens da Marvel disponiveis em nossa API, e conheça um pouco mais sobre eles.
                </Card.Text>
                <CTooltip
                  content="Navegar para a página de personagens."
                  placement="top"
                >
                  <CButton href="./searchPage" color="primary">Click Aqui</CButton>
                </CTooltip>
              </Card.Body>
            </Card>
            <Card className={styles.cards} style={{ width: '18rem', margin: "5px" }}>
              <Card.Img variant="top" src="https://marvelmission.com/assets/front/images/homepage/ICONO-INTRO_01.png" />
              <Card.Body>
                <Card.Title>Cadastro</Card.Title>
                <Card.Text>
                  Cadastre um novo personagem na nossa API ou fique a vontade para editar e excluir outros.
                </Card.Text>
                <CTooltip
                  content="Navegar para a página de cadastro de personagens."
                  placement="top"
                >
                  <CButton href="./createCharacters" color="primary">Click Aqui</CButton>
                </CTooltip>
              </Card.Body>
            </Card>
            <Card className={styles.cards} style={{ width: '18rem', margin: "5px" }}>
              <Card.Img variant="top" src="https://marvelmission.com/assets/front/images/homepage/ICONO-INTRO_04.png" />
              <Card.Body>
                <Card.Title>Sobre Nós</Card.Title>
                <Card.Text>
                  Conheça um pouco mais sobre a nossa equipe, e veja os criadores do nosso projeto.
                </Card.Text>
                <CTooltip
                  content="Navegar para a página sobre a nossa equipe."
                  placement="top"
                >
                  <CButton href="./sobrenos" color="primary">Click Aqui</CButton>
                </CTooltip>
              </Card.Body>
            </Card>

          </div>
        </div>
      </div >
      <div className={styles.container2}>
      </div>
      <Footer />
    </>
  )
}

export default home
