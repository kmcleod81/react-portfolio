import React from 'react';

import './portfolio.css';
import { SideNav } from './../SideNav/SideNav';
import { SectionContainer } from './../SectionContainer/SectionContainer';

export const Portfolio = ({
    handleSectionClick,
    selectedHeading,
    selectedQuote,
    selectedSection,
    about }) => {
    return (
        <div className="portfolio-container">
            <div className="sidenav-container">
                <SideNav
                    handleSectionClick={handleSectionClick}
                />
            </div>
            <div className="main-section-container">
                <SectionContainer
                    selectedSection={selectedSection}
                    selectedHeading={selectedHeading}
                    selectedQuote={selectedQuote}
                    about={about} />
            </div>
        </div>
    );
};
