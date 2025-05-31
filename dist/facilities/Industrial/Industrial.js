import { FacilityType } from "../../core/dataTypes";
import { Facility } from "../facility";
export class IndustrialFacility extends Facility {
    constructor(facilityType, x, y, buildCost, maintenanceCost, powerCost, revenue, pollution, costFactor) {
        let buildRequirements = {
            "essential service": 100,
            "emergency service": 100,
            "education centre": 100,
            "medical centre": 100,
            "government": 100,
            "power plant": 6,
            "planetary defense system": 100,
            "residential": 100,
            "luxury residential": 100,
            "comfortable residential": 100,
            "affordable residential": 100,
            "industrial": 100,
            "factory": 100,
            "warehouse": 100,
            "environmental": 100,
            "commercial": 100,
            "store": 100,
            "restaurant": 100,
            "office": 100
        };
        super(facilityType, FacilityType.Industrial, x, y, buildCost, maintenanceCost, powerCost, revenue, pollution, buildRequirements);
        this._costFactor = 0;
        this.costFactor = costFactor;
    }
    set costFactor(val) {
        this._costFactor = val;
    }
    get costFactor() {
        return this._costFactor;
    }
    get revenue() {
        return this.revenue * this.costFactor;
    }
    monthlyTick() {
        this.costFactor += (this.costFactor === 1) ? 0 : 0.2;
    }
}
//# sourceMappingURL=Industrial.js.map