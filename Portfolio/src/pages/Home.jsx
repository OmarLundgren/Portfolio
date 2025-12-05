import TypingText from "../components/TypingText.jsx";


function Home() {
    return (
        <TypingText
            phrases={[
                "Engineer, Developer, ",
                "Innovator.",
                "Designer."
            ]}
            speed={80}
            pause={1200}
        />
    )
}
export default Home;