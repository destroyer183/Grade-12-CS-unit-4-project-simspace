import { EssentialServiceFacility } from "./EssentialService";

export class EducationCentreFacility extends EssentialServiceFacility {  
    constructor(xInput : number, yInput: number){
        super(xInput, yInput, 500000000, 50000000, 15);
    }
}