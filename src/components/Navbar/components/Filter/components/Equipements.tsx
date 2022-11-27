import { Checkbox } from "@mantine/core";
import { MdFireplace } from "react-icons/md"
import { FaParking, FaSwimmingPool, FaWineGlassAlt, FaTree, FaSun, FaWifi, FaTemperatureLow, FaSnowflake } from "react-icons/fa"
export default function Equipements ({value, setValue}){

    const EQUIPEMENTS = [
        { label: "Parking", icon: <FaParking size={18}/> },
        { label: "Jardin", icon: <FaTree size={18} /> },
        { label: "Piscine", icon: <FaSwimmingPool size={18}/>},
        { label: "Fibre", icon: <FaWifi size={18} /> },
        { label: "Cave", icon: <FaWineGlassAlt size={18}/> },
        { label: "Air conditionné", icon: <FaSnowflake size={18} /> },
        { label: "Terrasse", icon: <FaSun size={18}/>},
        { label: "Cheminée", icon: <MdFireplace size={18}/> },
       
    ];

    return <div className="grid grid-cols-2 w-full p-3 whitespace-nowrap">
        <Checkbox.Group
            value={value}
            onChange={setValue}
            color="dark"
        >
            {
                EQUIPEMENTS.map((e, i) => {
                    return <div key={i} className="flex place-items-center space-x-1 w-[100px]">
                        <Checkbox
                            key={i}
                            label={e.label}
                            value={e.label}
                            color="dark"
                            radius={"xs"}
                            size={"sm"}
                        />
                        <span className="pb-1.5">{e.icon}</span>
                    </div>
                  

                })
            }
        </Checkbox.Group>

    </div>
}