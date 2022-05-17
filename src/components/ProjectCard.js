import React from "react";
import '../style-sheets/projectCard.css'
import { NavLink } from 'react-router-dom';

function ProjectCard(props) {
    return(
        <figure className="projectCard">
        <NavLink to="/proyectos">
            <img className="projectCard_img" src={props.src} alt={props.alt}/>
        </NavLink>
            
            <h3>{props.projectTitle}</h3>   
            <div className="projectCard_lineDecoration"></div>
        </figure>
    )
}

export { ProjectCard }