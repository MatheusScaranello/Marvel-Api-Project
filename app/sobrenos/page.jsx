import styles from './sobrenos.module.css'
import IntegranteCash from '../components/integranteCash/IntegranteCash'

const Sobrenos = () => {
    return (
     
        <div className={styles.container}>
            <h1 className={styles.title}>Sobre nós</h1>
            <div className={styles.cardContainer}>
                <IntegranteCash nome="Matheus Scaranello" cargo="TechLeader" foto="https://i.imgur.com/8K96q0J.jpg" description="João é o CTO da empresa e é responsável por gerenciar a equipe" />
                <IntegranteCash nome="Caique Naimi" cargo="CTO" foto="https://i.imgur.com/174eKbW.jpg" description="João é o CTO da empresa e é responsável por gerenciar a equipe e as tarefas." />
                <IntegranteCash nome="Gabriel Canrin" cargo="CFO" foto="https://i.imgur.com/iO9H6V1.jpg" description="Maria é o CFO da empresa e é responsável por gerenciar a equipe e as tarefas." />
                <IntegranteCash nome="Gabriel Picirili" cargo="CIO" foto="https://i.imgur.com/GUvnMes.jpg" description="José é o CIO da empresa e é responsável por gerenciar a equipe e as tarefas." />
                <IntegranteCash nome="Marina Elis" cargo="CIO" foto="https://i.imgur.com/EdCWCfd.jpg" description="José é o CIO da empresa e é responsável por gerenciar a equipe e as tarefas." />
                <IntegranteCash nome="Stefanny oliveira" cargo="CFO" foto="https://i.imgur.com/KQcoF2u.jpg" description="Maria é o CFO da empresa e é responsável por gerenciar a equipe e as tarefas." />
            </div>
        </div>
    )
}

export default Sobrenos