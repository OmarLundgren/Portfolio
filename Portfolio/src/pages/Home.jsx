import TypingText from "../components/TypingText.jsx";
import {motion} from "framer-motion";
import "../styles/Home.css";
function Home() {
    return (
        <div className="Home">

            <div className="hero">
                <h1 className="heroHeader">Omar Lundgren</h1>
                <TypingText
                    phrases={[
                        "Engineer, Developer, ",
                        "Innovator.",
                        "Designer."
                    ]}
                    speed={80}
                    pause={1200}    
                />
            </div>
            <motion.div className="scrollIndicator" animate={{ y: [0,10,0]}}
                        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}>
                <motion.div className={"scrollLine"} animate={{ y: [0,10,0]}}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }} >
                </motion.div>
            </motion.div >

        </div>
    )
}
export default Home;