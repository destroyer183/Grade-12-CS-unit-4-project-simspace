import { FacilityType } from "../../core/main";
import { EssentialServiceFacility } from "./EssentialService";
export class EducationCentreFacility extends EssentialServiceFacility {
    constructor(x, y) {
        super(FacilityType.EducationCentre, x, y, 500000000, 50000000, 15);
    }
}
//# sourceMappingURL=EducationCentre.js.map