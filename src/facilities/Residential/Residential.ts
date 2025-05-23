import { FacilityType } from "../../core/main";
import { Facility } from "../Facility";

export class ResidentialFacility extends Facility {

    protected _maxPopulation: number;
    protected _populationFactor: number = 0;

    constructor(
        facilityType: FacilityType,
        x: number,
        y: number,
        buildCost: number,
        maintenanceCost: number,
        protected readonly _maintenanceCostBonus: number,
        powerCost: number,
        revenue: number,
        pollution: number,
        maxPopulation: number
    ) {
        super(facilityType, x, y, buildCost, maintenanceCost, powerCost, revenue, pollution);

        this.maxPopulation = maxPopulation;
    }
    
    protected set maxPopulation(val: number) {
        this._maxPopulation = val;
    }
    protected set populationFactor(val: number) {
        this._populationFactor = val;
    }

    public get population(): number {
        return this._maxPopulation * this.populationFactor;
    }
    public get maxPopulation(): number {
        return this._maxPopulation;
    }
    public get populationFactor(): number {
        return this._populationFactor;
    }
    public get maintenanceCost(): number {
        return this._maintenanceCost + this._maintenanceCostBonus * (this.population / 1000);
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