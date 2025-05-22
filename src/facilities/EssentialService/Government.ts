import { EssentialServiceFacility } from "./EssentialServiceFacility";

export class Government extends EssentialServiceFacility{
   
constructor(xInput : number, yInput: number){
        super(xInput,yInput,100000000,1000000,10)
    }
}