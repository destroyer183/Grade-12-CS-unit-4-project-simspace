import { FacilityType } from "../../core/dataTypes";
import { ResidentialFacility } from "./Residential";

export class ComfortableResidentialFacility extends ResidentialFacility {
    constructor(x: number, y: number) {
        super(FacilityType.ComfortableResidential, x, y, 500000000, 40000, 50000, 50, 1000000, 50, 15000);
    }
}