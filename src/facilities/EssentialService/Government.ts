import { FacilityType } from "../../core/dataTypes";
import { EssentialServiceFacility } from "./EssentialService";

export class GovernmentFacility extends EssentialServiceFacility {
    constructor(x: number, y: number) {
        super(FacilityType.Government, x, y, 100000000, 1000000, 10);
    }
}