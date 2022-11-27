import { RangeSlider } from "@mantine/core";
import { range } from "@mantine/hooks";
import { useState } from "react";
import RootObject from "../../../../../model/interfaces";


export default function RangeSliderPrice({ setRangePrice, rangePrice, MAX, MIN,  })  {
    
    return <div className="flex flex-col space-y-8 ml-3 mr-5 md:mr-0">
        <RangeSlider
            size={4}
            label={null}
            color={'dark'}
           /*  onChange={(value) => setRangePrice(value) } */
           onChangeEnd={(value) => setRangePrice(value)}
            className="sm:w-2/3 md:w-1/2 "
            classNames={{
                /* bar: 'bg-gradient-to-r from-[#000DBE] to-[#F161D2] ', */
                bar: 'bg-gradient-to-r from-gray-200 to-black ',
                thumb:
                    'bg-white h-4 w-4  shadow-md  border-[1px]',
            }}
            defaultValue={rangePrice}
            onChange={(value) => setRangePrice(value)}
            max={MAX}
            min={MIN}
            step={1000}
            marks={[
                { value: 150000, label: '150K €' },
                { value: 300000, label: '300K €' },
                { value: 500000, label: '500K €' },
                { value: 700000, label: '+700K €' },
            ]}
        />
        <div className="flex justify-between sm:w-2/3 md:w-1/2">
            <div className="flex flex-col border p-2 rounded-lg w-28">
                <span className="text-xs text-gray-400">Prix minimum</span>
                 <span className="text-sm">{rangePrice[0].toLocaleString()}€</span> 
            </div>
            <div className="flex flex-col border p-2 rounded-lg w-28">
                <span className="text-xs text-gray-400">Prix maximum</span>
                 <span className="text-sm">{`${rangePrice[1] === MAX ? "+" : ""} ${rangePrice[1].toLocaleString()} €`}</span> 
            </div>


        </div>
        </div>
}