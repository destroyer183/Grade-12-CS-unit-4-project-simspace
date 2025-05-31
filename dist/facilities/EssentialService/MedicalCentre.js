import { FacilityType } from "../../core/dataTypes";
import { EssentialServiceFacility } from "./EssentialService";
export class MedicalCentreFacility extends EssentialServiceFacility {
    constructor(x, y) {
        super(FacilityType.MedicalCentre, x, y, 1000000000, 150000000, 20);
    }
}
//# sourceMappingURL=MedicalCentre.js.map