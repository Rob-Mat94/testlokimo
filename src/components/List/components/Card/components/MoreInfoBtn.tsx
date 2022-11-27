import { motion } from "framer-motion";

export default function MoreInfo ({setOpenInformation}){

    const slashMotion = {
        rest: { opacity: 0, ease: "easeOut", duration: 0.2, type: "tween", x: 10 },
        hover: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.4,
                type: "tween",
                ease: "easeIn"
            }
        }
    };

    return <>
        <motion.div className="z-40 right-0 hidden lg:block absolute" onClick={() => setOpenInformation(true)} variants={slashMotion}>
            <div className="flex place-items-center space-x-1 bg-gray-100 text-gray-500 p-2 rounded-l-md px-3 text-xs md:text-sm whitespace-nowrap">
                <span className="text-xs md:text-sm hover:underline underline-offset-2">{"Plus d'informations"}</span>
            </div>
        </motion.div>

        <div className="z-40 right-0  absolute">
            <div onClick={() => setOpenInformation(true)} className="flex lg:hidden place-items-center space-x-1 bg-gray-100 text-gray-500 p-2 rounded-l-md px-3 text-xs md:text-sm whitespace-nowrap">
                <span className="text-xs hover:underline underline-offset-2">{"Plus d'informations"}</span>
            </div>
        </div>
    </>
    
}