import { useEffect } from "react";
import "./projects.css";
import Aos from 'aos';
import 'aos/dist/aos.css';



export default function SectionProjects(){
    useEffect(() =>{
        Aos.init({ duration: 2000})
    },[])

    return(
        <div className="containerSectionProjects" data-aos="fade-right">
            <div className="rowSectionProjects">
                <div className="cardProjects">
                    <div className="titleCardProjects">
                        <img src="https://i.postimg.cc/9fMKr3bZ/sistapp.jpg" alt="logo-card" />
                    </div>
                    <div className="textCardProjects">
                        <p>
                            Sistema Web desenvolvido em ReactJS com o intuito de monitoração de Provas Práticas veículares.
                        </p>
                    </div>
                    <div className="textCardProjects">
                        <a href="">PRÉVIA</a>
                    </div>
                </div>
                <div className="cardProjects">
                    <div className="titleCardProjects">
                        <img src="https://i.postimg.cc/YCpYNMJG/Whats-App-Image-2022-10-11-at-11-51-22.jpg" alt="logo-card" />
                    </div>
                    <div className="textCardProjects">
                        <p>
                            Landing Page desenvolvida em ReactJS + EmailJS para um studio de Pilates.
                        </p>
                    </div>
                    <div className="textCardProjects">
                        <a href="https://venturapilates.netlify.app/" target="_blank">ACESSAR</a>
                    </div>
                </div>
                <div className="cardProjects">
                    <div className="titleCardProjects">
                        <img src="https://i.postimg.cc/hPM0h2jq/mariliagomes.jpg" alt="logo-card" />
                    </div>
                    <div className="textCardProjects">
                        <p>
                            Sistema Web desenvolvido em ReactJS + FireBase, o projeto consiste em um prontuário online.
                        </p>
                    </div>
                    <div className="textCardProjects">
                        <a href="https://mariliagomes.netlify.app/" target="_blank">ACESSAR</a>
                    </div>
                </div>
            </div>
            <div className="rowBtnProjects">
                <a href="https://github.com/guilhermeoln?tab=repositories" target="_blank">VER MAIS</a>
            </div>
        </div>
    );
}