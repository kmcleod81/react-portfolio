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
                src={process.env.PUBLIC_URL + project.image}
                alt={project.name}
                className="project-img"
            />
        </div>

    )
}



