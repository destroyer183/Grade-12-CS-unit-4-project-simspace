import { FacilityType } from "../../core/dataTypes";
import { Facility } from "../Facility";

export class EssentialServiceFacility extends Facility {
    constructor(facilityType: FacilityType, x: number, y: number, buildCost: number, maintenanceCost: number, powerCost: number) {
        super(facilityType, FacilityType.EssentialService, x, y, buildCost, maintenanceCost, powerCost, 0, 0);
    }
}