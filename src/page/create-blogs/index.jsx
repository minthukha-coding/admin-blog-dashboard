import { useState } from "react";
import Button from "../../components/button/Button";

function CreateBlogs() {
  const [Form, setForm] = useState({
    body:"",
    author:"",
    title:""
  })
  const ChangeHandaler = (e) => {
    console.log(e.target.value);
  };
  const FileHandaler = (e) => {
    console.log("File")
  }
  return (
    <form>
      <label htmlFor="title">Title</label>
      <input
        id="title"
        type="text"
        name="title"
        placeholder="Enter Titel"
        value={``}
        onClick={ChangeHandaler}
      />
      <label htmlFor="author">Author</label>
      <input
        id="author"
        type="text"
        name="author"
        placeholder="Enter Author"
        value={``}
        onClick={ChangeHandaler}
      />
      <label htmlFor="body">Body</label>
      <input
        id="body"
        type="text"
        name="body"
        placeholder="Enter Body"
        value={``}
        onClick={ChangeHandaler}
      />
      <label htmlFor="image">Select Image</label>
      <input
        id="image"
        type="file"
        name="Image"
        value={``}
        onClick={FileHandaler}
        hidden={true}
      />
      <button>Submit</button>
    </form>
  );
}

export default CreateBlogs;
