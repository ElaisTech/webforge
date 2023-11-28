import React from "react";
import SectionPicAndSection from "./sectionpicandtext";
import sampleImage from "../img/sample-image-Simba.jpg"
import ragazzoSpaesato from "../img/ragazzo-manga-illustrazione-spaesato.png"
import fabbro from "../img/fabbro.png"
import chevalier from "../img/cavaliere-armatura-fantasy-con-spada-e-scudo.png"
import Button from "./button";
import Whatsapp from "./floatingWhatsapp";



const HomeMain = () => {
    return (
        <div>
            {/* <Whatsapp /> */}
            <SectionPicAndSection className={'wrapper-one first-bg'} src={ragazzoSpaesato} alt={'come-aprire-un-sito-internet'} text={"Spaesato nell'immenso mondo di internet?"} imgClassName={'wrapped-image'}/>
            <div className="wrapper-center">
            <Button txt={'Contattaci subito!'} className={'btn absolute'} href={'https://wa.me/3703664224'} />
            </div>
            
            <SectionPicAndSection className={'wrapper-two second-bg'} src={chevalier} alt={'simba'} text={"Nessun problema! Noi ti staremo accanto e ti forniremo gli strumenti necessari per destreggiarti e forgiare la tua identità digitale, partendo dalle tue idee!"}  imgClassName={'wrapped-image'}/>
           
            <div className="wrapper-center">
            <Button txt={'Contattaci subito!'} className={'btn absolute'} href={'https://wa.me/3703664224'} />
            
            </div>

           <div>  
           <SectionPicAndSection className={'third-bg'} text={"Cosa posso forgiare per te oggi, viandante?"} src={fabbro}  imgClassName={'wrapped-img-forge'}/> 
           
         
           </div>
           <div className="wrapper-center md:flex-row ">
            
            <Button txt={'Sito Vetrina'} className={'btn'} href={"https://wa.me/3703664224/?text=Buon%20giorno%21%20Sarei%20interessato%20ad%20un%20sito%20vetrina%21"} />
            <Button txt={'Ecommerce'} className={'btn'} href={"https://wa.me/3703664224/?text=Buon%20giorno%21%20Sarei%20interessato%20ad%20un%20ecommerce%21"}/>
            <Button txt={'Blog'} className={'btn'} href={"https://wa.me/3703664224/?text=Salve%21%20Sarei%20interessato%20alla%20creazione%20di%20un%20Blog%21"}/>
            <Button txt={'Non saprei, consulenza'} className={'btn'} href={"https://wa.me/3703664224/?text=Salve%2C%20vorrei%20una%20consulenza%20per%20quanto%20riguarda%20la%20creazione%20di%20un%20sito%20per%20la%20mia%20attivit%C3%A0"}/>
            </div>
            
        </div>
    )
}

export default HomeMain