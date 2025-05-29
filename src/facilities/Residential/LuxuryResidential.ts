import { FacilityType } from "../../core/dataTypes";
import { ResidentialFacility } from "./Residential";

export class LuxuryResidentialFacility extends ResidentialFacility {

    protected _adjacentStore: boolean = false;
    protected _adjacentRestaurant: boolean = false;

    constructor(x: number, y: number) {
        super(FacilityType.LuxuryResidential, x, y, 1000000000, 10000000, 1000000, 100, 15000000, 500, 10000);
    }

    public set adjacentStore(val: boolean) {
        this._adjacentStore = val;
    }
    public set adjacentRestaurant(val: boolean) {
        this._adjacentRestaurant = val;
    }

    public get adjacentStore(): boolean {
        return this._adjacentStore;
    }
    public get adjacentRestaurant(): boolean {
        return this._adjacentRestaurant;
    }

    public monthlyTick() {
        if (this.adjacentStore && this.adjacentRestaurant) this.populationFactor += (this.populationFactor === 1)   ? 0 : 0.1;
        else                                               this.populationFactor += (this.populationFactor === 0.5) ? 0 : 0.1;
    }
}