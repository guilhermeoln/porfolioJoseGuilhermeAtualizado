import "./header.css";
import { FaNetworkWired } from "react-icons/fa";



export default function Header(props){
    return(
        <header className={props.acao ? "headerOn" : "headerOff"}>
            <div className="containerLogoHeader">
                <FaNetworkWired className="iconLogo"/>
            </div>
            <div className="containerNavHeader">
                <a href="#about">SOBRE</a>
                <a href="#services">SERVIÇOS</a>
                <a href="#contato">CONTATO</a>
            </div>
        </header>
    );
}