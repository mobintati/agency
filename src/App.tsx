import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/home'
import Header from './components/header'
import Contact from './pages/Contact'
import Portfolio from './pages/portfolio'
import Service from './pages/service'
import About from './pages/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer'
import Graphic from './pages/Graphic'
import Blog from './pages/Blog'
import Login from './pages/Login'
import RecPass from './pages/RecPass'
import CodeConf from './pages/CodeConf'
import NewPass from './pages/NewPass'
import Dashbord from './pages/Dashbord'
import Request from './pages/Request'
import Coment from './pages/Coment'
import Statis from './pages/Statis'
import StatisGraphic from './pages/StatisGraphic'
import BlogAdmin from './pages/BlogAdmin'
import ContentAdmin from './pages/ContentAdmin'
import MainLayout from './MainLayout'
import AdminLayout from './AdminLayout'
import FormTask from './pages/FormTask'
import FormTaskk from './pages/FormTaskk'




function App() {

  return (



    <div className='bg-[#FAF9F7]'>

      <BrowserRouter>
       
        <Routes>
          <Route element={<MainLayout/>} >
          <Route path='/' element={<Home />} />
          <Route path='./' element={<Service />} />
          <Route path='/pages/portfolio' element={<Portfolio />} />
          <Route path='/pages/about' element={<About />} />
          <Route path='/pages/contact' element={<Contact />} />
          <Route path='/pages/service' element={<Service />} />
          <Route path='/pages/graphic' element={<Graphic />} />
          <Route path='/pages/blog' element={<Blog />} />
           <Route path='/pages/FormTask' element={<FormTask />} />
           <Route path='/pages/FormTaskk' element={<FormTaskk />} />
          
          
          
          </Route>

           <Route element={<AdminLayout/>}>
          <Route path='/pages/login' element={<Login />} />
          <Route path='/pages/recpass' element={<RecPass />} />
          <Route path='/pages/codeconf' element={<CodeConf />} />
          <Route path='/pages/newpass' element={<NewPass />} />
          <Route path='/pages/dashbord' element={<Dashbord />} />
          <Route path='/pages/request' element={<Request />} />
          <Route path='/pages/coment' element={<Coment />} />
          <Route path='/pages/statis' element={<Statis />} />
          <Route path='/pages/statisgraphic' element={<StatisGraphic />} />
          <Route path='/pages/blogadmin' element={<BlogAdmin />} />
             <Route path='/pages/content' element={<ContentAdmin />} />
             </Route>

          




        </Routes>
       
      </BrowserRouter>






    </div>
  )
}

export default App
