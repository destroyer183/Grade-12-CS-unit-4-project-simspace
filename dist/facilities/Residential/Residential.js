import { Facility } from "../Facility";
export class ResidentialFacility extends Facility {
    constructor(facilityType, x, y, buildCost, maintenanceCost, _maintenanceCostBonus, powerCost, revenue, pollution, maxPopulation) {
        super(facilityType, x, y, buildCost, maintenanceCost, powerCost, revenue, pollution);
        this._maintenanceCostBonus = _maintenanceCostBonus;
        this._populationFactor = 0;
        this.maxPopulation = maxPopulation;
    }
    set maxPopulation(val) {
        this._maxPopulation = val;
    }
    set populationFactor(val) {
        this._populationFactor = val;
    }
    get population() {
        return this._maxPopulation * this.populationFactor;
    }
    get maxPopulation() {
        return this._maxPopulation;
    }
    get populationFactor() {
        return this._populationFactor;
    }
    get maintenanceCost() {
        return this._maintenanceCost + this._maintenanceCostBonus * (this.population / 1000);
    }
    get revenue() {
        return this._revenue * (this.population / 1000);
    }
    get pollution() {
        return this._pollution * (this.population / 1000);
    }
    monthlyTick() {
        this.populationFactor += (this.populationFactor === 1) ? 0 : 0.1;
    }
}
//# sourceMappingURL=Residential.js.map