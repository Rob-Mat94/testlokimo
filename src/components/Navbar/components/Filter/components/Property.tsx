import { motion } from "framer-motion";
import { useState } from "react";
import { FaBuilding, FaHome } from "react-icons/fa";

export default function Property ({propertyFilters, setPropertyFilters}){

    return <div className='flex justify-start place-items-center space-x-5 m-3'>
        {
            propertyFilters.map((element, i) => (
                <motion.div key={i} onClick={() => {
                    let new_filters = propertyFilters;
                    new_filters[i].selected = !new_filters[i].selected;
                    setPropertyFilters([...new_filters]);
                }} whileTap={{ scale: 1.05 }} className={'flex flex-col rounded-lg p-3 space-y-2 cursor-pointer w-40 h-24 place-content-center hover:border-gray-500 ' + (element.selected ? 'border-gray-500 border-2 bg-gray-100' : 'border border-gray-300')}>
                    {element.icon}
                    <span className='text-sm md:text-lg'>{element.label}</span>
                </motion.div>
            ))
        }


    </div>
}