import {Routes, Route} from 'react-router-dom'
import Home from './page/Home/index'
import Allblog from './page/All-blog'
import CreateBlogs from './page/create-blogs'
import PostDetails from './page/PostDetails'

function View() {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/all-blogs' element={<Allblog/>}></Route>
        <Route path='/create-blog' element={<CreateBlogs/>}></Route>
        <Route path='/post/:id' element={<PostDetails/>}></Route>
    </Routes>
  )
}
export default  View