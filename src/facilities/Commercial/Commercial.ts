import { FacilityType, DistData } from "../../core/dataTypes";
import { Facility } from "../facility";

export class CommercialFacility extends Facility {

    constructor(
        facilityType: FacilityType,
        x: number,
        y: number,
        buildCost: number,
        maintenanceCost: number,
        powerCost: number,
        revenue: number,
        pollution: number
    ) {
        super(facilityType, FacilityType.Commercial, x, y, buildCost, maintenanceCost, powerCost, revenue, pollution);
    }
}