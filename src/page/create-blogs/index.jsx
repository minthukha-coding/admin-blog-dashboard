import { useState } from "react";
import Button from "../../components/button/Button";
import styles from "./style.module.css";

function CreateBlogs() {
  const initialFormData = {
    body: "",
    author: "",
    title: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const ChangeHandaler = (e) => {
    console.log(e.target.value);
    setFormData({
      ...formData , 
      [e.target.name] : e.target.value
    })
  };
    const FileHandaler = (e) => {
    console.log ("File");
  };
  return (
    <form className={styles.formConatainner}>
      <h3>Creat Post</h3>
      <div className={styles.inputContainner}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          name="title"
          placeholder="Enter Titel"
          value={formData.title}
          className={styles.input}
          onChange={ChangeHandaler}
        />
      </div>
      <div className={styles.inputContainner}>
        <label htmlFor="author">Author</label> <br />
        <input
          id="author"
          type="text"
          name="author"
          placeholder="Enter Author"
          value={formData.author}
          className={styles.input}
          onChange={ChangeHandaler}
        />
      </div>
      <div className={styles.inputContainner}>
        <label className={styles.imgBtn} htmlFor="image">
          Select Image
        </label>
        <br />
        <input
          id="image"
          type="file"
          name="Image"
          value=""
          onChange={FileHandaler}
          hidden={true}
        />
      </div>
      <div className={styles.inputContainner}>
        <label htmlFor="body">Body</label> <br />
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