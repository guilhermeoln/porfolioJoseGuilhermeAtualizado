import "./contact.css";
import logoSectionContact from '../../assets/img/logoAbout.jpg';
import { FaWhatsapp, FaMailBulk, FaLinkedinIn} from "react-icons/fa";

export default function SectionContact(){
    return(
        <div className="containerSectionContact" id="contato">
            <div className="formSectionContact">
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
            <div className="textSectionContact">
                <img src={logoSectionContact} alt="logo-contact"/>
                <p><FaWhatsapp className="iconContact"/>(81)99805-9073</p>
                <p><FaMailBulk className="iconContact"/>guilhermedev2002@gmail.com</p>
                <p><FaLinkedinIn className="iconContact" />José Guilherme</p>
            </div>
        </div>
    );
}