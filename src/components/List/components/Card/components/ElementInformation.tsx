import { BiBath, BiBed } from "react-icons/bi";
import { GoLocation } from "react-icons/go";

export default function ElementInformation ({element, city}) {
    return <div className="flex flex-col space-y-2 ">
        <div className="flex flex-col space-y-1 place-content-center">
            {
                element.data.title ?
                    <span className="w-[180px] md:w-[250px] lg:[w-270px] font-medium whitespace-nowrap text-ellipsis overflow-hidden">
                        {element.data.title}
                    </span>
                    :
                    <span>{`${element.house ? 'Maison' : element.rooms > 0 ? 'Appartement T' + element.rooms : 'Studio'}`}</span>
            }
            <div className="flex place-items-center justify-start space-x-1">
                <span className="text-gray-400 text-sm whitespace-nowrap">{city}</span>
                <GoLocation className="text-gray-400" size={13} />
            </div>
            <span className="text-sm">{`${element.price.toLocaleString()} €`}</span>
        </div>
        <div className="flex space-x-2 text-center justify-start  whitespace-nowrap place-content-center">
            <span className="text-xs md:text-sm">{`${element.surface} m²`}</span>
            {
                element.rooms > 1 &&
                <>
                    <span className="border"></span>
                    <span className="text-xs md:text-sm">{`${element.rooms} pièces`}</span>
                </>
            }

        </div>
        <div className="flex space-x-2 text-md whitespace-nowrap w-full">
            {
                element.data.bathroomsQuantity && 
                <div className="flex place-items-center space-x-1">
                    <BiBath />
                    <span className="text-sm">{`${element.data.bathroomsQuantity}`}</span>
                </div>
            }
            {
                element.data.bedroomsQuantity && 
                <div className="flex place-items-center space-x-1">
                    <BiBed />
                    <span className="text-sm">{`${element.data.bedroomsQuantity}`}</span>
                </div>
            }

        </div>
    </div>
}