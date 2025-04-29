import './App.css'
import { Navbar, HomeSection, AboutMeSection, Process, PortfolioSection, ExperienceSection, Footer } from './components/index'

function App() {

  return (
    <>
      <Navbar/>
      <HomeSection uid="home"/>
      <AboutMeSection uid="aboutme"/>
      <Process/>
      <PortfolioSection uid="portfolio"/>
      <ExperienceSection uid="experience"/>
      <Footer/>
    </>
  )
}

export default App
