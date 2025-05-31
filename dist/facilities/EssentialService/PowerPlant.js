import { FacilityType } from "../../core/dataTypes";
import { EssentialServiceFacility } from "./EssentialService";
export class PowerPlantFacility extends EssentialServiceFacility {
    constructor(x, y) {
        super(FacilityType.PowerPlant, x, y, 500000000, 2000000, -100);
    }
}
//# sourceMappingURL=PowerPlant.js.map