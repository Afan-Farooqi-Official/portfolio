import Navbar from "./components/Navbar"
import Hero from "./components/sections/Hero"
import About from "./components/sections/About"
import Projects from "./components/sections/Projects"
import Contact from "./components/sections/Contact"

function App() {

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="flex flex-col gap-20">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}

export default App
