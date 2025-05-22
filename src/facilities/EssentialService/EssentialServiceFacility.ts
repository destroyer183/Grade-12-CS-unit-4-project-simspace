import { Facility } from "../facility";

export class EssentialServiceFacility extends Facility{
    
  
    protected _isRequired : boolean = true

    constructor(
        xInput : number,
        yInput : number,
        buildCost : number,
        maintenanceCost : number,
        powerCost : number,
       
    ) {
        super(xInput, yInput, buildCost, maintenanceCost,powerCost, 0);
    }

    
}