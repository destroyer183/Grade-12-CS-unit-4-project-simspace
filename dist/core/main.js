export var FacilityType;
(function (FacilityType) {
    FacilityType["EmergencyService"] = "emergency service";
    FacilityType["EducationCentre"] = "education centre";
    FacilityType["MedicalCentre"] = "medical centre";
    FacilityType["Government"] = "government";
    FacilityType["PowerPlant"] = "power plant";
    FacilityType["LuxuryHome"] = "luxury home";
    FacilityType["ComfortableHome"] = "comfortable home";
    FacilityType["AffordableHome"] = "affordable home";
    FacilityType["Factory"] = "factory";
    FacilityType["Warehouse"] = "warehouse";
    FacilityType["Environmental"] = "environmental";
    FacilityType["Store"] = "store";
    FacilityType["Restaurant"] = "restaurant";
    FacilityType["Office"] = "office";
    FacilityType["PDS"] = "planetary defense system";
})(FacilityType || (FacilityType = {}));
;
export class Player {
    constructor() {
        this.facilities = new Array(2500);
        this.facilityIndicies = [];
        this.money = 5000000000;
        this.population = 0;
        this.timer = 0;
        if (Player.instance !== undefined)
            throw new Error("Error! can't create another instance of a singleton class.");
        Player.instance = this;
    }
    gameTick() {
        // check if disaster occurs
        // loop over every facility
        // update different variables by incramenting them by the facility attributes
        // incrament power
        // incrament population
        // incrament revenue
        // incrament pollution
        // incrament maintenance costs
    }
    createFacility(type) {
        // switch case to make the object
        // check if player has enough money
        // check if surroundings satisfy building
        // add facility to attributes if player has enough money
    }
}
//# sourceMappingURL=main.js.map