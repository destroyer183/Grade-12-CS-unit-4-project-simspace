import { FacilityType } from "../../core/dataTypes";
import { CommercialFacility } from "./Commercial";
export class StoreFacility extends CommercialFacility {
    constructor(x, y) {
        super(FacilityType.Government, x, y, 2000000, 50000, 5, 200000, 500);
    }
}
//# sourceMappingURL=Store.js.map