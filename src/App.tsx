import Navbar from './components/Navbar'
import Home from './components/Home'
import Projects from './components/Projects'
import About from './components/About'
import ContactMe from './components/ContactMe'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
      <Home />
      <Projects />
      <About />
      <ContactMe />
      </main>
      <Footer />
    </>
  )
}

export default App
