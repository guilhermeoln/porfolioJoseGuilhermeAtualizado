import { useEffect } from "react";
import "./initial.css";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Aos from 'aos';
import 'aos/dist/aos.css';


export default function SectionInitial(){

    useEffect(() =>{
        Aos.init({ duration: 2000})
    },[])

    return(
        <div className="containerSectionInitial">
            <h1 data-aos="fade-right">JOSÉ GUILHERME</h1>
            <h3 data-aos="fade-right">Desenvolvedor Front-End</h3>
            <div className="containerBtnsInitial" data-aos="fade-right">
                <a href="https://www.linkedin.com/in/jos%C3%A9-guilherme-763aa0232/" target="_blank"className="btnLinkedin">
                    <FaLinkedinIn />
                </a>
                <a href="https://github.com/guilhermeoln" target="_blank" className="btnGitHub">
                    <FaGithub />
                </a>
            </div>
        </div>
    );
}