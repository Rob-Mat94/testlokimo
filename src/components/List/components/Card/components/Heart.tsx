import { motion } from "framer-motion";
import { useState } from "react";
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io";

export default function Heart()  {

    const [isLiked, setIsLiked] = useState<boolean>(false);

    const animate = {
        scale: [1.25, 1, 1.25, 1], transition: { duration: 1 } 
    }

    const initial = {
        scale : 0
    }   

    return isLiked ?
        <motion.div onClick={(e) => { e.stopPropagation(); setIsLiked(false) }} initial={initial} animate={animate}>
            <IoIosHeart size={25} className="text-red-300" /> 
        </motion.div>
        :
        <IoIosHeartEmpty size={25} className="text-gray-400" onClick={(e) => { e.stopPropagation(); setIsLiked(true) }} />
}