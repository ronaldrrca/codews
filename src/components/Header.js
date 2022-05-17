import React from "react";
import menuIcon from '../icons/menu_icon.svg'
import homeIcon from '../icons/home_icon.svg'
import '../style-sheets/header.css'
import { DropDownMenu } from './DropDownMenu'


function Header() {
    return(
        <header>
            <img id="homeIcon" alt="icono de inicio" src={ homeIcon } />
            <p id="codews">CODEWS</p>
            <img id="menuIcon" alt="icono de inicio" src={ menuIcon } />
            <DropDownMenu />
        </header>
    )
}

export { Header }