import React from "react";
import '../style-sheets/dropDownMenu.css'
import { Link } from 'react-router-dom';

function DropDownMenu() {
    return(
        <nav id="dropDownMenu">
            <Link to="/home" className="dropDownMenu_item">INICIO</Link>
            <Link to="/proyectos" className="dropDownMenu_item">PROYECTOS</Link>
            <Link to="/contactanos" className="dropDownMenu_item">CONTACTANOS</Link>
            <Link to="/blog" className="dropDownMenu_item">BLOG</Link>
        </nav>
    )
}

export { DropDownMenu }