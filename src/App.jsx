import './App.css'
import NavBar from './components/NavBar/NavBar'
import  { useState } from 'react';
import SideBar from './components/SideBar/SideBar';
import InfoNav from './components/InfoNav/InfoNav';
import {  Route, Routes } from 'react-router';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home'
import PropertyPage from './pages/PropertyPage/PropertyPage'
import PropertyDetails  from './pages/PropertyDetails/PropertyDetails'
import ContactUs from './pages/ContactUs/ContactUs'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <InfoNav/>
      <NavBar toggleSidebar={toggleSidebar}/>
      <SideBar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Routes>
        <Route path='/Task-4' element={ <Home /> }/>
        <Route path='/properties' element={ <PropertyPage /> }/>
        <Route path='/property' element={ <PropertyDetails /> }/>
        <Route path='/contact' element={ <ContactUs /> }/>
      </Routes>
      <Footer/>

    </>
  )
}

export default App
