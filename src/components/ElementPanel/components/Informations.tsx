import { GoLocation } from "react-icons/go";

export default function Information ({element, city}){
    return <div className='flex flex-col p-5 space-y-1 place-content-center relative w-full md:w-1/2 '>

        <div className='flex mb-2 space-x-2'>
            {element.data.status.highlighted && <span className='bg-pink-400 px-2 py-1 w-28 rounded-full text-white text-sm '>{"Coup de coeur"}</span>}
            <span className={`${element.buy ? "bg-violet-400" : "bg-blue-500"} px-2 py-1 w-20 text-center rounded-full text-white text-sm`}>{`${element.buy ? "À vendre" : "À louer"}`}</span>
        </div>

        <span className='font-outfit text-[20px]'>{element.data.title ? element.data.title : (element.house ? 'Maison' : element.rooms > 0 ? 'Appartement T' + element.rooms : 'Studio')}</span>
        <div className="flex space-x-1 text-md  whitespace-nowrap w-full">
            {
                element.data.bedroomsQuantity && <div className="flex place-items-center space-x-1">

                    <span className="font-light">{`${element.data.bedroomsQuantity} ${element.data.bedroomsQuantity > 1 ? "chambres" : "chambre"}`}</span>
                </div>
            }
            {
                element.data.bathroomsQuantity &&
                <span className="font-light">{` - ${element.data.bathroomsQuantity} ${element.data.bathroomsQuantity > 1 ? "salles de bain" : "salle de bain"}`}</span>
            }

        </div>
        {city !== "" && <div className="flex place-items-center justify-start space-x-1">
            <span className="text-gray-400 text-md whitespace-nowrap">{`${city}`}</span>
            <GoLocation className="text-gray-400" size={13} />
        </div>}
        <span className="text-md">{`${element.price.toLocaleString()} €`}</span>
        <div className="flex space-x-2 text-center justify-start  whitespace-nowrap font-light text-sm place-content-center">
            <span>{`${(element.house ? 'Maison' : element.rooms > 1 ? 'Appartement' : 'Studio')}`}</span>
            <span className="border"></span>
            <span className="text-md">{`${element.surface} m²`}</span>

            {
                element.rooms > 1 &&
                <>
                    <span className="border"></span>
                    <span className="text-md">{`${element.rooms} pièces`}</span>
                </>
            }

        </div>
        {
            element.data.publicationDate &&
            <span className='bg-gray-100 w-40 text-sm rounded-lg px-2 py-1 !mt-3 text-gray-400'>{`Publié le ${new Date(element.data.publicationDate).toLocaleDateString()}`}</span>
        }

    </div>
}