import React from 'react';

import './portfolio.css';
import { SideNav } from './../SideNav/SideNav';


export const Portfolio = ({
    handleSectionClick,
    selectedHeading,
    selectedQuote,
    selectedSection,
    about,
    skills,
    projects }) => {
    return (
        <div className="portfolio-container">
            <div className="sidenav-container">
                <SideNav
                    handleSectionClick={handleSectionClick}
                />
            </div>
        </div>
    );
};
