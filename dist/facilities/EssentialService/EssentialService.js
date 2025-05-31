import { FacilityType } from "../../core/dataTypes";
import { Facility } from "../facility";
export class EssentialServiceFacility extends Facility {
    constructor(facilityType, x, y, buildCost, maintenanceCost, powerCost) {
        super(facilityType, FacilityType.EssentialService, x, y, buildCost, maintenanceCost, powerCost, 0, 0);
    }
}
//# sourceMappingURL=EssentialService.js.map