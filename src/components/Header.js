import React from "react";
import menuIcon from '../icons/menu_icon.svg'
import homeIcon from '../icons/home_icon.svg'
import '../style-sheets/header.css'
import { DropDownMenu } from './DropDownMenu'
import { MobileMenu } from './MobileMenu'


function Header() {
    //La función onClickMenuIcon muestra y esconde el menú móvil con el evento clic en el ícono del menú
    function onClickMenuIcon() {
        const mobileMenu = document.getElementById('mobileMenu');
            mobileMenu.style.display = 'flex'
    }

    return(
        <header>
            <img id="homeIcon" alt="icono de inicio" src={ homeIcon } />
            <p id="codews">CODEWS</p>
            <img id="menuIcon" alt="icono de menu" src={ menuIcon } onClick={ onClickMenuIcon } />
            <DropDownMenu />
            <MobileMenu />
        </header>
    )
}

export { Header }