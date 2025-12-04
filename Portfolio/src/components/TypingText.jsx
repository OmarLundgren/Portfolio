import {useState, useEffect} from 'react';

export default function TypingText(    {phrases, speed = 100, pause =1500}) {

    const [text,setText] = useState("");
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const current = phrases[index];
        let typingSpeed = speed;
        if(isDeleting) typingSpeed = speed / 2; //snabbare när den raderar

        const timeout = setTimeout(() => {
            if(isDeleting) {
                setText(current.substring(0, text.length + 1));

                if (text == current) {
                    setTimeout(() => setIsDeleting(true), pause); // säger att den
                    // ska börja ta bort text
                }
            } else {

                setText(current.substring(0, text.length - 1)); //readerar texten
                if (text == "") {
                    setIsDeleting(false);
                    setIndex((prev) => (prev + 1) % phrases.length);
                }
            }
        }, typingSpeed);
        return () => clearTimeout(timeout);
    }, [text, isDeleting, index, phrases, speed, pause]);

    
    return (
        <span className="typing-text">
            {text}
            <span className="cursor">|</span>
        </span>
    );

}