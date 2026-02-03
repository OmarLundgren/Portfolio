import CurrentLocation from "./CurrentLocation.jsx";
import { useState, useRef } from "react";

function NavBar() {

    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        const menu = menuRef.current;

        if (!menu) return;

        if (isOpen) {
            // Stäng meny
            menu.style.right = "-100%";
            setTimeout(() => {
                setIsOpen(false);
            }, 400);

            menu.querySelectorAll("a, button").forEach(el => {
                el.style.opacity = 0;
            });

            document.querySelector(".navbar")?.style.setProperty(
                "background",
                "transparent"
            );
        } else {
            // Öppna meny
            setIsOpen(true);
            menu.style.right = "-100%";

            requestAnimationFrame(() => {
                menu.style.right = "0";
            });

            menu.querySelectorAll("a, button").forEach(el => {
                el.style.opacity = 1;
            });

            
        }

        document.querySelector("body#home #logo")?.classList.toggle("show");
    };
    return (
        <header>
            <nav className="navbar">
                <div className="item">
                    <a className="nav-link" href="#root">Omar Lundgren</a>
                </div>
                <div className={`item ${isOpen ? "show" : ""}`} id="menu" ref={menuRef}
>
                    <a className="nav-link" href="#about">About</a>
                    <a className="nav-link" href="#skills">Skills</a>
                    <a className="nav-link" href="#projects">Projects</a>
                    <a className="nav-link" href="#contact">Contact</a>
                </div>
                <div className="item">
                    
                    <CurrentLocation/>
                </div>
                <button className={`nav-toggle ${isOpen ? "active" : ""}`}
                onClick={toggleMenu}
                aria-label="Open menu">

                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                </button>
            </nav>
        </header>
        
    )
}

export default NavBar;
