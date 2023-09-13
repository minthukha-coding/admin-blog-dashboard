import styles from "./style.module.css";
import Button from "../button/Button";
import { useNavigate } from "react-router-dom";

function Card(props) {
  const Navigate = useNavigate();
  const editHandaler = (id) => {
    Navigate(`/Post/${id}`);
  };
  const deleteHandaler = (id) => {
    confirm(`/Are you sure to delete ${id}`)
  }
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
            <button
              onClick={() => {
                editHandaler(props.id);
              }}
              className={styles.editBtn}
            >
              Edit
            </button>
            <button onClick={()=>{
              deleteHandaler(props.id)
            }}  className={styles.deleteBtn}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
