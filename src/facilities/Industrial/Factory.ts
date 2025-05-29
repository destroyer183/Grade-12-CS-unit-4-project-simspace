import { FacilityType } from "../../core/dataTypes";
import { IndustrialFacility } from "./Industrial";

export class FactoryFacility extends IndustrialFacility {
    constructor(x: number, y: number) {
        super(FacilityType.Factory, x, y, 50000000, 500000, 50, 5000000, 20000, 0);
    }
}