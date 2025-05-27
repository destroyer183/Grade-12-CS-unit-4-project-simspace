import { FacilityType } from "../../core/main";
import { ResidentialFacility } from "./Residential";
export class AffordableResidentialFacility extends ResidentialFacility {
    constructor(x, y) {
        super(FacilityType.AffordableResidential, x, y, 50000000, 8000, 2000, 25, 10000, 10, 25000);
    }
}
//# sourceMappingURL=AffordableResidential.js.map