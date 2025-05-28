import { FacilityType } from "../../core/main";
import { Facility } from "../facility";

export class IndustrialFacility extends Facility {
  
    protected _costFactor: number = 0;

    constructor(
        facilityType: FacilityType, 
        x: number, 
        y: number, 
        buildCost: number, 
        maintenanceCost: number, 
        powerCost: number, 
        revenue: number, 
        pollution: number, 
        costFactor: number
    ) {
        super(facilityType, x, y, buildCost, maintenanceCost, powerCost, revenue, pollution);
        this.costFactor = costFactor;
    }

    protected set costFactor(val: number) {
        this._costFactor = val;
    }

    public get revenue(): number {
        return this._revenue * this._costFactor;
    }

    public monthlyTick() {
        this.costFactor += ( this.costFactor === 1) ? 0 : 0.2;
    }
}