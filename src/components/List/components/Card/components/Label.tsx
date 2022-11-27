export default function Label ({element}){
    return <div className="absolute bottom-4 right-3">
        <div className="flex place-items-center space-x-2">
            {
                element.data.status.highlighted && <div className="bg-pink-400  text-white text-xs rounded-full py-1.5 px-3">Coup de coeur</div>
            }
            <div className={`${element.buy ? "bg-violet-400" : "bg-blue-500"} text-white text-xs rounded-full py-1.5 px-3 `}>{element.buy ? "À vendre" : "Location"}</div>
        </div>
    </div>
}