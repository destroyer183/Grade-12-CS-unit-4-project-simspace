import { FacilityType } from "../core/main";

export class Facility {

    protected _facilityType: FacilityType;
    protected _buildCost: number;
    protected _maintenanceCost: number;
    protected _powerCost: number;
    protected _revenue: number;
    protected _maxPopulation: number;
    protected _population: number = 0;
    protected _populationPercentage: number = 0;
    protected _populationPercentageIncrament: number;
    protected _pollution: number;

    constructor(
        facilityType: FacilityType, 
        buildCost: number, 
        maintenanceCost: number, 
        powerCost: number, 
        revenue: number, 
        maxPopulation: number,
        populationPercentageIncrament: number,
        pollution: number
    ) {
        this._facilityType = facilityType;
        this._buildCost = buildCost;
        this._maintenanceCost = maintenanceCost;
        this._powerCost = powerCost;
        this._revenue = revenue;
        this._maxPopulation = maxPopulation;
        this._populationPercentageIncrament = populationPercentageIncrament;
        this._pollution = pollution;
    }

    protected get facilityType(): string {
        return this._facilityType;
    }
    protected get buildCost(): number {
        return this._buildCost;
    }
    protected get maintenanceCost(): number {
        return this._maintenanceCost;
    }
    protected get powerCost(): number {
        return this._powerCost;
    }
    protected get revenue(): number {
        return this._revenue;
    }
    protected get maxPopulation(): number {
        return this._maxPopulation;
    }
    protected get population(): number {
        return this._maxPopulation * this._populationPercentage;
    }
    protected get popPercentage(): number {
        return this._populationPercentage;
    }
    protected get popPercentageIncrament(): number {
        return this._populationPercentageIncrament;
    }
    protected get pollution(): number {
        return this._pollution;
    }

    protected set population(x: number) {
        this._population = x;
    }
    protected set popPercentage(x: number) {
        this._populationPercentage = x;
    }

    protected populationTick(): number {

        // update population & population percentage of total by their incraments

        let surroundings: FacilityType[] = this.checkSurroundings(1, 1);

        if (this.facilityType === FacilityType.LuxuryHome && (surroundings.indexOf(FacilityType.Store) == -1 || surroundings.indexOf(FacilityType.Restaurant) == -1)) {
            this.population += Math.ceil(this.maxPopulation * this.popPercentageIncrament);
            this.population = (this.population > this.maxPopulation / 2) ? this.maxPopulation : this.population;
            this.popPercentage = (this.popPercentage == 0.5) ? 0.5 : this.popPercentage + this.popPercentageIncrament;
        } else {
            this.population += Math.ceil(this.maxPopulation * this.popPercentageIncrament);
            this.population = (this.population > this.maxPopulation) ? this.maxPopulation : this.population;
            this.popPercentage = (this.popPercentage == 1) ? 1 : this.popPercentage + this.popPercentageIncrament;
        }


        return this.maxPopulation * this.popPercentage;
    }

    protected generateRevenue(): number {
        return this.revenue * this.population / 1000;
    }

    protected checkSurroundings(coord: number, dist: number): FacilityType[] {

        // get every building that is a maximum distance of 'dist' away from the coordinate 'coord'

        return [];
    }
}