import { useContext } from "react";
import { LoginContext } from "../../App";
import styles from './style.module.css'

function Home() {
  const { isLogin, setisLogin } = useContext(LoginContext);
  const LogoutHandaler = () => {
    setisLogin(true);
  };
  return <button className={styles.LogoutAdj} onClick={LogoutHandaler}>Logout</button>;
}

export default Home;
