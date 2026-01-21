import React from 'react';
import '../styles/projectcardtest.css'

const ProjectCard = ({ title, description, tech, year, demo, github, image }) => {
    return (
        <div className="portfolio-card-container">
            {/* Översta raden: Pil + Tech-stack */}
            <header className="card-top-nav">
                <span className="back-arrow">←</span>
                <span className="nav-label">{tech}</span>
            </header>

            {/* Titel och År */}
            <div className="card-main-info">
                <h2 className="card-title">{title}</h2>
                <span className="card-year">{year}</span>
            </div>

            {/* "Location"-raden (Beskrivning) */}
            <div className="card-sub-info">
                <span className="icon">📍</span>
                <span className="description-text">{description}</span>
            </div>

            {/* Bild-sektionen med Stack-effekt */}
            <div className="card-image-section">
                <div className="image-stack-bg"></div>
                <div className="image-main-wrapper">
                    <img src={image} alt={title} className="image-content" />
                </div>
            </div>

            {/* Footer med meny-ikon och länkar */}
            <footer className="card-bottom-footer">
                <div className="hamburger-menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="footer-links">
                    {github && <a href={github} target="_blank">GitHub</a>}
                    {demo && <a href={demo} target="_blank">+ View Demo</a>}
                </div>
            </footer>
        </div>
    );
};

export default ProjectCard;