import { useState, useEffect } from "react";
import "../styles/stars.css";
import { motion, useScroll, useTransform } from "framer-motion";
const columns = 10;
const rows = 10;
const count = columns * rows;

export default function Stars( { offset = 0 }) {
    const {scrollY} = useScroll();
    const y = useTransform(scrollY, value => -value * 0.07);

    const [starData, setStarData] = useState([]);

    useEffect(() => {
        const saved = localStorage.getItem("star");

        if (saved) {
            // Använd tidigare sparade stjärnor
            setStarData(JSON.parse(saved));
        } else {
            // Generera nya stjärnor
            const data = Array.from({ length: count }, (_, i) => {
                const row = Math.floor(i / columns);
                const col = i % columns;

                // slump inom grid-cell (inte precis i hörnet)
                const xStar = (col + Math.random() * 0.8 + 0.1) / columns * 100;
                const yStar = (row + Math.random() * 0.8 + 0.1) / rows * 100;

                const size = Math.random() < 0.5 ? 1 : 2; // två storlekar
                const duration = 2 + Math.random() * 3;    // blinkning 2-5s

                return { top: yStar, left: xStar, size, duration };
            });

            localStorage.setItem("star", JSON.stringify(data)); // spara lokalt
            setStarData(data);
        }
    }, []);

    return (

        <motion.div className="stars-wrapper" style={{ y }}>
            {starData.map((star, i) => (
                <div
                    key={i}
                    className="star"
                    style={{
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        top: `${star.top}%`,
                        left: `${star.left}%`,
                        animationDuration: `${star.duration}s`,
                        transform: `translateY(${offset * 100}vh)`
                    }}
                />
            ))}


        </motion.div>
    );
}
