import { useState } from "react";
import styles from './style.module.css'

function Form() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const ChangeHandaler = (e) => {
    setForm({
        ...form,
      [e.target.name] : [e.target. value]
    })
  }
  const submitHandaler = (e) => {
    e.preventDefault();
    console.log("Login",form)
  }
  return (
    <form onSubmit={submitHandaler} className={styles.formContainner}>
      <input
        type="text"
        onChange={ChangeHandaler}
        className="/"
        name="email"
        value={form.email}
        placeholder="Enter user Email"
      />
      <input
        type="text"
        onChange={ChangeHandaler}
        className="/"
        name="password"
        value={form.password}
        placeholder="Enter user Password"
      />
      <button type="submit" onClick={submitHandaler}>Login</button>
    </form>
  );
}

export default Form;