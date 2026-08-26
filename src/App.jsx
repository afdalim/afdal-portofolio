import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Achievements from './components/Achievements'
import Skills from './components/Skills'
import Blog from './components/Blog'
import CV from './components/CV'
import Contact from './components/Contact'

function App() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <About />
      <Achievements />
      <Skills />
      <Blog />
      <CV />
      <Contact />
    </main>
  )
}

export default App