import { EssentialServiceFacility } from "./EssentialServiceFacility";

export class EmergencyServices extends EssentialServiceFacility{
    protected buildCost : number = 100000000;
    protected maintenanceCost : number = 1000000;
    protected powerCost : number = 10;
}