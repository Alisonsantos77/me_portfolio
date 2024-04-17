/* eslint-disable @typescript-eslint/no-unused-vars */
import { MenubarComp } from "./components/demo/menubarComp"
import Skills from "./components/demo/Skills";
import Projects from "./components/demo/Projects";
import { AboutComp } from "./components/demo/aboutComp";
import Experience from "./components/demo/Experience";
import Footer from "./components/demo/Footer";
import HeroComp from "./components/demo/heroComp";


export function App() {

  return (
    <div >
      <MenubarComp />
      {/* HERO */}
      <HeroComp />
      {/* ABOUT */}
      <AboutComp />

      {/* SKILLS */}
      <Skills />
      {/* PROJECTS */}
      <Projects />
      {/* EXPERIENCE */}
      <Experience />
      {/* FOOTER */}
      <Footer />
    </div>
  )
}

export default App
