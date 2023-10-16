import styles from './sobrenos.module.css'
import IntegranteCash from '../components/integranteCash/IntegranteCash'

const Sobrenos = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Sobre nós</h1>
            <div className={styles.cardContainer}>
                <IntegranteCash nome="Gabriel" cargo="CEO" foto="https://avatars.githubusercontent.com/u/69424154?v=4" description="Gabriel é o CEO da empresa e é responsável por gerenciar a equipe e as tarefas." />
                <IntegranteCash nome="João" cargo="CTO" foto="https://avatars.githubusercontent.com/u/69424154?v=4" description="João é o CTO da empresa e é responsável por gerenciar a equipe e as tarefas." />
                <IntegranteCash nome="Maria" cargo="CFO" foto="https://avatars.githubusercontent.com/u/69424154?v=4" description="Maria é o CFO da empresa e é responsável por gerenciar a equipe e as tarefas." />
                <IntegranteCash nome="José" cargo="CIO" foto="https://avatars.githubusercontent.com/u/69424154?v=4" description="José é o CIO da empresa e é responsável por gerenciar a equipe e as tarefas." />
            </div>
        </div>
    )
}

export default Sobrenos