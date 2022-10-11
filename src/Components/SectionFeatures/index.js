import { useEffect } from 'react';
import './features.css';
import { FaMobileAlt } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';
import { FaMoneyBill } from 'react-icons/fa'; 
import Aos from 'aos';
import 'aos/dist/aos.css';



export default function SectionFeatures(){

    useEffect(() =>{
        Aos.init({ duration: 2000})
    },[])


    return(
        <div className="containerSectionFeatures" data-aos="fade-right">
            <div className='cardFeatures'>
                <div className='titleCard'>
                    <FaMobileAlt className='iconCard'/>
                    <h4>Altamente Responsivo</h4>
                </div>
                <div className='textCard'>
                    <p>Sistemas adaptados a qualquer dispositivo que os usuários estejam usando 
                        , com o intuito de facilitar a sua visualização.</p>
                </div>
            </div>
            <div className='cardFeatures' >
                <div className='titleCard'>
                    <FaLock className='iconCard'/>
                    <h4>Segurança Integrada</h4>
                </div>
                <div className='textCard'>
                    <p>Desenvolvimento de sistemas altamente seguros.</p>
                </div>
            </div>
            <div className='cardFeatures'>
                <div className='titleCard'>
                    <FaMoneyBill className='iconCard'/>
                    <h4>Custo/Benefício</h4>
                </div>
                <div className='textCard'>
                    <p>Sistemas de alta qualidade com um ótimo Custo/Benefício.</p>
                </div>
            </div>
        </div>
    );
}