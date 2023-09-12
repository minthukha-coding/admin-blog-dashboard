import { useState } from "react";
import Button from "../../components/button/Button";
import styles from "./style.module.css";

function CreateBlogs() {
  const [Form, setForm] = useState({
    body: "",
    author: "",
    title: "",
  });
  const ChangeHandaler = (e) => {
    console.log(e.target.value);
  };
  const FileHandaler = (e) => {
    console.log("File");
  };
  return (
    <form className={styles.formConatainner}>
      <div className={styles.inputContainner}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          placeholder="Enter Titel"
          value={``}
          className={styles.input}
          onClick={ChangeHandaler}
        />
      </div>
      <div className={styles.inputContainner}>
        <label htmlFor="author">Author</label> <br />
        <input
          id="author"
          type="text"
          name="author"
          placeholder="Enter Author"
          value={``}
          className={styles.input}
          onClick={ChangeHandaler}
        />
      </div>
      <div className={styles.inputContainner}>
        <label htmlFor="image" className={styles.selectImg}>
          Select Image
        </label>{" "}
        <br />
        <input
          id="image"
          type="file"
          name="Image"
          value={``}
          onClick={FileHandaler}
          hidden={true}
        />
      </div>
      <div className={styles.inputContainner}>
        <textarea
          name="body"
          id="body"
          placeholder="Enter body text"
          className={styles.textarea}
        ></textarea>
      </div>
      <button className={styles.submitBtn}>Submit</button>
    </form>
  );
}

export default CreateBlogs;
