import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import ReactDOM from 'react-dom';
import Navbar from './navbar';
import Main_page1 from './Main_page1'
import Brief from './Brief'
import Home from './Home'
import Article from './Article'
import Layout from './Layout';
import Article_details from './Article_details';
import Login from './login';
import Profile from './Profile';
import Signup from './signup';
export const App = () => {
  return (
    <BrowserRouter>
        
        <Routes>
            <Route path='/' element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path='/article/findById/:id' element={<Article_details/>}/> 
                <Route path='/login' element={<Login/>}/>
                <Route path='/signup' element={<Signup/>}/>
                {/* <Route path='/article/:id' element={<Article/>}/> */}
            </Route>
            <Route path='/profile' element={<Profile/>}/>
            
        </Routes>
    
    </BrowserRouter>
  )
}
export default App;

