import ProjectCard from "../components/ProjectCard.jsx";
import ChessandQuest from '../images/ChessandQuest.png';
import Projectcardtest from "../components/projectcardtest.jsx";
import EduBridge from "../images/EduBridge.png";
import StepIn from "../images/StepIn.png";
import StepIn2 from "../images/StepIn2.png";

export default function Projects() {

    return (

        <div className="projects">
            <h1 className="title">Featured Projects</h1>
            <ProjectCard

                title="Chess and Quest"
                description="Chess Reinvented: Quests, Strategy, Rewards."
                tech="C#"
                tech2="SQL"
                tech3="JS"
                year="2025 - now"
                demo="https://example.com"
                github="https://github.com/morganlundgren/ChessAndQuests"
                image={ChessandQuest}
            />
            <ProjectCard
                title="EduBridge"
                description="A Platform for Educators & Therapists to Share Learning Solutions."
                tech="UX/UI"
                year="2025"
                image={EduBridge}
                fit={"contain"}
            />
            <ProjectCard
                title="Gym Website"
                description="A modern redesign and implementation of a gym website"
                tech="Web Development"
                year="2025"
                demo="https://omarlundgren.github.io/step-in/"
                github="https://github.com/OmarLundgren/step-in"
                image={StepIn2}
                fit={"contain"}
            />

        </div>

    )

}