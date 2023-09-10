import styles from "./style.module.css";
import Button from "../button/Button";

function Card(props) {
  return (
    <>
      <div key={props.id} className={styles.cardConatinner}>
        <img src={props.img} alt="" className={styles.cardImg} />
        <div className={styles.TitleAuthorContainner}>
          <p>{props.title}</p>
          <p>{props.author}</p>
        </div>
        <div>
          <p>{props.body}</p>
          <div className={styles.btnConatainner}>
            <button className={styles.editBtn}>Edit</button>
            <button className={styles.deleteBtn}>Delete</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
