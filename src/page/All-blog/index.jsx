import React from "react";
import Card from "../../components/card/Card";
import { postData } from "./data";
import styles from './style.module.css'

function Allblog() {
  return (
    <div className={styles.postContainner}>
      {postData.map((post) => (
        <Card
          key={post.id}
          titel={post.titel}
          author={post.author}
          body={post.body}
          img={post.img}
        ></Card>
      ))}
    </div>
  );
}

export default Allblog;
