import { FacilityType } from "../../core/main";
import { EssentialServiceFacility } from "./EssentialService";
export class EmergencyServiceFacility extends EssentialServiceFacility {
    constructor(x, y) {
        super(FacilityType.EmergencyService, x, y, 100000000, 1000000, 10);
    }
}
//# sourceMappingURL=EmergencyService.js.map