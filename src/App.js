import { useEffect, useState } from "react";
import Header from "./Components/Header";
import SectionInitial from "./Components/SectionInitial";
import SectionAbout from "./Components/SectionAbout";
import SectionServices from "./Components/SectionServices";
import SectionFeatures from "./Components/SectionFeatures";
import SectionProjects from "./Components/SectionProjects";
import SectionContact from "./Components/SectionContact";

function App() {

  const [ativarHeader, setAtivaHeader] = useState(false);

  useEffect(() =>{
    
    function posicaoScroll(){
      if(window.scrollY > 40){
        setAtivaHeader(true);
      } else {
        setAtivaHeader(false);
      }
    }
    
    window.addEventListener("scroll", posicaoScroll);
  },[])

  return (
    <div>
      <Header acao={ ativarHeader }/>
      <SectionInitial />
      <SectionAbout />
      <SectionServices />
      <SectionFeatures />
      <SectionProjects />
      <SectionContact />
    </div>
  );
}

export default App;
