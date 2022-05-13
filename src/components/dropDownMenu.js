import React from "react";
import '../style-sheets/dropDownMenu.css'

function DropDownMenu() {
    return(
        <ul id="dropDownMenu">
            <a href="https://www.google.com/?hl=es"><li className="dropDownMenu_item">Item-1</li></a>
            <a href="https://www.google.com/?hl=es"><li className="dropDownMenu_item">Item-2</li></a>
            <a href="https://www.google.com/?hl=es"><li className="dropDownMenu_item">Item-3</li></a>
            <a href="https://www.google.com/?hl=es"><li className="dropDownMenu_item">Item-4</li></a>
            <a href="https://www.google.com/?hl=es"><li className="dropDownMenu_item">Item-5</li></a>
        </ul>
    )
}

export { DropDownMenu }