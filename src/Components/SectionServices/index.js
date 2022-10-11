import { useEffect } from "react";
import "./services.css";
import { FaRegCheckSquare } from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css';



export default function SectionServices(){

    useEffect(() =>{
        Aos.init({ duration: 2000})
    })

    return(
        <div className="containerSectionServices">
            <div className="rowServices" id="services">
                <div className="colServicesTexto" data-aos="fade-right">
                    <h2>Prototipação e desenvolvimento de Landing Pages, criação e manutenção de Sistemas Web.</h2>
                    <p><FaRegCheckSquare className="iconServices"/> Custo/Benefício</p>
                    <p><FaRegCheckSquare className="iconServices"/> Entrega Rápida</p>
                    <p><FaRegCheckSquare className="iconServices"/> Excelente suporte ao cliente</p>
                    <p><FaRegCheckSquare className="iconServices"/> Segurança no Pagamento</p>
                    <a href="https://wa.me/5581998059073?text=Olá, gostaria de realizar um orçamento." target="_blank">
                        CONTRATAR SERVIÇOS
                    </a>
                </div>
                <div className="colServices" data-aos="fade-right">
                    <img src="https://i.postimg.cc/Nj1VMpgB/LD0005898603-1-0005909923-removebg-preview.png" alt="logo-notebook"/>
                </div>
        </div>
        </div>
    );
}