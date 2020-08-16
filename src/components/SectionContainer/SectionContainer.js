import React from 'react';

import { About } from './../About/About';

import './section-container.css';

export const SectionContainer = ({
    selectedHeading,
    selectedQuote,
    selectedSection,
    about }) => {
    return (
        <div className="section-container">
            <div className="section-heading-container">
                <h1 className="main-heading">{selectedHeading}</h1>
                <p className="main-quote">{selectedQuote}</p>
            </div>
            <div className="section-component">
                {
                    {
                        about: <About bio={about.bio} />
                    }[selectedSection]
                }
            </div>
        </div>
    )
}