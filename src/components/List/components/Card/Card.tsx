import { useEffect, useState } from "react"
import { BiBed, BiBath } from "react-icons/bi"
import { GoLocation } from "react-icons/go"
import RootObject  from "../../../../model/interfaces"
import {motion} from "framer-motion"
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io"
import InformationPanel from "../../../ElementPanel/ElementPanel"
import Heart from "./components/Heart"
import MoreInfo from "./components/MoreInfoBtn"
import ElementInformation from "./components/ElementInformation"
import Label from "./components/Label"
type Props = {
    element : RootObject
    index : number
}
const Card : React.FC<Props> =  ({element, index}) =>  {

    const [city,setCity]= useState<string>("")
    const [openInformation , setOpenInformation] = useState<boolean>(false);

    // Récupération du nom de la ville pour les cards affichées
    useEffect(() => {
        fetch('https://geo.api.gouv.fr/communes?code=' + element.city).then((r) => r.json().then(city =>setCity(city[0].nom)))
    },[])
 
    return (
    <>
        <InformationPanel isOpen={openInformation} setIsOpen={setOpenInformation} data={element} city={city}/>
        <motion.div variants={{rest : {opacity : 1, transition : {delay : 0.2 + index/100}}, hover : {}}} initial={{opacity : 0}} whileHover="hover" animate="rest"  className={"flex border cursor-pointer relative justify-between bg-white h-[200px] md:h-[190px] shadow-md rounded-lg mt-auto ml-5  p-5"}>
            <ElementInformation city={city} element={element}/>
            <div className="flex flex-col justify-center place-content-center">
                <div className="absolute top-5 right-4">                    
                  <Heart/>
                </div>
               <MoreInfo setOpenInformation={setOpenInformation}/>
               <Label element={element}/>
             </div>
        </motion.div>
    </>
    );
}

export default Card