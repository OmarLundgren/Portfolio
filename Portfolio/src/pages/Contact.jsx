import "../styles/Contact.css";
import {motion} from "framer-motion";
import CopyButton from "../components/CopyButton.jsx";
export default function Contact() {
    const pulseTransition = {
        duration: 1,
        ease: "easeOut",
        repeat: Infinity,
        repeatDelay: 2.5,
    };

    return (

        <div className="contactContainer">
            <h3 className="contactLeft">Like what you see?</h3>
            <div className="contactTitleWrapper">
                <motion.div className="contactTitle">
                    <h1>Contact Me</h1>
                </motion.div>
            </div>

            <div className="contactLinks2">
                <div><a href="https://www.linkedin.com/in/omar-lundgren/"> Linkedin</a> </div>
                <CopyButton textToCopy ="lundgrenomar@gmail.com"/>
            </div>


        </div>
    )
}