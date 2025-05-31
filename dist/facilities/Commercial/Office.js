import { FacilityType } from "../../core/dataTypes";
import { CommercialFacility } from "./Commercial";
export class OfficeFacility extends CommercialFacility {
    constructor(x, y) {
        super(FacilityType.Government, x, y, 3000000, 5000, 15, 20000, 800);
    }
}
//# sourceMappingURL=Office.js.map