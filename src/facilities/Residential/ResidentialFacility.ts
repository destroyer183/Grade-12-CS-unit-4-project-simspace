import { Facility } from "../Facility";


export class ResidentialFacility extends Facility {

    protected _distanceFromEmergency: number = 8
    protected _distanceFromEducationCentre: number = 8;
    protected _distanceFromMedicalCentre: number = 8;
    protected _distanceFromGovernment: number = 8;
    protected _distanceFromPowerPlant: number = 8;
    protected _distanceFromStore: number = 8;
    protected _distanceFromRestaurant: number = 8;
    protected _population: number = 0;
    protected _maxPopulation: number;
    protected _pollution: number;

    constructor(
        xInput: number,
        yInput: number,
        buildCostInput: number,
        maintenanceCostInput: number,
        powerCostInput: number,
        revenueInput: number,
        pollutionInput: number,
        maxPopulationInput: number
    ) {
        super(xInput, yInput, buildCostInput, maintenanceCostInput, powerCostInput, revenueInput);

        this.pollution = pollutionInput;
        this.maxPopulation = maxPopulationInput;
    }
    


    protected set distanceFromEmergency(val: number) {
        this._distanceFromEmergency = val;
    }
    protected set distanceFromEducationCentre(val: number) {
        this._distanceFromEducationCentre = val;
    }
    protected set distanceFromMedicalCentre(val: number) {
        this._distanceFromMedicalCentre = val;
    }
    protected set distanceFromGovernment(val: number) {
        this._distanceFromGovernment = val;
    }
    protected set distanceFromPowerPlant(val: number) {
        this._distanceFromPowerPlant = val;
    }
    protected set distanceFromStore(val: number) {
        this._distanceFromStore = val;
    }
    protected set distanceFromRestaurant(val: number) {
        this._distanceFromRestaurant = val;
    }
    protected set population(val: number) {
        this._population = val;
    }
    protected set maxPopulation(val: number) {
        this._maxPopulation = val;
    }
    protected set pollution(val: number) {
        this._pollution = val;
    }



    public get distanceFromEmergency(): number {
        return this._distanceFromEmergency;
    }
    public get distanceFromEducationCentre(): number {
        return this._distanceFromEducationCentre;
    }
    public get distanceFromMedicalCentre(): number {
        return this._distanceFromMedicalCentre;
    }
    public get distanceFromGovernment(): number {
        return this._distanceFromGovernment;
    }
    public get distanceFromPowerPlant(): number {
        return this._distanceFromPowerPlant;
    }
    public get distanceFromStore(): number {
        return this._distanceFromStore;
    }
    public get distanceFromRestaurant(): number {
        return this._distanceFromRestaurant;
    }
    public get population(): number {
        return this._population;
    }
    public get maxPopulation(): number {
        return this._maxPopulation;
    }
    public get pollution(): number {
        return this._pollution;
    }



    public populationTick(): number {

        return 1;
    }
}