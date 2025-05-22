import { Facility } from "../facility";

export class EssentialServiceFacility extends Facility{
    
    protected _taxRevenue : number = 0
    protected _isRequired : boolean = true

    constructor(
        xInput : number,
        yInput : number,
        buildCost : number,
        maintenanceCost : number,
        powerCost : number,
        powerProduced : number,
    ) {
        super(xInput, yInput, buildCost, maintenanceCost,powerCost,powerProduced)
    }

    protected set taxRevenue (taxRevenue: number) {
        this._taxRevenue = taxRevenue;
    }
    public get taxRevenue(): number {
        return this._taxRevenue;
    }
}