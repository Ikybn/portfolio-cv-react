import React from "react";

const Hobbies = () => {
    return (
        <div className="hobbies">
            <h3>Hobbies</h3>
            <ul>
                <li className="hobby">
                    <i className="fas fa-sport"></i>
                    <span>Cuisiner</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-musique"></i>
                    <span>Smooth Jazz 80's</span>
                </li>
                <li className="hobby">
                    <i className="fas fa-informatique"></i>
                    <span>Technologies & innovations</span>
                </li>
            </ul>
        </div>
    );
};

export default Hobbies;