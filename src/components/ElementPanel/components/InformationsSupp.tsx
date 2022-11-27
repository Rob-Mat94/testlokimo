import { Spoiler } from "@mantine/core";
import { FaCheck } from "react-icons/fa";

export default function InformationsSupp({element}){

    const getEtage =(etage : number) => {
        switch(etage){
            case 0:
                return "rez-de-chaussée"
            case 1:
                return "premier étage";
            case 2:
                return "deuxième étage";
            case 3:
                return "troisième étage"
            default:
                return etage.toString() + " étages"
        }
    }
    return <div className='flex flex-col w-full md:w-1/2 py-1 md:py-8'>
        <h2 className='font-outfit text-[20px]'>Informations complémentaires</h2>
        <Spoiler maxHeight={100} showLabel="Plus d'informations" hideLabel="Voir moins" className="mt-4" classNames={{ control: 'underline underline-offset-2 font-medium text-black text-sm font-outfit pt-3' }} >
            <ul className='list-disc pl-5'>
                {element.data.heating && <li>{`Chauffage : ${element.data.heating}`}</li>}
                {element.data.reference && <li>{`Référence : ${element.data.reference}`}</li>}
                {element.data.yearOfConstruction && <li>{`Construit en ${element.data.yearOfConstruction}`}</li>}
                {element.data.exposition && <li>{`Exposition : ${element.data.exposition}`}</li>}
                {(element.data.balconyQuantity !== undefined && element.data.balconyQuantity > 0) && <li>{`${element.data.balconyQuantity} ${element.data.balconyQuantity > 1 ? "balcons" : "balcon"}`}</li>}
                {(element.data.terracesQuantity !== undefined && element.data.terracesQuantity > 0) && <li>{`${element.data.terracesQuantity} ${element.data.terracesQuantity > 1 ? "terrasses" : "terrasse"}`}</li>}
                {element.data.isRecent && <li><div className="flex space-x-2 place-items-center"><span>{`Bien récent`}</span><FaCheck size={16} className="bg-black text-white p-1 rounded-full" /></div></li>}
                {element.data.gardenSurfaceArea && <li>{`Surface du jarding : ${element.data.gardenSurfaceArea}m²`}</li>}
                {element.data.floor >= 0 && <li>{`Situé au ${getEtage(element.data.floor)}`}</li>}
                {element.data.isInStudentResidence && <li>{"Résidence étudiante"}</li>}
            </ul>
        </Spoiler>
    </div>
}