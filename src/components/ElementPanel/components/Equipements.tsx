import { Spoiler } from "@mantine/core";
import { FaIntercom, FaParking, FaSnowflake, FaSun, FaSwimmingPool, FaToilet, FaTree, FaWifi, FaWineGlassAlt } from "react-icons/fa";
import { Data } from "../../../model/interfaces";
import { GrElevator } from "react-icons/gr"
import { RiAlarmWarningLine } from "react-icons/ri"
import { MdBalcony, MdEmojiPeople, MdFireplace } from "react-icons/md";
export default function Equipements ({element}){
 
    const data : Data  = element.data;

    return <div className='flex flex-col py-8 w-full md:w-1/2'>
        <h2 className='font-outfit text-[20px]'>Equipements</h2>
        <Spoiler maxHeight={85} showLabel="En savoir plus" hideLabel="Voir moins" className="mt-4" classNames={{ control: 'underline underline-offset-2 font-medium text-black text-sm font-outfit pt-3' }} >
            <div className='grid grid-cols-2 gap-y-2 whitespace-nowrap'>
                <div className='flex items-center space-x-2'>
                    {<FaWifi />}
                    <span className={`${data.opticalFiberStatus == "deploye" ? "" : "line-through"}`}>{"Fibre"}</span>
                </div>
                <div className='flex items-center space-x-2'>
                    {<FaSnowflake />}
                    <span className={`${data.hasAirConditioning ? "" : "line-through"}`}>{"Air conditionné"}</span>
                </div>
                <div className='flex items-center space-x-2'>
                    {<FaTree />}
                    <span className={`${data.hasGarden ? "" : "line-through"}`}>{"Jardin"}</span>
                </div>
                <div className='flex items-center space-x-2'>
                    {<FaSwimmingPool />}
                    <span className={`${data.hasPool ? "" : "line-through"}`}>{"Piscine"}</span>
                </div>
                <div className='flex items-center space-x-2'>
                    {<FaParking />}
                    <span className={`${data.parkingPlacesQuantity !== undefined && data.parkingPlacesQuantity > 1 ? "" : "line-through"}`}>{"Parking"}</span>
                </div>
                <div className='flex items-center space-x-2'>
                    {<RiAlarmWarningLine />}
                    <span className={`${data.hasAlarm ? "" : "line-through"}`}>{"Alarme"}</span>
                </div>
                <div className='flex items-center space-x-2'>
                    {<FaWineGlassAlt />}
                    <span className={`${data.hasCellar ? "" : "line-through"}`}>{"Cave"}</span>
                </div>
                <div className='flex items-center space-x-2'>
                    {<MdFireplace />}
                    <span className={`${data.hasFirePlace ? "" : "line-through"}`}>{"Cheminée"}</span>
                </div>
                <div className='flex items-center space-x-2'>
                    {<FaIntercom />}
                    <span className={`${data.hasIntercom ? "" : "line-through"}`}>{"Interphone"}</span>
                </div>
                <div className='flex items-center space-x-2'>
                    {<FaSun />}
                    <span className={`${data.hasTerrace ? "" : "line-through"}`}>{"Terrasse"}</span>
                </div>
                <div className='flex items-center space-x-2'>
                    {<FaToilet />}
                    <span className={`${data.hasSeparateToilet ? "" : "line-through"}`}>{"Toilettes séparés"}</span>
                </div>
                <div className='flex items-center space-x-2'>
                    {<GrElevator />}
                    <span className={`${data.hasElevator ? "" : "line-through"}`}>{"Ascenseur"}</span>
                </div>
                <div className='flex items-center space-x-2'>
                    {<MdEmojiPeople />}
                    <span className={`${data.hasCaretaker ? "" : "line-through"}`}>{"Concierge"}</span>
                </div>
                <div className='flex items-center space-x-2'>
                    {<MdBalcony />}
                    <span className={`${data.hasBalcony ? "" : "line-through"}`}>{"Balcon"}</span>
                </div>
            
            </div>
        </Spoiler>
    </div>
}