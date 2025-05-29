import { FacilityType } from "../../core/dataTypes";
import { CommercialFacility } from "./Commercial";

export class RestaurantFacility extends CommercialFacility {
    constructor(x: number, y: number) {
        super(FacilityType.Government, x, y, 250000, 5000, 5, 10000, 30);
    }
}