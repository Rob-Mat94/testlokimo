import { useEffect, useState } from "react";
import RootObject from "../../model/interfaces";
import Card from "./components/Card/Card";
import Pagination from "./components/Pagination/Pagination";

type Props = {
    data : RootObject[]
};

const List : React.FC<Props> = ({
    data
})  =>  {

    // Limite de cards par page
    const LIMIT = 12;
    // page actuelle
    const [page, setPage] = useState(0);

    const sortList = (a  : RootObject, b : RootObject ) => {
        if(a.data.status.isLeading && !b.data.status.isLeading)
            return -1;
        else 
            return 1
    }
    
    useEffect(() => {
        setPage(0);
    },[data])
    
    return <div className=" pt-[80px] md:pt-[60px] bg-slate-50">
        {
            data.slice(page * LIMIT, page * LIMIT + LIMIT).sort(sortList).length <= 0 
            ? 
            <div className="pt-10 flex flex-col w-full place-content-center h-[300px] text-center">
                <span className=" mx-auto  rounded-lg shadow-sm text-gray-500 ">{"Aucun résultat ..."}</span>
            </div>
            :
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 pl-5 pr-8 md:p-10 container mx-auto space-y-5 space-x-5">
                {
                    data.slice(page * LIMIT, page * LIMIT + LIMIT).sort(sortList).map((element, i) => {
                            return <Card key={element.id} element={element} index={i} />
                        })
                }
            </div>
        }
        <Pagination length={data.length} limit={LIMIT} page={page} setPage={setPage}/>
    </div>
}

export default List