import { FacilityType } from "../../core/dataTypes";
import { Facility } from "../Facility";

export class ResidentialFacility extends Facility {

    protected _maxPopulation: number;
    protected _populationFactor: number = 0;
    protected _maintenanceCostBonus: number;

    constructor(
        facilityType: FacilityType,
        x: number,
        y: number,
        buildCost: number,
        maintenanceCost: number,
        maintenanceCostBonus: number,
        powerCost: number,
        revenue: number,
        pollution: number,
        maxPopulation: number
    ) {
        let buildRequirements: Record<FacilityType, number> = {
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

        this.maxPopulation = maxPopulation;
        this.maintenanceCostBonus = maintenanceCostBonus;
    }
    
    protected set maxPopulation(val: number) {
        this._maxPopulation = val;
    }
    protected set populationFactor(val: number) {
        this._populationFactor = val;
    }
    protected set maintenanceCostBonus(val: number) {
        this._maintenanceCostBonus = val;
    }

    protected get maxPopulation(): number {
        return this._maxPopulation;
    }
    protected get populationFactor(): number {
        return this._populationFactor;
    }
    protected get maintenanceCostBonus(): number {
        return this._maintenanceCostBonus;
    }
    public get population(): number {
        return this._maxPopulation * this.populationFactor;
    }
    public get maintenanceCost(): number {
        return this._maintenanceCost + this.maintenanceCostBonus * (this.population / 1000);
    }
    public get revenue(): number {
        return this._revenue * (this.population / 1000);
    }
    public get pollution(): number {
        return this._pollution * (this.population / 1000);
    }



    public monthlyTick() {
        this.populationFactor += (this.populationFactor === 1) ? 0 : 0.1;
    }
}