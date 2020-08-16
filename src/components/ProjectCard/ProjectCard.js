import React from 'react'

import './project-card.css';

export const ProjectCard = ({ project }) => {
    return (
        <div className="project-card">
            <p><b>Name:</b> {project.name}</p><br />
            <p><b>Description:</b> {project.description}</p><br />
            <p><b>See it in Action:</b> <a target='_blank' href={project.link}>{project.link}</a> </p>
            <p><b>GitHub Repo:</b> <a target='_blank' href={project.ghlink}>{project.ghlink}</a> </p>
            <img
                src="https://avatars2.githubusercontent.com/u/59838936?s=460&u=f969aba5b540e23e9381ea6c4d103fc4521b158e&v=4"
                className="project-img"
                alt="project img"
            />
        </div>

    )
}



