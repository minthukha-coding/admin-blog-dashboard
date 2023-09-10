import { useContext } from 'react'
import { LoginContext } from '../../App';
import Form from '../../components/Form/Form';


function Login() {
  const {isLogin,setisLogin} = useContext(LoginContext);

  const LoginHandaler = () => {
    setisLogin(false)
  }
  return (
    <Form></Form>
  )
}
  
export default Login