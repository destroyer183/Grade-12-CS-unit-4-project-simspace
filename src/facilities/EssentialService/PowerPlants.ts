import { EssentialServiceFacility } from "./EssentialServiceFacility";

export class PowerPlants extends EssentialServiceFacility{
    protected buildCost : number = 500000000;
    protected maintenanceCost : number = 2000000;
    protected powerCost : number = 100;
}