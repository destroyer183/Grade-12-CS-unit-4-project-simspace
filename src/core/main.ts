import { Facility } from "../facilities/Facility";
import { GridSquare } from "./GridSquare";

export enum FacilityType {
    EmergencyService = "emergency service",
    EducationCentre = "education centre",
    MedicalCentre = "medical centre",
    Government = "government",
    PowerPlant = "power plant",
    PDS = "planetary defense system",
    LuxuryHome = "luxury home",
    ComfortableHome = "comfortable home",
    AffordableHome = "affordable home",
    Factory = "factory",
    Warehouse = "warehouse",
    Environmental = "environmental",
    Store = "store",
    Restaurant = "restaurant",
    Office = "office"
};

export class Planet {

    private grid: Array<GridSquare | Facility> = new Array(50).fill( new Array(50).fill(new GridSquare) );






    public updateSquares(type: FacilityType, x: number, y: number) {



    }


    public calculateDist(x1: number, y1: number, x2: number, y2: number): number {
        return Math.abs(x2 - x1) + Math.abs(y2 - y1);
    }
}