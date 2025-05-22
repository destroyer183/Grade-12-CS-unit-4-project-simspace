import { EssentialServiceFacility } from "./EssentialServiceFacility";

export class PowerPlants extends EssentialServiceFacility{

    constructor(xInput : number, yInput: number){
        super(xInput,yInput,500000000,2000000,0,100)
    }
}
