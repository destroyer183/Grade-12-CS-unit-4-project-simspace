import { Facility } from "../Facility";

export class EssentialServiceFacility extends Facility {
    constructor(xInput: number, yInput: number, buildCost: number, maintenanceCost: number, powerCost: number) {
        super(xInput, yInput, buildCost, maintenanceCost, powerCost, 0);
    }
}