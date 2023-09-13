import React from "react";
import Card from "../../components/card/Card";
import { postData } from "./data";
import styles from './style.module.css'

function Allblog() {
  return (
    <div className={styles.postContainner}>
      {postData.map((post) => (
        <Card
          id={post.id}
          key={post.id}
          title={post.title}
          author={post.author}
          body={post.body}
          img={post.img}
        ></Card>
      ))}
    </div>
  );
}

export default Allblog;