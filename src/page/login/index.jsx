import { useContext } from 'react'
import { LoginContext } from '../../App';

function Login() {
  const {isLogin,setisLogin} = useContext(LoginContext);
  const LoginHandaler = () => {
    setisLogin(true)
  }
  return (
    <button onClick={LoginHandaler}>Login</button>
  )
}

export default Login