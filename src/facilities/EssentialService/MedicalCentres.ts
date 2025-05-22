import { EssentialServiceFacility } from "./EssentialService";

export class MedicalCentreFacility extends EssentialServiceFacility {
    constructor(xInput : number, yInput: number){
        super(xInput, yInput, 1000000000, 150000000, 20);
    }
}