import { SegmentedControl } from "@mantine/core";
import { FiList, FiMap } from 'react-icons/fi'



export default function ViewSelector ({viewState, setViewState}){
    return <SegmentedControl
            className="ml-2"
            radius="md"
            value={viewState.toString()}
            onChange={(e) => setViewState(Number(e))}
            data={[
                {
                    label: <div className="flex place-items-center space-x-1"><FiList size={16} /><span className="hidden md:block leading-[24px] ">Liste</span></div>,
                    value: "0"
                },
                {
                    label: <div className="flex place-items-center space-x-1"><FiMap size={16} /><span className="hidden md:block leading-[24px] ">Carte</span></div>,
                    value: "1"
                }
            ]}
        />
      
}