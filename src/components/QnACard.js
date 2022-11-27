import styles from "./QnACard.module.css";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useState } from "react";
const QnACard = (props) => {
    const [showAnswer, setShowAnswer] = useState(false);
    const toggleAnswer = () => {
        setShowAnswer(!showAnswer);
    }
    return (
        <article className={styles.QnACard}>
            <div className={styles.head}>
                <h3>{props.question}</h3>
                {showAnswer && <FaMinus onClick={toggleAnswer} className={styles.fa_btn} />}
                {!showAnswer && <FaPlus onClick={toggleAnswer} className={styles.fa_btn} />}
            </div>
            {showAnswer && <p>{props.answer}</p>}
        </article>
    );
};

export default QnACard;
