import { FacilityType } from "./dataTypes";

export class GridSquare {
    public dist: Record<FacilityType, number> = {
        "essential service": 100,
        "emergency service": 100,
        "education centre": 100,
        "medical centre": 100,
        "government": 100,
        "power plant": 100,
        "planetary defense system": 100,
        "residential": 100,
        "luxury residential": 100,
        "comfortable residential": 100,
        "affordable residential": 100,
        "industrial": 100,
        "factory": 100,
        "warehouse": 100,
        "environmental": 100,
        "commercial": 100,
        "store": 100,
        "restaurant": 100,
        "office": 100
    };
    constructor(
        public x: number,
        public y: number
    ) {}
}