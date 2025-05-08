import { Facility } from "../facilities/facility";

export enum FacilityType {
    EmergencyService = "emergency service",
    EducationCentre = "education centre",
    MedicalCentre = "medical centre",
    Government = "government",
    PowerPlant = "power plant",
    LuxuryHome = "luxury home",
    ComfortableHome = "comfortable home",
    AffordableHome = "affordable home",
    Factory = "factory",
    Warehouse = "warehouse",
    Environmental = "environmental",
    Store = "store",
    Restaurant = "restaurant",
    Office = "office",
    PDS = "planetary defense system"
};

export class Player {

    static instance: Player;

    private readonly facilities: Facility[] = new Array(2500);

    private facilityIndicies: number[] = [];

    private money: number = 5000000000;

    private population: number = 0;

    private timer: number = 0;

    constructor() {

        if (Player.instance !== undefined) throw new Error("Error! can't create another instance of a singleton class.");
        
        Player.instance = this;
    }

    private gameTick() {

        // check if disaster occurs

        // loop over every facility

        // update different variables by incramenting them by the facility attributes

        // incrament power
        // incrament population
        // incrament revenue
        // incrament pollution
        // incrament maintenance costs


    }

    public createFacility(type: FacilityType) {


        // switch case to make the object
            // check if player has enough money
            // check if surroundings satisfy building

        // add facility to attributes if player has enough money
    }
}