import { FacilityType } from "../../core/main";
import { CommercialFacility } from "./CommercialFacility";

export class storsFacility extends CommercialFacility {
    constructor(x: number, y: number) {
        super(FacilityType.Government, x, y, 2000000, 50000, 5, 200000, 500);
    }
}