export class Facility {
    constructor(_facilityType, _x, _y, _buildCost, _maintenanceCost, _powerCost, _revenue, _pollution) {
        this._facilityType = _facilityType;
        this._x = _x;
        this._y = _y;
        this._buildCost = _buildCost;
        this._maintenanceCost = _maintenanceCost;
        this._powerCost = _powerCost;
        this._revenue = _revenue;
        this._pollution = _pollution;
    }
    set x(val) {
        this._x = val;
    }
    set y(val) {
        this._y = val;
    }
    set buildCost(val) {
        this._buildCost = val;
    }
    set maintenanceCost(val) {
        this._maintenanceCost = val;
    }
    set powerCost(val) {
        this._powerCost = val;
    }
    set revenue(val) {
        this._revenue = val;
    }
    set pollution(val) {
        this._pollution = val;
    }
    get facilityType() {
        return this._facilityType;
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
    monthlyTick() { }
    incramentRevenueFactor() { }
}
//# sourceMappingURL=facility.js.map