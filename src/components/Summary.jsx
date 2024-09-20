import React from "react";

function Summary() {
    return (
        <div className="content summary">
            <img src={require("../assets/hawks_room.jpg")} alt="Blackhawks Dressing Room" />
            <ul>
                <li>
                    Hi, I'm Michael Tanel and welcome to my site! I have over 5 years experience as a software developer, and have a passion for
                    creating software solutions to business problems. I graduated with a bachelor's degree in Computer Engineering from Queen's
                    University.
                </li>
                <li>
                    I am currently a Team Lead and software developer, working in client services on a large scale business banking application.
                    Previously, I worked as a software developer for a B2P product, and as a freelance IT/software consultant. Jumping around between
                    different projects, technologies, and development processes have enabled me to adapt quickly to changing environments and pick up
                    new technologies to get the job done.
                </li>
                <li>
                    I am open to opportunities to work as a software developer where I can contribute to exciting projects, help the company achieve
                    their business goals, and develop software that solves real-world problems.
                </li>
            </ul>
        </div>
    );
}

export default Summary;
