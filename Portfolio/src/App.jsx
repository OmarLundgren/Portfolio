import './styles/App.css'
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import NavBar from "./components/NavBar.jsx";
import Stars from "./components/stars.jsx";
import FallingStar from "./components/fallingStar.jsx";
import Skills from "./pages/Skills.jsx";
import Projects from "./pages/Projects.jsx";
import Contact from "./pages/Contact.jsx";
import {useScroll} from "framer-motion";
import {useRef} from "react";

function App() {
    const projectsRef = useRef(null);

    const { scrollYProgress: projectsProgress } = useScroll({
        target: projectsRef,
        offset: ["start start", "end end"],
    });

    return (
        <>
            <FallingStar />
            <NavBar />
            <main className="main-content">
                <section id="home">
                    <Stars offset={0} horizontalProgress={projectsProgress}/>
                    <Home />
                </section>
                <section id="about">
                    <Stars offset={1} speed={0.02} sizeRange={[1,1]}/>
                    <About />
                </section>
                <section id="skills">
                    <Stars offset={2} speed={0.07} sizeRange={[1,2]}/>
                    <Stars offset={3} speed={0.1} sizeRange={[2,3]}/>
                    <Skills/>
                </section>
                <section id="projects" ref={projectsRef}>
                    <Stars offset={4} horizontalProgress={projectsProgress}/>
                    <Projects/>

                </section>
                <section id="contact" >
                    <Contact/>
                </section>


            </main>
        </>
    );
}

export default App;
