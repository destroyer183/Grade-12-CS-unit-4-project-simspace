import { ResidentialFacility } from "./ResidentialFacility";

export class LuxuryHomeFacility extends ResidentialFacility {
    constructor(xInput: number, yInput: number) {
        super(xInput, yInput, 1000000000, 10000000, 100, 15000, 500, 10000);
    }
}