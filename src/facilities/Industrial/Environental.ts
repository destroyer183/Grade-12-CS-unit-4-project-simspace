import { FacilityType } from "../../core/dataTypes";
import { IndustrialFacility } from "./Industrial";

export class EnvironmentalFacility extends IndustrialFacility {
    constructor(x: number, y: number) {
        super(FacilityType.Environmental, x, y, 200000000, 3000000, 75, 0, -30000, 1);
    }
}