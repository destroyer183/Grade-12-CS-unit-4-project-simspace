import { EssentialServiceFacility } from "./EssentialService";

export class PowerPlantFacility extends EssentialServiceFacility {
    constructor(xInput: number, yInput: number){
        super(xInput, yInput, 500000000, 2000000, -100);
    }
}