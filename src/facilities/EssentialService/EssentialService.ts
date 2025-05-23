import { FacilityType } from "../../core/main";
import { Facility } from "../Facility";

export class EssentialServiceFacility extends Facility {
    constructor(facilityType: FacilityType, x: number, y: number, buildCost: number, maintenanceCost: number, powerCost: number) {
        super(facilityType, x, y, buildCost, maintenanceCost, powerCost, 0, 0);
    }
}