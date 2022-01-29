import React from 'react';

import './sidenav.css';

export const SideNav = ({ handleSectionClick }) => {
    return (
        <div className="sidenav">
            <img
                src="https://avatars2.githubusercontent.com/u/59838936?s=460&u=f969aba5b540e23e9381ea6c4d103fc4521b158e&v=4"
                className="avatar"
                alt="avatar"
            />
            <h2 className="main-name">Karla McLeod</h2>
            <p className="subtitle">"Web Developer/Graphic Designer<br />looking to learn as much as possible."</p>
            <div className="sections-list">
                <p className="section-list-element" onClick={() => handleSectionClick("about")}>About Me</p>
                <p className="section-list-element" onClick={() => handleSectionClick("skills")}>Skills</p>
                <p className="section-list-element" onClick={() => handleSectionClick("projects")}>Projects</p>
                {/* <p className="section-list-element" onClick={() => handleSectionClick("projects")}>Contact</p> */}
            </div>
        </div>
    );
};