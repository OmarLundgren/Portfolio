import './styles/App.css'
import Home from "./pages/Home.jsx";
import {Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import Stars from "./components/stars.jsx";
import FallingStar from "./components/fallingStar.jsx";
import About from "./pages/About.jsx";

function App() {

  return (
      <>
          <Stars count={150} />
          <FallingStar></FallingStar>
          <NavBar/>
          <main className ="main-content">
              <Routes>
                  <Route path ="/" element={<Home />}/>
                  <Route path ="/about" element={<About />}/>
              </Routes>
          </main>
      </>



  )
}

export default App
