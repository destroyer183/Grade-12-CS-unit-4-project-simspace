import { FacilityType } from "../../core/main";
import { ResidentialFacility } from "./Residential";
export class LuxuryResidentialFacility extends ResidentialFacility {
    constructor(x, y) {
        super(FacilityType.LuxuryResidential, x, y, 1000000000, 10000000, 1000000, 100, 15000000, 500, 10000);
        this._adjacentStore = false;
        this._adjacentRestaurant = false;
    }
    set adjacentStore(val) {
        this._adjacentStore = val;
    }
    set adjacentRestaurant(val) {
        this._adjacentRestaurant = val;
    }
    get adjacentStore() {
        return this._adjacentStore;
    }
    get adjacentRestaurant() {
        return this._adjacentRestaurant;
    }
    monthlyTick() {
        if (this.adjacentStore && this.adjacentRestaurant)
            this.populationFactor += (this.populationFactor === 1) ? 0 : 0.1;
        else
            this.populationFactor += (this.populationFactor === 0.5) ? 0 : 0.1;
    }
}
//# sourceMappingURL=LuxuryResidential.js.map