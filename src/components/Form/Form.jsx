import { useState,useContext } from "react";
import styles from "./style.module.css";
import { PostFunction } from '../../utils/service';
import { LoginAPI } from '../../utils/apis';
import { LoginContext } from "../../App";

function Form() {
  const {isLogin, setIsLogin} = useContext(LoginContext);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const ChangeHandaler = (e) => {
    setForm({
      ...form,
      [e.target.name]: [e.target.value],
    });
  };
  const submitHandaler = (e) => {
    // e.preventDefault();
    // console.log("Login", form);
      e.preventDefault()
      PostFunction(LoginAPI,form).then((res)=> {
        console.log(res.data)
        if(res.data.status === "success"){
          localStorage.setItem("token", res.data.data.token.accessToken)
          localStorage.setItem("isLogin", true)
          window.location.reload();        }
      }).catch((err)=> console.log(err))
  };
  const [showPassword, setshowPassword] = useState(false);
  const showPassHandaler = () => {
    setshowPassword(!showPassword);
  };
  return (
      <form onSubmit={submitHandaler} className={styles.formContainner}>
        <h3 className={styles.formTitle}>Login Form</h3>
        <input
          className={styles.formInput}
          type="text"
          onChange={ChangeHandaler}
          name="email"
          value={form.email}
          placeholder="Enter user Email"
        />
        <input
          className={styles.formInput}
          type={showPassword ? "text" : "password"}
          onChange={ChangeHandaler}
          name="password"
          value={form.password}
          placeholder="Enter user Password"
        />
        <div>
          <input type="checkbox" onChange={showPassHandaler} id="showPass" />
          <label htmlFor="showPasss">Show Password</label>
        </div>
        <button
          type="submit"
          className={styles.SumbitBtn}
          onClick={submitHandaler}
        >
          Login
        </button>
      </form>
  );
}

export default Form;
