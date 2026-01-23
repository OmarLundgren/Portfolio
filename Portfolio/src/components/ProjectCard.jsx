import { motion } from "framer-motion";
import "../styles/ProjectCard.css";

export default function ProjectCard({title, description, tech, tech2, tech3, year, demo, github, image, fit ="cover"}) {

    return (
        <motion.div
            className="projectContainer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0, zIndex:2}}

            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
        >

        <div className="project-image">
                <img src={image} alt={title} style={{objectFit: fit}} />
        </div>
            <div className="project-card">
                <div className="project-header">
                    <h2 className="project-title">{title}</h2>
                    <span className="project-meta">{tech}</span>
                    {tech2 ? <span className="project-meta">{tech2}</span> : null}
                    {tech3 ? <span className="project-meta">{tech3}</span> : null}
                    <span className="project-year">{year}</span>
                </div>
                <h1 className="project-description">{description}</h1>

                <div className="project-links">
                    {demo && <a href={demo} target="_blank" rel="noreferrer">Live demo</a>}
                    {github && <a href={github} target="_blank" rel="noreferrer">GitHub</a>}
                </div>
            </div>
        </motion.div>
    );
}
