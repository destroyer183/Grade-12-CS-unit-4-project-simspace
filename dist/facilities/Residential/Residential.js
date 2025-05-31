import { FacilityType } from "../../core/dataTypes";
import { Facility } from "../facility";
export class ResidentialFacility extends Facility {
    constructor(facilityType, x, y, buildCost, maintenanceCost, maintenanceCostBonus, powerCost, revenue, pollution, maxPopulation) {
        let buildRequirements = {
            "essential service": 100,
            "emergency service": 8,
            "education centre": 8,
            "medical centre": 8,
            "government": 8,
            "power plant": 8,
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
            "store": 5,
            "restaurant": 3,
            "office": 100
        };
        super(facilityType, FacilityType.Residential, x, y, buildCost, maintenanceCost, powerCost, revenue, pollution, buildRequirements);
        this._populationFactor = 0;
        this.maxPopulation = maxPopulation;
        this.maintenanceCostBonus = maintenanceCostBonus;
    }
    set maxPopulation(val) {
        this._maxPopulation = val;
    }
    set populationFactor(val) {
        this._populationFactor = val;
    }
    set maintenanceCostBonus(val) {
        this._maintenanceCostBonus = val;
    }
    get maxPopulation() {
        return this._maxPopulation;
    }
    get populationFactor() {
        return this._populationFactor;
    }
    get maintenanceCostBonus() {
        return this._maintenanceCostBonus;
    }
    get population() {
        return this._maxPopulation * this.populationFactor;
    }
    get maintenanceCost() {
        return this._maintenanceCost + this.maintenanceCostBonus * (this.population / 1000);
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