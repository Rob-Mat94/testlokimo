import RootObject from "../model/interfaces";


export const filterProperty = (data : RootObject[], properties) => {
    if (properties[0].selected && (!(properties[0].selected && properties[1].selected))) {
        return data.filter((element) => element.house === true)
    }

    else if (properties[1].selected && (!(properties[0].selected && properties[1].selected))) {
        return data.filter((element) => !element.house)
    }

    else return data;
}

export const filterPrice = (values : [number, number], data : RootObject[], MAX) => {
    return data.filter((element) => {
        //prix
        if (!element?.price || element.price == 0) return true
        else if (values[1] === MAX) return element.price >= values[0];
        else return element.price >= values[0] && element.price <= values[1]
    })

}

export const filterEquipement = (values : string[], data: RootObject[]) => {
    let filtered_data = data;
    values.forEach((e) => {
        if (e === "Piscine") {
            filtered_data = filtered_data.filter((element) => element.data.hasPool)
        }
        if (e === "Jardin") {
            filtered_data = filtered_data.filter((element) => element.data.hasGarden)
        }
        if (e === "Fibre") {
            filtered_data = filtered_data.filter((element) => element.data.opticalFiberStatus === "deploye")
        }
        if (e === "Cave") {
            filtered_data = filtered_data.filter((element) => element.data.hasCellar)
        }
        if (e === "Parking") {
            filtered_data = filtered_data.filter((element) => element.data.parkingPlacesQuantity !== undefined ? element.data.parkingPlacesQuantity >= 1 : false)
        }
        if (e === "Air conditionné") {
            filtered_data = filtered_data.filter((element) => element.data.hasAirConditioning)
        }
        if (e === "Cheminée") {
            filtered_data = filtered_data.filter((element) => element.data.hasFirePlace)
        }
        if (e === "Terrasse") {
            filtered_data = filtered_data.filter((element) => element.data.hasTerrace)
        }


    })

    return filtered_data;


}