import { FacilityType } from "../../core/dataTypes";
import { Facility } from "../facility";
export class CommercialFacility extends Facility {
    constructor(facilityType, x, y, buildCost, maintenanceCost, powerCost, revenue, pollution) {
        super(facilityType, FacilityType.Commercial, x, y, buildCost, maintenanceCost, powerCost, revenue, pollution);
    }
}
//# sourceMappingURL=Commercial.js.map