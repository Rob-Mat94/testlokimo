import RootObject from "../../model/interfaces";
import Filter from "./components/Filter/Filter";
import SearchBar from "./components/SearchBar/Searchbar";
import ViewSelector from "./components/ViewSelector/ViewSelector";

export default function Navbar  ({viewState, setViewState ,data, setData, original_data}) {

    const handleSearch = (e) => {
        const search = e.target.value;
        const biens : RootObject[] = original_data;

        setData(
            search === "" ? 
            [...original_data]
            :
            [...biens.filter((element) => {
               return element.data.title.toLowerCase().includes(search.toLowerCase())
            })]
        )
    }

    return <>
    <div className="w-full">
        <div className="flex fixed z-50 bg-white w-full justify-between px-4 md:px-8 py-4 shadow-md place-items-center">
            <img src="logo-blue.svg"/>
            <SearchBar handleSearch={handleSearch}/>
            <div className="flex space-x-2 place-content-center">
                <ViewSelector setViewState={setViewState} viewState={viewState}/>
                <Filter data={data} setData={setData} original_data={original_data}/>
            </div>
        </div>
    </div>
    </>
}