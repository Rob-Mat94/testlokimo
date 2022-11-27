import { useState } from "react";
import { BiBath, BiBed } from "react-icons/bi";
import InformationPanel from "../../ElementPanel/ElementPanel";

export default function HoverCard ({marker, setVisible}) {

    const [open, setOpenPanel] = useState<boolean>(false);
    
    return <>
    <InformationPanel data={marker} city={""} setIsOpen={(visible : boolean) => {setOpenPanel(visible); setVisible(visible)}} isOpen={open}/>
        <div className="absolute top-6 -left-[400%] md:left-1" onMouseLeave={() =>{ if(!open) setVisible(false)}}>
        <div className="flex flex-col md:flex-row bg-white border cursor-pointer rounded-md w-[200px] md:w-[300px] p-3 shadow-md relative justify-between">
            <div className="flex flex-col">
                <span className="text-base">{`${marker.house ? 'Maison' : marker.rooms > 0 ? 'Appartement T' + marker.rooms : 'Studio'}`}</span>
                <span className="text-sm">{`${marker.price.toLocaleString()} €`}</span>
                <div className="flex space-x-2 text-center justify-start place-content-center text-gray-500">
                    <span className="text-sm">{`${marker.surface} m²`}</span>
                    {
                        marker.rooms > 1 &&
                        <>
                            <span className="border"></span>
                            <span className="text-sm">{`${marker.rooms} pièces`}</span>
                        </>
                    }

                </div>
                <div className="flex space-x-2 text-md w-full">
                    {
                        marker.data.bathroomsQuantity && <div className="flex place-items-center space-x-1">
                            <BiBath />
                            <span className="text-sm">{`${marker.data.bathroomsQuantity}`}</span>
                        </div>
                    }
                    {
                        marker.data.bedroomsQuantity && <div className="flex place-items-center space-x-1">
                            <BiBed />
                            <span className="text-sm">{`${marker.data.bedroomsQuantity}`}</span>
                        </div>
                    }
                </div>
            </div>
            <div className="flex flex-col place-content-end justify-between">
                <div className="justify-end hidden md:flex">
                        <span className="bg-pink-300 px-2 py-1 text-xs rounded-full text-white">{"Coup de coeur"}</span>
                </div>
                <button onClick={(e) => {e.stopPropagation(); setOpenPanel(true)} } className="bg-gray-100 text-gray-500 mx-auto mt-2 md:mt-0 hover:underline underline-offset-2 py-1 px-2 rounded-md">Plus d'informations</button>
            </div>
        </div>
    </div>
    </>
}