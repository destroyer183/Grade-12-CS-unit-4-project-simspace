import { IndustrialFacility } from "./IndustrialFacility";

export class EnvironmentalFacilities extends IndustrialFacility{
    
    constructor(xInput : number, yInput: number){
        super(xInput,yInput,200000000,3000000,75,0,0,30000)
    }
}