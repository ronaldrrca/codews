import React from "react";
import '../style-sheets/dropDownMenu.css'

function DropDownMenu() {
    return(
        <ul id="dropDownMenu">
            <a href="https://www.google.com/?hl=es"><li className="dropDownMenu_item">Inicio</li></a>
            <a href="https://www.google.com/?hl=es"><li className="dropDownMenu_item">Proyectos</li></a>
            {/* <a href="https://www.google.com/?hl=es"><li className="dropDownMenu_item">Nosotros</li></a> */}
            <a href="https://www.google.com/?hl=es"><li className="dropDownMenu_item">Blog</li></a>
            <a href="https://www.google.com/?hl=es"><li className="dropDownMenu_item">Contáctanos</li></a>
        </ul>
    )
}

export { DropDownMenu }