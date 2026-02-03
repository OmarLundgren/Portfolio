import { useState, useEffect } from "react";
import '../styles/Navbar.css'


 function UmeLocation() {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const umeTime = now.toLocaleTimeString("sv-SE", {
                timeZone: "Europe/Stockholm",
                hour: "2-digit",
                minute: "2-digit",
            });
            setTime(umeTime);
        };

        updateTime(); // kör direkt
        const interval = setInterval(updateTime, 1000); // uppdatera varje sekund

        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{ display: "flex", alignItems: "center", gap: "6px", fontSize: "1.2vw" }}>
            <span className="status-dot"></span>
            <span>UME {time}</span>
        </div>
    );
}
export default UmeLocation;
