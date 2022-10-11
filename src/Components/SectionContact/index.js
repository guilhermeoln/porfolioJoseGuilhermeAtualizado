import { useEffect } from "react";
import "./contact.css";
import logoSectionContact from '../../assets/img/logoAbout.jpg';
import { FaWhatsapp, FaMailBulk, FaLinkedinIn} from "react-icons/fa";
import Aos from 'aos';
import 'aos/dist/aos.css';



export default function SectionContact(){

    useEffect(() =>{
        Aos.init({ duration: 2000})
    },[])

    return(
        <div className="containerSectionContact" id="contato">
            <div className="formSectionContact" data-aos="fade-right">
                <div className="headerContact">
                    <h2>Deixe uma mensagem</h2>
                    <p>Irei responder o mais rápido possível.</p>
                </div>
                <div className="formContact">
                    <input type="text" placeholder="Digite o seu nome" />
                    <input type="email" placeholder="Digite o seu email" />
                    <textarea placeholder="Digite uma mensagem"></textarea>
                    <button>ENVIAR</button>
                </div>
            </div>
            <div className="textSectionContact" data-aos="fade-right">
                <img src={logoSectionContact} alt="logo-contact"/>
                <p><FaWhatsapp className="iconContact"/>(81)99805-9073</p>
                <p><FaMailBulk className="iconContact"/>guilhermedev2002@gmail.com</p>
                <p><FaLinkedinIn className="iconContact" />José Guilherme</p>
            </div>
        </div>
    );
}