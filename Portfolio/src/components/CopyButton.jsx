import React, { useState } from "react";

const CopyButton = ({textToCopy}) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = (e) => {
        e.preventDefault();
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                setCopied(true);
                setTimeout(() => setCopied(false), 2000); // Återställ status efter 2 sekunder
            })
            .catch(err => {
                console.error("Misslyckades att kopiera: ", err);
            });
    };

    return (
        <div>
            <a href="#" onClick={handleCopy}>
                {copied ? "Copied!" : "Mail"}
            </a>
        </div>
    );

};

export default CopyButton;
