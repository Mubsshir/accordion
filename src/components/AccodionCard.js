import styles from './AccodionCard.module.css'
import QnACard from './QnACard';
import questions from '../data'
const AccodionCard = () => {
    return (
        <div className={styles.Card}>
            <section className={styles.titleSec}>
                <h3>Questions And Answers About Login</h3>
            </section>
            <section className={styles.QnASection}>
                {questions.map(que => <QnACard
                    question={que.title}
                    answer={que.info}
                    key={que.id}
                />
                )}
            </section>
        </div>
    )
}

export default AccodionCard