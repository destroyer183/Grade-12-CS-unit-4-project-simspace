import { Facility } from "../facility";

export class IndustrialFacility extends Facility{
  
    protected _xInputFromPowerPlant : number = 6;
    protected _yInputFromPowerPlant : number = 6;

    constructor(
        xInput : number,
        yInput : number,
        buildCost : number,
        maintenanceCost : number,
        powerCost : number,
        gainedRevenue : number,
        pollutionProduced : number
    )
}