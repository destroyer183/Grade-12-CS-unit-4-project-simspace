import { FacilityType } from "../../core/main";
import { CommercialFacility } from "./CommercialFacility";

export class OfficeFacility extends CommercialFacility {
    constructor(x: number, y: number) {
        super(FacilityType.Government, x, y, 3000000, 5000, 15, 20000, 800);
    }
}