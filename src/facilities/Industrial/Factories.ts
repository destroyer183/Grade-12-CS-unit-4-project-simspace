import { IndustrialFacility } from "./IndustrialFacility";

export class Factories extends IndustrialFacility{
    protected buildCost : number = 50000000;
    protected maintenanceCost : number = 500000;
    protected revenueGenerated : number = 5000000;
    protected powerCost : number = 50;
    protected pollutionUnits : number = 20000;
    protected firstRevenue : number = 0;
    protected secondRevenue : number = 1000000;
    protected thirdRevenue : number = 2000000;
    protected fourthRevenue : number = 3000000;
    protected fifthRevenue : number = 4000000;
    
}