import { ResidentialFacility } from "./ResidentialFacility";
export class LuxuryResidentialFacility extends ResidentialFacility {
    constructor(xInput, yInput) {
        super(xInput, yInput, 1000000000, 10000000, 100, 15000, 500, 10000);
        this.adjacentStore = false;
        this.adjacentRestaurant = false;
    }
}
//# sourceMappingURL=LuxuryHome.js.map