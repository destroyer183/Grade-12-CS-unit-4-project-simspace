export class Facility {
    constructor(facilityType, parentType, x, y, buildCost, maintenanceCost, powerCost, revenue, pollution, buildRequirements) {
        this._facilityType = facilityType;
        this._parentType = parentType;
        this._x = x;
        this._y = y;
        this._buildCost = buildCost;
        this._maintenanceCost = maintenanceCost;
        this._powerCost = powerCost;
        this._revenue = revenue;
        this._pollution = pollution;
        if (buildRequirements !== undefined)
            this._buildRequirements = buildRequirements;
    }
    get facilityType() {
        return this._facilityType;
    }
    get parentType() {
        return this._parentType;
    }
    get x() {
        return this._x;
    }
    get y() {
        return this._y;
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
    get pollution() {
        return this._pollution;
    }
    get buildRequirements() {
        return this._buildRequirements;
    }
    monthlyTick() { }
    incramentRevenueFactor() { }
}
//# sourceMappingURL=facility.js.map