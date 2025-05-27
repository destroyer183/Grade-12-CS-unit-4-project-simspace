import { Facility } from "../Facility";
export class ResidentialFacility extends Facility {
    constructor(xInput, yInput, buildCostInput, maintenanceCostInput, powerCostInput, revenueInput, pollutionInput, maxPopulationInput) {
        super(xInput, yInput, buildCostInput, maintenanceCostInput, powerCostInput, revenueInput);
        this._distanceFromEmergency = 8;
        this._distanceFromEducationCentre = 8;
        this._distanceFromMedicalCentre = 8;
        this._distanceFromGovernment = 8;
        this._distanceFromPowerPlant = 8;
        this._distanceFromStore = 8;
        this._distanceFromRestaurant = 8;
        this._population = 0;
        this.pollution = pollutionInput;
        this.maxPopulation = maxPopulationInput;
    }
    set distanceFromEmergency(val) {
        this._distanceFromEmergency = val;
    }
    set distanceFromEducationCentre(val) {
        this._distanceFromEducationCentre = val;
    }
    set distanceFromMedicalCentre(val) {
        this._distanceFromMedicalCentre = val;
    }
    set distanceFromGovernment(val) {
        this._distanceFromGovernment = val;
    }
    set distanceFromPowerPlant(val) {
        this._distanceFromPowerPlant = val;
    }
    set distanceFromStore(val) {
        this._distanceFromStore = val;
    }
    set distanceFromRestaurant(val) {
        this._distanceFromRestaurant = val;
    }
    set population(val) {
        this._population = val;
    }
    set maxPopulation(val) {
        this._maxPopulation = val;
    }
    set pollution(val) {
        this._pollution = val;
    }
    get distanceFromEmergency() {
        return this._distanceFromEmergency;
    }
    get distanceFromEducationCentre() {
        return this._distanceFromEducationCentre;
    }
    get distanceFromMedicalCentre() {
        return this._distanceFromMedicalCentre;
    }
    get distanceFromGovernment() {
        return this._distanceFromGovernment;
    }
    get distanceFromPowerPlant() {
        return this._distanceFromPowerPlant;
    }
    get distanceFromStore() {
        return this._distanceFromStore;
    }
    get distanceFromRestaurant() {
        return this._distanceFromRestaurant;
    }
    get population() {
        return this._population;
    }
    get maxPopulation() {
        return this._maxPopulation;
    }
    get pollution() {
        return this._pollution;
    }
    populationTick() {
        return 1;
    }
}
//# sourceMappingURL=ResidentialFacility.js.map