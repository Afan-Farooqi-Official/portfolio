import Navbar from "./components/Navbar"
import Hero from "./components/sections/Hero"
import About from "./components/sections/About"
import Projects from "./components/sections/Projects"
import Services from "./components/sections/Services"
import Contact from "./components/sections/Contact"
import Footer from "./components/Footer"

function App() {

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex flex-col">
        <Hero />
        <About />
        <Projects />
        <Services />
        <Contact />
      </div>
      <Footer />
    </div>
  )
}

export default App
