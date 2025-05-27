import { FacilityType } from "../../core/main";
import { IndustrialFacility } from "./Industrial";
export class FactoryFacility extends IndustrialFacility {
    constructor(x, y) {
        super(FacilityType.Factory, x, y, 50000000, 500000, 50, 5000000, 20000, 0);
    }
}
//# sourceMappingURL=Factory.js.map