import { IndustrialFacility } from "./IndustrialFacility";

export class Factories extends IndustrialFacility{
   
     constructor(xInput : number, yInput: number){
        super(xInput,yInput,50000000,500000,50,5000000,20000,0)
    }
}