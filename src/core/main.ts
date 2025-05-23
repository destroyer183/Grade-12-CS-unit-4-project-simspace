import { Facility } from "../facilities/Facility";
import { GridSquare } from "./GridSquare";

export enum FacilityType {
    EmergencyService = "emergency service",
    EducationCentre = "education centre",
    MedicalCentre = "medical centre",
    Government = "government",
    PowerPlant = "power plant",
    PDS = "planetary defense system",
    LuxuryResidential = "luxury residential",
    ComfortableResidential = "comfortable residential",
    AffordableResidential = "affordable residential",
    Factory = "factory",
    Warehouse = "warehouse",
    Environmental = "environmental",
    Store = "store",
    Restaurant = "restaurant",
    Office = "office"
};

export class Planet {

    static grid: Array<Array<GridSquare | Facility>> = new Array(50).fill( new Array(50).fill(new GridSquare) );

    static instance: Planet;

    constructor() {

        if (Planet.instance !== undefined) throw new Error("Error! can't create more than one instance of a singleton class.");

        Planet.instance = this;
    }






    public updateSquares(type: FacilityType, x: number, y: number) {


        for (let row of Planet.grid) {
            for (let square of row) {


            }
        }

    }


    public calculateDist(x1: number, y1: number, x2: number, y2: number): number {
        return Math.abs(x2 - x1) + Math.abs(y2 - y1);
    }
}