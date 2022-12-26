import React from 'react'
import { About } from './components/about/about'
import { Contact } from './components/contact/contact'
import { Experience } from './components/experience/experience'
import { Footer } from './components/footer/footer'
import { Header } from './components/header/header'
import { Nav } from './components/nav/nav'
import { Portfolio } from './components/portfolio/portfolio'
import { Services } from './components/services/services'
import { Testmonials } from './components/testmonials/testmonials'

export  const App = () => {
  return (
  <>
  <Header/>
  <Nav/>
  <About/>
  <Experience/>
  <Services/>
  <Portfolio/>
  <Testmonials/>
  <Contact/>
  <Footer/>

  </>
  )
}
