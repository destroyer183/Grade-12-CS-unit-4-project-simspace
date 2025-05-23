import { FacilityType } from "./main";

export class GridSquare {
    private dist: Record<FacilityType, number> = {
        "emergency service": 100,
        "education centre": 100,
        "medical centre": 100,
        "government": 100,
        "power plant": 100,
        "planetary defense system": 100,
        "luxury home": 100,
        "comfortable home": 100,
        "affordable home": 100,
        "factory": 100,
        "warehouse": 100,
        "environmental": 100,
        "store": 100,
        "restaurant": 100,
        "office": 100
    };
}