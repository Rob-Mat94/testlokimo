import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

export default function Pagination ({length, limit, page, setPage}){
    return <div className="px-4 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between">
        <div className="inline-flex mt-2 xs:mt-0">
            <button
                className={`text-sm border ${(page > 0 ? "  " : "  opacity-40 ")}   font-semibold py-3 px-4 rounded-l flex space-x-4 place-items-center`} onClick={() => setPage(page > 0 ? page - 1 : page)} disabled={(page > 0 ? false : true)}>
                <HiChevronLeft size={18} />
                Précédent
            </button>
            <span className='text-sm border focus:outline-none w-full font-semibold text-center py-3 px-4 rounded-r flex  space-x-4 place-items-center'>{page + 1}</span>
            <button
                className={`text-sm border ${(length < page * limit + limit ? " opacity-40 " : "  ")}    font-semibold py-3 px-4 rounded-r flex space-x-4 place-items-center`} onClick={() => setPage(length < limit ? page : page + 1)} disabled={(length < page * limit + limit ? true : false)}>
                Suivant
                <HiChevronRight size={18} />
            </button>
        </div>
    </div>
}