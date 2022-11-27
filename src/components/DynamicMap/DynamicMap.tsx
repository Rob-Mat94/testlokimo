import React, { useMemo, useState, useRef, useEffect } from 'react';
/* import json from "../data/data.json";
 */import ReactMapGL, { MapRef, Marker } from "react-map-gl"
import RootObject, { Position } from '../../model/interfaces'
import { HiLocationMarker } from 'react-icons/hi'
import 'mapbox-gl/dist/mapbox-gl.css'; 
import { Slider } from '@mantine/core';
import {distance} from "../../utils/math";
import Markerloc from './components/Marker';

export default function DynamicMap({data}){

    const [viewport, setViewPort] = useState({
        latitude: 47.2780468, 
        longitude: -1.8157647,
        zoom: 10
    }) 

    const [markers, setMarkers] = useState<RootObject[] | null>(null);
    const mapRef = useRef<MapRef>(null);
    const [userMarker, setUserMarker] = useState<null | Position>(null);
    const [range, setRange] = useState(1);
    const [selectedMarker, setSelectedMarker] = useState(false);

    useEffect(() => {        
        if(userMarker != null){   
           setMarkers(data.filter((element) => element.position != null).filter((marker) => distance(marker.position, userMarker) <= range * 1000))
        }
    },[userMarker, range])

    return (
        <div className='pt-[65px] md:pt-[75px]'>
            <ReactMapGL ref={mapRef} mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                {...viewport}
                onMove={evt => {
                    setViewPort(evt.viewState)
                }}
                attributionControl={false}
                onClick={(event) => { 
                    if(selectedMarker){
                        setSelectedMarker(false);
                        return;
                    }
                     setUserMarker({ lat: event.lngLat.lat, lng: event.lngLat.lng }); 
                        mapRef.current?.flyTo({
                            center: [event.lngLat.lng, event.lngLat.lat],
                            duration: 1000,
                            essential: true
                        }) 
                }}
                style={{ width: "100%", height: "100vh", position : "relative" }}
                mapStyle="mapbox://styles/mapbox/streets-v9">
                {
                    userMarker &&
                    <Marker latitude={userMarker.lat} longitude={userMarker.lng}>
                        <HiLocationMarker className='text-violet-600 cursor-pointer' size={20}/>
                    </Marker>
                }

                {
                    (userMarker !== null && markers !== null) && 
                    markers.map((marker) => {
                        return <Markerloc mapReference={mapRef} key={marker.good_id} marker={marker} setSelectedMarker={setSelectedMarker}/>;
                    }) 
                }

            </ReactMapGL>
            {
                userMarker != null && 
                <div className='absolute bottom-5 right-[50%] transform translate-x-[50%]'>
                    <div className="bg-white w-[300px] md:w-[500px] px-10 py-8 bg-opacity-90 rounded-lg cursor-pointer">
                            <Slider
                                color="violet"
                                className='opacity-100 cursor-pointer'
                                showLabelOnHover={false}
                                label={null}
                                onChange={(value) => setRange(value)}
                                max={10}
                                min={1}
                                defaultValue={range}
                                marks={[
                                    { value: 1, label: '1km' },
                                    {value : 3, label :'3km'},
                                    {value : 5, label:'5km'},
                                    {value:8, label:'8km'},
                                    {value: 10, label : '10km'}
                                ]}
                            />
                      
                    </div>
                </div>
            }
        </div>
    );
}
