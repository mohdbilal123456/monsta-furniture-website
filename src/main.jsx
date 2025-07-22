import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './Components/Navbar'
import Header from './Components/Header'
import Footer from './Components/Footer'
import './assests/CSS/style.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <Header/>
   
  </StrictMode>,
)
