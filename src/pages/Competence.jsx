import React from "react";
import Navigation from "../components/Navigation";
import Experience from "../components/competence/Experience";
import Hobbies from "../components/competence/Hobbies";
import Skills from "../components/competence/Languages";
import Buttons from "../components/Buttons";
import Mouse from "../components/Mouse";

const Competence = () => {
    return (
        <main>
            <Mouse />
            <div className="competence">
                <Navigation />
                <div className="competenceContent">
                    <Experience />
                    <Hobbies />
                    <Skills />
                </div>
                <Buttons left={"/"} right={"/projet-1"} />
            </div>


        </main>
    );
};

export default Competence;