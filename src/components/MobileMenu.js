import React from "react";
import '../style-sheets/mobileMenu.css'
import { NavLink } from 'react-router-dom';
import closeIcon from '../icons/close_icon.svg'

function MobileMenu() {
    const closeMenu = ()=> document.getElementById('mobileMenu').style.display = 'none'
    return(
        <nav id="mobileMenu">
            <div id="mobileMenu_closeIcon_container"><img id="mobileMenu_closeIcon" src={ closeIcon } alt='icono de cerrar' onClick={ closeMenu } /></div>
            <NavLink to="/home" className={(navData)=>navData.isActive ? "activeMobile mobileMenu_item" : "mobileMenu_item" }>Inicio</NavLink>
            <NavLink to="/proyectos" className={(navData)=>navData.isActive ? "activeMobile mobileMenu_item" : "mobileMenu_item" }>Proyectos</NavLink>
            <NavLink to="/contactanos" className={(navData)=>navData.isActive ? "activeMobile mobileMenu_item" : "mobileMenu_item" }>Contáctanos</NavLink>
            <NavLink to="/blog" className={(navData)=>navData.isActive ? "activeMobile mobileMenu_item" : "mobileMenu_item" }>Blog</NavLink>
        </nav>
    )
}

export { MobileMenu }