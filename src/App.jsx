import BlurBackground from "./components/BlurBackground.jsx";
import Navbar from "./components/navbar.jsx";
import Hero from "./components/hero.jsx";
import Projects from "./components/projects.jsx";
import About from "./components/about.jsx";
import Skills from "./components/skills.jsx";
import Contacts from "./components/contacts.jsx";

export default function App() {
  return (
      <>
      <BlurBackground/>
      <Navbar/>
      <main className="antialiased overflow-x-hidden max-w-7xl mx-auto relative z-10">
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contacts/>
      </main>
      </>
  )
}