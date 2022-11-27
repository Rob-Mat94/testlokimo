import {  Modal } from "@mantine/core";
import {  useEffect, useRef, useState } from "react";
import { FaBuilding, FaHome } from "react-icons/fa";
import { GoSettings } from 'react-icons/go'
import RootObject from "../../../../model/interfaces";
import Equipements from "./components/Equipements";
import Property from "./components/Property";
import RangeSliderPrice from "./components/RangeSlider";
import Selector from "./components/Selector";
import { filterEquipement, filterPrice, filterProperty } from "../../../../utils/filter"
import { HiX } from "react-icons/hi";

export default function Filter({data, setData, original_data}){
    const [openFilter, setOpenFilter] = useState<boolean>(false);
    const [filteredData, setFilteredData] = useState<RootObject[]>(data);
    
    const isInitialMount = useRef(true);

    // filtres 
    //prix
    const MAX_PRICE = 700000;
    const MIN_PRICE = 1000;
    const [rangePrice, setRangePrice] = useState<[number, number]>([MIN_PRICE, MAX_PRICE]) 

    //propriétés
    const [propertyFilters, setPropertyFilters] = useState([{ label: "Maison", icon: <FaHome size={20} />, selected: false }, { label: "Appartement", icon: <FaBuilding size={20} />, selected: false }])
    // chambres et lits
    const [bedroomsQuantity, setBedRoomsQuantity] = useState<null | number>(null)
    const [bathroomsQuantity, setBathRoomsQuantity] = useState<null | number>(null)

    // equipements
    const [equipements, setEquipements] = useState<string[]>([]);


    const applyFilter = () => {
        setData([...filteredData]);
        setOpenFilter(false);
    }

   
    const resetFilters = () => {
        setFilteredData([...original_data]);
        setBedRoomsQuantity(null);
        setBathRoomsQuantity(null);
        setRangePrice([MIN_PRICE, MAX_PRICE]);
        setPropertyFilters([{ label: "Maison", icon: <FaHome size={20} />, selected: false }, { label: "Appartement", icon: <FaBuilding size={20} />, selected: false }]);
        setEquipements([]);
    }

    useEffect(() => {
        if(isInitialMount.current){
            isInitialMount.current = false;
           
        }
        else {
            let data: RootObject[] = [...original_data];
            data = filterPrice(rangePrice, data, MAX_PRICE)
            data = filterProperty(data, propertyFilters)

            if (bedroomsQuantity !== null) {
                data = data.filter((element) => bedroomsQuantity === 8 ? element.data.bedroomsQuantity >= bedroomsQuantity : element.data.bedroomsQuantity == bedroomsQuantity)
            }

            if (bathroomsQuantity !== null) {
                data = data.filter((element) => {
                    if (element.data.bathroomsQuantity) {
                        return element.data.bathroomsQuantity === bathroomsQuantity
                    }
                })
            }

            data = filterEquipement(equipements, data);
            
            setFilteredData([...data]);
        }
      

    }, [rangePrice, propertyFilters, bathroomsQuantity, bedroomsQuantity, equipements]) 

    return <>
        <Modal
            opened={openFilter}
            onClose={() => setOpenFilter(false)}
            overlayOpacity={0.3}
            title="Filtres"
            overflow="inside"
            transition="slide-up"
            transitionDuration={500}
            classNames={{ title: "font-bold font-outfit text-[20px] ", header: "mb-0 p-5 border-b ", close: "focus:outline-none focus:ring-0", modal: "w-[100%]  sm:w-[70%] md:w-[55%] lg:w-[60%] p-0 relative rounded-lg", body: "px-4 pt-4 pb-0 ", inner: " px-0 pt-4 pb-0 md:px-4 md:py-[48px]" }}
            centered
        >
            <div className="flex flex-col">
                <div className="flex flex-col space-y-4 pt-5 pb-10">
                    <h2 className="text-2xl">Prix</h2>
                    <RangeSliderPrice MAX={MAX_PRICE} MIN={MIN_PRICE} setRangePrice={setRangePrice} rangePrice={rangePrice}/>
                </div>


                <div className="border-t py-5">
                    <h2 className="text-2xl">Type de bien</h2>
                  <Property propertyFilters={propertyFilters} setPropertyFilters={setPropertyFilters}/>
                </div>

                <div className="border-t py-5">
                    <h2 className="text-2xl">Chambres et lits</h2>
                    <Selector value={bedroomsQuantity} setValue={setBedRoomsQuantity} label={"Chambres"}/>
                    <Selector  value={bathroomsQuantity} setValue={setBathRoomsQuantity} label={"Salles de bain"}/>
                </div>

                <div className="border-t pt-5 w-full">
                    <h2 className='text-left font-outfit text-2xl'>{"Équipements"}</h2>
                    <Equipements value={equipements} setValue={setEquipements}/>
                </div>


                <div className="sticky bottom-[0.02rem] col-span-2 flex justify-end w-full place-items-center space-x-3 z-10 place-content-center py-2 px-2 ">
                    { filteredData.length !== original_data.length && <div className="flex space-x-1 place-items-center cursor-pointer bg-gray-400 text-white p-2 text-sm rounded-lg" onClick={resetFilters}>
                            <span>{"Effacer"}</span>
                            <HiX />
                        </div>}
                   
                    <button className={`${filteredData.length > 0 ? "bg-black" : "bg-gray-500"} text-white p-2 rounded-lg text-sm`} disabled={filteredData.length <= 0} onClick={applyFilter}>
                        {`Afficher ${filteredData?.length === original_data.length ? `plus de ${filteredData?.length}` : `${filteredData?.length}`} résultats`}
                    </button>
                </div>
            </div>
        </Modal>
        <div
            onClick={() => setOpenFilter(true)}
            className="cursor-pointer  flex space-x-2 items-center border border-blue text-blue py-2 px-3 rounded-md hover:bg-gray-100"
        >
            <GoSettings />

            <span className="hidden md:block">Filtres</span>
        </div> 
    </>
}