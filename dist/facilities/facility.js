import { FacilityType } from "../core/main";
export class Facility {
    constructor(facilityType, buildCost, maintenanceCost, powerCost, revenue, maxPopulation, populationPercentageIncrament, pollution) {
        this._population = 0;
        this._populationPercentage = 0;
        this._facilityType = facilityType;
        this._buildCost = buildCost;
        this._maintenanceCost = maintenanceCost;
        this._powerCost = powerCost;
        this._revenue = revenue;
        this._maxPopulation = maxPopulation;
        this._populationPercentageIncrament = populationPercentageIncrament;
        this._pollution = pollution;
    }
    get facilityType() {
        return this._facilityType;
    }
    get buildCost() {
        return this._buildCost;
    }
    get maintenanceCost() {
        return this._maintenanceCost;
    }
    get powerCost() {
        return this._powerCost;
    }
    get revenue() {
        return this._revenue;
    }
    get maxPopulation() {
        return this._maxPopulation;
    }
    get population() {
        return this._maxPopulation * this._populationPercentage;
    }
    get popPercentage() {
        return this._populationPercentage;
    }
    get popPercentageIncrament() {
        return this._populationPercentageIncrament;
    }
    get pollution() {
        return this._pollution;
    }
    set population(x) {
        this._population = x;
    }
    set popPercentage(x) {
        this._populationPercentage = x;
    }
    populationTick() {
        // update population & population percentage of total by their incraments
        let surroundings = this.checkSurroundings(1, 1);
        if (this.facilityType === FacilityType.LuxuryHome && (surroundings.indexOf(FacilityType.Store) == -1 || surroundings.indexOf(FacilityType.Restaurant) == -1)) {
            this.population += Math.ceil(this.maxPopulation * this.popPercentageIncrament);
            this.population = (this.population > this.maxPopulation / 2) ? this.maxPopulation : this.population;
            this.popPercentage = (this.popPercentage == 0.5) ? 0.5 : this.popPercentage + this.popPercentageIncrament;
        }
        else {
            this.population += Math.ceil(this.maxPopulation * this.popPercentageIncrament);
            this.population = (this.population > this.maxPopulation) ? this.maxPopulation : this.population;
            this.popPercentage = (this.popPercentage == 1) ? 1 : this.popPercentage + this.popPercentageIncrament;
        }
        return this.maxPopulation * this.popPercentage;
    }
    generateRevenue() {
        return this.revenue * this.population / 1000;
    }
    checkSurroundings(coord, dist) {
        // get every building that is a maximum distance of 'dist' away from the coordinate 'coord'
        return [];
    }
}
//# sourceMappingURL=facility.js.map