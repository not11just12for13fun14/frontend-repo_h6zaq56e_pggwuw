import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'

function App() {
  return (
    <div className="bg-[radial-gradient(1200px_600px_at_80%_-10%,rgba(59,130,246,0.12),transparent),radial-gradient(800px_400px_at_10%_0%,rgba(139,92,246,0.12),transparent)] text-black">
      <Navbar />
      <main className="pt-24">
        <Hero />
        <About />
        <Work />
        <Contact />
        <footer className="py-12 text-center text-sm text-black/60">© {new Date().getFullYear()} Your Name — Built with care</footer>
      </main>
    </div>
  )
}

export default App
