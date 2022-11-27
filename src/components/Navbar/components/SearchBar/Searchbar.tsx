import { FaSearch } from "react-icons/fa";

export default function SearchBar({handleSearch}){
    return <div className=" relative hidden md:block ">
        <input placeholder="Rechercher un bien ..." onChange={handleSearch} className="px-6 py-3 shadow-md border border-violet-300 rounded-full w-[300px] xl:w-[350px]  text-sm focus:outline-none"></input>
        <span className="absolute right-4 top-[20%] bg-gradient-to-r from-[#000DBE] to-[#F161D2] p-2 rounded-full"><FaSearch color="white" size={12} /></span>
    </div>
}