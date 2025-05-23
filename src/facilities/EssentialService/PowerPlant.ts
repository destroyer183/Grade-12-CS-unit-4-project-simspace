import { FacilityType } from "../../core/main";
import { EssentialServiceFacility } from "./EssentialService";

export class PowerPlantFacility extends EssentialServiceFacility {
    constructor(x: number, y: number) {
        super(FacilityType.PowerPlant, x, y, 500000000, 2000000, -100);
    }
}