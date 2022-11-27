export default function Selector({setValue, value, label}){
    const values = [1, 2, 3, 4, 5, 6, 7, 8];
    return <div className="flex flex-col mt-4 whitespace-nowrap">
        <span>{label}</span>
        <div className="flex overflow-auto w-full h-16 place-items-center space-x-4 ">
            <span className={`${value === null ? "bg-black text-white" : "text-black"} rounded-full border text-sm px-4 py-2 whitespace-nowrap cursor-pointer`}onClick={() => setValue(null)}>Tout</span>
            {values.map((i) => {
                return <span key={i} onClick={() => setValue(i)} className={`${i === value ? "bg-black text-white" :"bg-white text-black"} rounded-full cursor-pointer border text-sm px-5 py-2`}>{`${i} ${i === values[values.length -1] ? "+" : ""}`}</span>
            })}
        </div>
    </div>
}