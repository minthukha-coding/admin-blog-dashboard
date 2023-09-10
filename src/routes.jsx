import {Routes, Route} from 'react-router-dom'
import Home from './page/Home/index'
import Allblog from './page/All-blog'
import CreateBlogs from './page/create-blogs'

function View() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/all-blogs' element={<Allblog/>}></Route>
        <Route path='/create-blog' element={<CreateBlogs/>}></Route>
    </Routes>
  )
}
export default  View