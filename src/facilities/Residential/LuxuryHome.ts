import { ResidentialFacility } from "./ResidentialFacility";

export class LuxuryResidentialFacility extends ResidentialFacility {

    public adjacentStore: boolean = false;
    public adjacentRestaurant: boolean = false;

    constructor(xInput: number, yInput: number) {
        super(xInput, yInput, 1000000000, 10000000, 100, 15000, 500, 10000);
    }
}