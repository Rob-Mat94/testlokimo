import { Modal } from '@mantine/core';
import RootObject from '../../model/interfaces';
import StaticMap from './components/StaticMap';
import 'mapbox-gl/dist/mapbox-gl.css'; 
import Equipements from './components/Equipements';
import InformationsSupp from './components/InformationsSupp';
import Information from './components/Informations';

export default function InformationPanel({isOpen, setIsOpen, data, city}){
    const element : RootObject = data;
    return <>
        <Modal
            opened={isOpen}
            onClose={() => setIsOpen(false)}
            overlayOpacity={0.3}
            title={"Informations"}
            overflow="inside"
            transition="slide-down"
            transitionDuration={500}
            classNames={{ title: "font-medium font-outfit text-[20px] ", header: "mb-0 p-5 border-b ", close: "focus:outline-none focus:ring-0", modal: "w-[100%]  md:w-[900px] lg:w-[900px] xl:w-[900px] pb-5 p-0 rounded-lg ", body: "px-4 pt-4 pb-0 ", inner: " px-0 pt-4 pb-0 md:px-4 md:py-[48px]" }}
            centered
        >
            <div className='flex flex-col mx-5 md:mx-3 mt-4'>
                <div className='flex flex-col space-y-2 md:space-y-0 md:flex-row justify-between shadow-sm rounded-lg py-5 bg-gray-50 '>
                    <Information element={element} city={city}/>
                    <div className='p-1.5 rounded-md border-2 w-[250px] md:w-[350px] h-[250px] md:h-[300px] mx-auto'>
                        <StaticMap marker={element.position}/>
                    </div>
                </div>

                <div className='flex flex-col md:flex-row px-3 justify-between'>
                    <Equipements element={element}/>
                    <InformationsSupp element={element}/>                    
                </div>

                <div className='flex w-full justify-end mt-5 md:mt-1'>
                    <a href={element.data.link} target="_blank" rel="noopener noreferrer" className='bg-black p-2 rounded-lg text-sm text-white'>{"Accéder à l'annonce"}</a>
                </div>
            </div>
        </Modal>



    </>
}