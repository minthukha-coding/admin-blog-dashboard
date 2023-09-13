import React from "react";
import Card from "../../components/card/Card";
import { postData } from "./data";
import styles from './style.module.css'
import { GetAllPostsAPI } from "../../utils/apis";
import { GetDataHook } from "../../utils/service";

function Allblog() {
  const {data,loaging} = GetDataHook(GetAllPostsAPI)
  console.log(data,loaging)
  return (
    <div className={styles.postContainner}>
      {postData.map((post) => (
        <Card
          id={post.id}
          key={post.id}
          title={post.title}
          author={post.author || "anynymous"}
          body={post.body}
          img={post.img}
        ></Card>
      ))}
    </div>
  );
}
export default Allblog;