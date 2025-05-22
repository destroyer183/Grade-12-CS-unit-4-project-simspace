import { ResidentialFacility } from "./ResidentialFacility";

export class ComfortableResidentialFacility extends ResidentialFacility {
    constructor(xInput: number, yInput: number) {
        super(xInput, yInput, 500000000, 40000, 50, 1000, 0.05, 15000);
    }
}