import { useEffect } from "react";
import "./about.css";
import logoSectionAbout from '../../assets/img/logoAbout.jpg';
import { FaDownload } from "react-icons/fa";
import Aos from 'aos';
import 'aos/dist/aos.css';

export default function SectionAbout(){

    useEffect(() =>{
        Aos.init({ duration: 2000})
    },[])

    return(
        <div className="containerSectionAbout" id="about">
            <div className="logoAbout" data-aos="fade-right">
                <img src={logoSectionAbout} alt="logo"/>
            </div>
            <div className="textAbout" data-aos="fade-right">
                <p>
                    Me chamo <span>José Guilherme</span>, tenho 19 anos e sou estudante de Análise e Desenvolvimento de Sistemas. 
                    Estou sempre à procura de novos desafios que me levem a melhorar minhas competências, 
                    sou apaixonado pela área de desenvolvimento e pretendo me aprofundar cada dia mais. 
                    Minhas principais expertises são <span>Html</span>, <span>Css</span>, <span>C#</span>, 
                    <span> JavaScript</span>, <span>ReactJS</span>, 
                    consigo desenvolver interfaces elegantes com alto nível de responsividade.
                </p>
                <div className="areaBtnsAbout">
                    <a href="https://drive.google.com/u/0/uc?id=16D93enaa76ub1Qr3Je1JAMkWuF75cd7R&export=download" target="_blank">
                        <FaDownload />DOWNLOAD CV
                    </a>
                </div>
            </div>
        </div>
    );
}