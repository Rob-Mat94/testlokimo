 import {Marker} from "react-map-gl"
import { HiLocationMarker } from 'react-icons/hi'
import {  useState } from 'react';
import HoverCard from "./HoverCard";

export default function Markerloc({ marker, mapReference , setSelectedMarker}) {
    const [showDetails, setShowDetails] = useState(false);

    const handleClick = () => {
        setSelectedMarker(true);
        setTimeout(() => setShowDetails(true), 200)

        mapReference.current?.flyTo({
            center: [marker.position.lng, marker.position.lat],
            duration: 1500,
            zoom: 15.5,
            essential: true
        })
    }

    return  <Marker key={marker.good_id} latitude={marker?.position?.lat} longitude={marker?.position?.lng}>
                    <HiLocationMarker onClick={handleClick} className="!cursor-pointer" color='red' size={20} />
                    {showDetails && <HoverCard setVisible={setShowDetails} marker={marker}/>}
            </Marker>
          
}