import React from "react";
import '../style-sheets/RecentProject.css'


function RecentProject(props) {
    return(
        <figure className="project">
            <a href="www.google.com">
                <img className="project_img" src={props.src} alt={props.alt}/>
            </a>
            <h3>{props.projectTitle}</h3>   
            <div className="project_lineDecoration"></div>
        </figure>
    )
}

export { RecentProject }