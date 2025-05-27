import { Facility } from "../Facility";
export class IndustrialFacility extends Facility {
    constructor(facilityType, x, y, buildCost, maintenanceCost, powerCost, revenue, pollution, costFactor) {
        super(facilityType, x, y, buildCost, maintenanceCost, powerCost, revenue, pollution);
        this._costFactor = 0;
        this.costFactor = costFactor;
    }
    set costFactor(val) {
        this._costFactor = val;
    }
    get revenue() {
        return this._revenue * this._costFactor;
    }
    monthlyTick() {
        this.costFactor += (this.costFactor === 1) ? 0 : 0.2;
    }
}
//# sourceMappingURL=Industrial.js.map