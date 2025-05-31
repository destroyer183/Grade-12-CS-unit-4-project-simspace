import { FacilityType } from "../../core/dataTypes";
import { Facility } from "../facility";

export class IndustrialFacility extends Facility {
  
    protected _costFactor: number = 0;

    constructor(
        facilityType: FacilityType, 
        x: number, 
        y: number, 
        buildCost: number, 
        maintenanceCost: number, 
        powerCost: number, 
        revenue: number, 
        pollution: number, 
        costFactor: number
    ) {
        let buildRequirements: Record<FacilityType, number> = {
            "essential service": 100,
            "emergency service": 100,
            "education centre": 100,
            "medical centre": 100,
            "government": 100,
            "power plant": 6,
            "planetary defense system": 100,
            "residential": 100,
            "luxury residential": 100,
            "comfortable residential": 100,
            "affordable residential": 100,
            "industrial": 100,
            "factory": 100,
            "warehouse": 100,
            "environmental": 100,
            "commercial": 100,
            "store": 100,
            "restaurant": 100,
            "office": 100
        };
        super(facilityType, FacilityType.Industrial, x, y, buildCost, maintenanceCost, powerCost, revenue, pollution, buildRequirements);
        this.costFactor = costFactor;
    }

    protected set costFactor(val: number) {
        this._costFactor = val;
    }

    protected get costFactor(): number {
        return this._costFactor;
    }
    public get revenue(): number {
        return this.revenue * this.costFactor;
    }

    public monthlyTick() {
        this.costFactor += ( this.costFactor === 1) ? 0 : 0.2;
    }
}