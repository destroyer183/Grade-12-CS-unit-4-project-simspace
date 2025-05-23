import { FacilityType } from "../../core/main";
import { EssentialServiceFacility } from "./EssentialService";

export class EmergencyServiceFacility extends EssentialServiceFacility {
    constructor(x: number, y: number) {
        super(FacilityType.EmergencyService, x, y, 100000000, 1000000, 10);
    }
}