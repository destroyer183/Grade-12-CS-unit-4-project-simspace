import { ResidentialFacility } from "./ResidentialFacility";

export class AffordableHomeFacility extends ResidentialFacility {

    constructor(xInput: number, yInput: number) {
        super(xInput, yInput, 50000, 8000, 25, 10, 0.01, 25000);
    }
}