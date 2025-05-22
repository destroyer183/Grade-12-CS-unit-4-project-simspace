import { EssentialServiceFacility } from "./EssentialService";

export class GovernmentFacility extends EssentialServiceFacility {
    constructor(xInput : number, yInput: number){
        super(xInput, yInput, 100000000, 1000000, 10);
    }
}