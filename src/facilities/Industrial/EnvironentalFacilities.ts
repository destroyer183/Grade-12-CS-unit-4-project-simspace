import { IndustrialFacility } from "./IndustrialFacility";

export class EnvironmentalFacilities extends IndustrialFacility{
    protected buildCost : number = 200000000;
    protected maintenanceCost : number = 3000000;
    protected revenueGenerated : number = 0;
    protected powerCost : number = 10;
    protected pollutionUnits : number = 30000
    protected maxCoverageDistance : number = 10;
}