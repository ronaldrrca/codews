import React from "react";
import mainImage768x446 from '../images/mainImage-768x446.webp'
import mainImage1200x696 from '../images/mainImage-1200x696.webp'
import mainImage1500x870 from '../images/mainImage-1500x870.webp'
import responsive768 from '../images/responsive-768p.webp'
import responsive900 from '../images/responsive-900p.webp'
import '../style-sheets/home.css'
import { RecentProject } from '../components/RecentProject'
import home_business_it_event from '../images/home-business-it-event.webp'
import home_construction from '../images/home-construction.webp'
import home_hairdressing_makeup from '../images/home-hairdressing-makeup.webp'
import home_lawyers_attorneys from '../images/home-lawyers-attorneys.webp'
import home_photography_studio from '../images/home-photography-studio.webp'
import home_ristorante from '../images/home-ristorante.webp'

function Home() {
    return(
        <main>
            <figure id="homeImageContainer">
                <div id="h1Start_container">
                    <div className="h1Start_blueDiv" id="h1Start_blueDiv1"></div>
                    <div className="h1Start_blueDiv" id="h1Start_blueDiv2"></div>
                    <h1 id="h1Start"><span>Desarrollo web</span><br/>Páginas<br/>Sitios<br/>Landing pages<br/>Aplicaciones web</h1>
                </div>
                <img className="homeMainImage" id="homeMainImage768x446" src={mainImage768x446} alt="imagen desarrolladores en oficina" />
                <img className="homeMainImage" id="homeMainImage1200x696" src={mainImage1200x696} alt="imagen desarrolladores en oficina" />
                <img className="homeMainImage" id="homeMainImage1500x870" src={mainImage1500x870} alt="imagen desarrolladores en oficina" />
                <p id="first_p_noMobil">Desarrollo web moderno y adaptativo a todos los dispositivos</p>
            </figure>
            <p id="first_p_mobil">Desarrollo web moderno y adaptable a todos los dispositivos</p>
            <p id="noCompite">"Sí su negocio no tiene presencia en la web, no compite"</p>
            <div id="responsive_proposal_container">
                <figure id="responsiveImg_container">
                   <img id="responsiveImg768" src={ responsive768 } alt="dispositivos con imagen de diseño adaptable" /> 
                   <img id="responsiveImg900" src={ responsive900 } alt="dispositivos con imagen de diseño adaptable" /> 

                    <div id="responsive_design"><p>Diseño adaptativo</p></div>
                </figure>
                <p id="proposal">Solicita una propuesta de desarrollo para tu negocio, sin costo y sin compromisos.</p>
            </div>
            <h2 className="start_sectionTitle">Proyectos recientes</h2>
            <section id="recentProjects">
                <RecentProject src={home_business_it_event} alt='pagina web de evento' projectTitle='EVENTO DE NEGOCIOS'/>
                <RecentProject src={home_construction} alt='pagina web de construccion' projectTitle='NEGOCIO DE CONSTRUCCIÓN'/>
                <RecentProject src={home_hairdressing_makeup} alt='pagina web de cuidado para el cabello' projectTitle='CUIDADO DEL CABELLO'/>
                <RecentProject src={home_lawyers_attorneys} alt='pagina web de abogados' projectTitle='ABOGADOS'/>
                <RecentProject src={home_photography_studio} alt='pagina web de estudio fotografico' projectTitle='ESTUDIO FOTOGRÁFICO'/>
                <RecentProject src={home_ristorante} alt='pagina web de restaurante' projectTitle='RESTAURANTE'/>
            </section>
            
        </main>
    )
}

export { Home }