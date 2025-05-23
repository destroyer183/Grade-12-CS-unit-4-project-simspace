import { FacilityType } from "../../core/main";
import { EssentialServiceFacility } from "./EssentialService";

export class EducationCentreFacility extends EssentialServiceFacility {  
    constructor(x: number, y: number) {
        super(FacilityType.EducationCentre, x, y, 500000000, 50000000, 15);
    }
}