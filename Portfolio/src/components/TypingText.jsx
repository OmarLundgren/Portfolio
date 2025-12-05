import {useState, useEffect} from 'react';
import "../styles/typingText.css";
export default function TypingText(    {phrases, speed = 100, pause =1500}) {

    // 🟩 Det som ska skrivas en gång (första frasen)
    const staticPart = phrases[0];
    // 🟦 Det som ska loopa (resten av fraserna)
    const loopPhrases = phrases.slice(1);

    const [staticText, setStaticText] = useState("");
    const [staticDone, setStaticDone] = useState(false);

    const [text,setText] = useState("");
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);


    useEffect(() => {
        if (staticDone) return; // hoppa över om den redan är klar

        if (staticText !== staticPart) {
            const timeout = setTimeout(() => {
                setStaticText(staticPart.substring(0, staticText.length + 1));
            }, speed);
            return () => clearTimeout(timeout);
        } else {
            setStaticDone(true); // klar -> börja suffix-animera
        }
    }, [staticText, staticDone, staticPart, speed]);

    useEffect(() => {
        if (!staticDone) return;

        const current = loopPhrases[index];
        let typingSpeed = speed;
        if(isDeleting) typingSpeed = speed /1.5; //snabbare när den raderar

        const timeout = setTimeout(() => {
            if(!isDeleting) {
                setText(current.substring(0, text.length + 1));

                if (text === current) {
                    setTimeout(() => setIsDeleting(true), pause); // säger att den
                    // ska börja ta bort text
                }
            } else {
                setText(current.substring(0, text.length - 1)); //readerar texten

                if (text === "") {
                    setIsDeleting(false);
                    setIndex((prev) => (prev + 1) % loopPhrases.length);
                }
            }
        }, typingSpeed);
        return () => clearTimeout(timeout);
    }, [text, isDeleting, index, phrases, speed, pause, staticDone]);


    return (
        <span className="typing-text">
            {staticText}{staticDone ? " " : ""}
            {text}
            <span className="cursor">|</span>
        </span>
    );

}