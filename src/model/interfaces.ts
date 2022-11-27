    export interface Status {
        autoImported: boolean;
        closedByUser: boolean;
        highlighted: boolean;
        liked?: boolean;
        is3dHighlighted: boolean;
        isLeading: boolean;
        onTheMarket: boolean;
    }

    export interface props {
        props : any
    }
    
    export interface Data {
        bedroomsQuantity: number;
        city: string;
        floorQuantity: number;
        hasAirConditioning: boolean;
        hasAlarm: boolean;
        hasCellar: boolean;
        hasDoorCode: boolean;
        hasFirePlace: boolean;
        hasGarden: boolean;
        hasIntercom: boolean;
        hasPool: boolean;
        hasTerrace: boolean;
        heating: string;
        link: string;
        newProperty: boolean;
        publicationDate: Date;
        reference: string;
        status: Status;
        title: string;
        transactionType: string;
        yearOfConstruction: number;
        bathroomsQuantity?: number;
        hasSeparateToilet?: boolean;
        parkingPlacesQuantity?: number;
        priceWithoutFees?: number;
        showerRoomsQuantity?: number;
        thresholdDate?: Date;
        toiletQuantity?: number;
        exposition: string;
        newOrOld: string;
        opticalFiberStatus: string;
        balconyQuantity?: number;
        isRecent?: boolean;
        terracesQuantity?: number;
        address: string;
        hasElevator?: boolean;
        gardenSurfaceArea?: number;
        floor?: number;
        hasCaretaker?: boolean;
        hasBalcony?: boolean;
        balconySurfaceArea?: number;
        availableDate?: Date;
        outdoorParkingQuantity?: number;
        hasVideophone?: boolean;
        isInStudentResidence?: boolean;
        hasParquet?: boolean;
    }

    export interface Position {
        lat: number;
        lng: number;
    }

    export default interface RootObject {
        buy: boolean;
        city: string;
        data: Data;
        first_date: string;
        good_id: string;
        house: boolean;
        id: number;
        iris: string;
        last_date: string;
        meter_square: number;
        position: Position;
        price: number;
        rooms: number;
        surface: number;
    }



