import React from "react";
import ProgressBar from "./ProgressBar";

function Languages() {
    const state = {
        languages: [
            { id: 1, value: "Javascript", xp: 1 },
            { id: 2, value: "Css", xp: 1 },
            { id: 3, value: "Html", xp: 1 },
            { id: 4, value: "React", xp: 0.5 },
        ],
        frameworks: [
            { id: 1, value: "Bootstrap", xp: 1 },
            { id: 2, value: "Symphony", xp: 0.5 },
            { id: 3, value: "Sass", xp: 1 },
        ]
    }
    let { languages, frameworks } = state;

    return (
        <div className="languagesFramework">
            <ProgressBar languages={languages}
                className="languagesDisplay"
                title="languages" />
            <ProgressBar
                languages={frameworks}
                title="frameworks & bibliothèques"
                className="frameworksDisplay"
            />
        </div>
    )
};

export default Languages;