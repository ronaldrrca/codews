import React from "react";
import mainImage768x446 from '../images/mainImage-768x446.webp'
import mainImage1200x696 from '../images/mainImage-1200x696.webp'
import mainImage1500x870 from '../images/mainImage-1500x870.webp'
import '../style-sheets/main.css'

function Main() {
    return(
        <main>
            <figure id="mainImageContainer">
                <div id="h1Start_container">
                    <div className="h1Start_blueDiv" id="h1Start_blueDiv1"></div>
                    <div className="h1Start_blueDiv" id="h1Start_blueDiv2"></div>
                    <h1 id="h1Start"><span>Desarrollo web</span><br/>Páginas<br/>Sitios<br/>Landing pages<br/>Aplicaciones web</h1>
                </div>
                <img className="mainImage" id="mainImage768x446" src={mainImage768x446} alt="imagen desarrolladores en oficina" />
                <img className="mainImage" id="mainImage1200x696" src={mainImage1200x696} alt="imagen desarrolladores en oficina" />
                <img className="mainImage" id="mainImage1500x870" src={mainImage1500x870} alt="imagen desarrolladores en oficina" />
            </figure>
            
        </main>
    )
}

export { Main }