import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Media from './pages/Media'
import Ministries from './pages/Ministries'
import Feedback from './pages/Feedback'

function App() {

  return (
    <div>
       <BrowserRouter>
       <Routes>
        <Route index element ={<Home />} />
        <Route path='/home' element = {<Home />} />
        <Route path='/about' element = {<About />} />
        <Route path='/contact' element = {<Contact />} />
        <Route path='/media' element = {<Media />} />
        <Route path='/min' element = {<Ministries />} />
        <Route path='/feed' element = {<Feedback />} />

        
       </Routes>
       </BrowserRouter> 
    </div>
    )}


export default App
