import {Routes, Route} from 'react-router-dom'
import Home from './page/Home/index'

function View() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
    </Routes>
  )
}
export default  View