import React from 'react'
import Navbar from './component/Navbar/Navbar'
import Hero from './component/Hero/Hero'
import Services from './component/Services/Services'
import  Banner from './component/Banner/Banner'
import AppStore from './component/AppStore/AppStore'
import Footer from './component/Footer/Footer'
const App = () => {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Services/>
      <Banner/>
      <AppStore/>
      <Footer/>
    </>
  )
}

export default App
