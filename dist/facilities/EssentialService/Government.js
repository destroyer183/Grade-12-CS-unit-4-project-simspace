import { FacilityType } from "../../core/main";
import { EssentialServiceFacility } from "./EssentialService";
export class GovernmentFacility extends EssentialServiceFacility {
    constructor(x, y) {
        super(FacilityType.Government, x, y, 100000000, 1000000, 10);
    }
}
//# sourceMappingURL=Government.js.map