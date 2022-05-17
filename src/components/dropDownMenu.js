import React from "react";
import '../style-sheets/dropDownMenu.css'
import { NavLink } from 'react-router-dom';

function DropDownMenu() {
    return(
        <nav id="dropDownMenu">{/*NavLink permite establecer estilos al elemento ativo del menú */}
            <NavLink to="/home" className={(navData)=>navData.isActive ? "active dropDownMenu_item" : "dropDownMenu_item" }>INICIO</NavLink>
            <NavLink to="/proyectos" className={(navData)=>navData.isActive ? "active dropDownMenu_item" : "dropDownMenu_item" }>PROYECTOS</NavLink>
            <NavLink to="/contactanos" className={(navData)=>navData.isActive ? "active dropDownMenu_item" : "dropDownMenu_item" }>CONTACTANOS</NavLink>
            <NavLink to="/blog" className={(navData)=>navData.isActive ? "active dropDownMenu_item" : "dropDownMenu_item" }>BLOG</NavLink>
        </nav>
    )
}

export { DropDownMenu }