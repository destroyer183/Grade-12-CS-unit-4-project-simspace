import { EssentialServiceFacility } from "./EssentialServiceFacility";

export class Government extends EssentialServiceFacility{
    protected buildCost : number = 100000000;
    protected maintenanceCost : number = 1000000;
    protected powerCost : number = 10;
}