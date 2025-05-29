import { FacilityType } from "../../core/dataTypes";
import { EssentialServiceFacility } from "./EssentialService";

export class MedicalCentreFacility extends EssentialServiceFacility {
    constructor(x: number, y: number) {
        super(FacilityType.MedicalCentre, x, y, 1000000000, 150000000, 20);
    }
}