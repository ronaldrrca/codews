import React from "react";
import '../style-sheets/contactanos.css'

function Contactanos() {
    return(
         <main>
            <h1 className="pageTitle">Contáctanos</h1>
            <div id="contactWrapContainer">
                <div id="contactInfo">
                    <p>Solicita una propuesta</p>
                    <ul>
                        <li>Páginas web</li>
                        <li>Sitios web</li>
                        <li>Landing pages</li>
                        <li>Aplicaciones web</li>
                    </ul>
                    <p id="noCost">Sin costo ni compromisos</p>
                    <p id="conditions">(Aplican condiciones)</p>
                </div>
                <form>
                    <label>Nombre*</label>
                    <input type='text' required autoFocus></input>
                    <label>Email*</label>
                    <input type='email' required></input>
                    <label>Teléfono</label>
                    <input type='text' placeholder="Opcional"></input>
                    <label>Mensaje*</label>
                    <textarea type='text' required placeholder="Escriba aquí su mensaje"></textarea>
                    <p id="required">* Campos requeridos</p>
                    <input type='submit' value='Enviar'></input>
                </form>
                
            </div>
            
        </main>
     
    )
}

export { Contactanos }