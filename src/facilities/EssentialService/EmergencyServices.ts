import { EssentialServiceFacility } from "./EssentialServiceFacility";

export class EmergencyServices extends EssentialServiceFacility{
    
    constructor(xInput : number, yInput: number){
        super(xInput,yInput,100000000,1000000,10)
    }
}