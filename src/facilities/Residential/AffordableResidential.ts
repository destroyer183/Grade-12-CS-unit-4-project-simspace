import { FacilityType } from "../../core/dataTypes";
import { ResidentialFacility } from "./Residential";

export class AffordableResidentialFacility extends ResidentialFacility {
    constructor(x: number, y: number) {
        super(FacilityType.AffordableResidential, x, y, 50000000, 8000, 2000, 25, 10000, 10, 25000);
    }
}