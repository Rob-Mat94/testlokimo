import 'mapbox-gl/dist/mapbox-gl.css'; 
import { useState } from 'react';
import { HiLocationMarker } from 'react-icons/hi';
import ReactMapGL, { Marker } from "react-map-gl"

export default function StaticMap({marker}){

    const [viewport, setViewPort] = useState({
        latitude: marker.lat,
        longitude: marker.lng,
        zoom: 14
    }) 
    
    return <>
        <ReactMapGL mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
             {...viewport}
             onMove={((vp) => setViewPort(vp.viewState))}
            attributionControl={false}
            maxZoom={15}
            minZoom={12}
            style={{  position: "relative" }}
            mapStyle="mapbox://styles/mapbox/streets-v9">
                <Marker latitude={marker.lat} longitude={marker.lng}>
                    <HiLocationMarker color={"red"} size={24} />
                </Marker>
        </ReactMapGL>
    </>

}