// src/core/main.ts
import { Facility } from "../facilities/facility";
import { GridSquare } from "./GridSquare";
import { render, setupHoverDebug } from "../render/renderer";
export var FacilityType;
(function (FacilityType) {
    FacilityType["EmergencyService"] = "emergency service";
    FacilityType["EducationCentre"] = "education centre";
    FacilityType["MedicalCentre"] = "medical centre";
    FacilityType["Government"] = "government";
    FacilityType["PowerPlant"] = "power plant";
    FacilityType["PDS"] = "planetary defense system";
    FacilityType["LuxuryResidential"] = "luxury residential";
    FacilityType["ComfortableResidential"] = "comfortable residential";
    FacilityType["AffordableResidential"] = "affordable residential";
    FacilityType["Factory"] = "factory";
    FacilityType["Warehouse"] = "warehouse";
    FacilityType["Environmental"] = "environmental";
    FacilityType["Store"] = "store";
    FacilityType["Restaurant"] = "restaurant";
    FacilityType["Office"] = "office";
})(FacilityType || (FacilityType = {}));
;
export class Planet {
    constructor(canvas) {
        this.canvas = canvas;
        this.money = 5000000000;
        this.power = { production: 0, consumption: 0 };
        this.month = 0;
        this.facilities = [];
        this.gameActive = true;
        this.initializeGrid();
        this.startGameLoop();
        setupHoverDebug(canvas, document.getElementById('debug-info'));
    }
    static initialize(canvas) {
        if (!Planet.instance) {
            Planet.instance = new Planet(canvas);
        }
        return Planet.instance;
    }
    initializeGrid() {
        Planet.grid = Array.from({ length: 50 }, () => Array.from({ length: 50 }, () => new GridSquare()));
    }
    startGameLoop() {
        setInterval(() => {
            if (!this.gameActive)
                return;
            this.month++;
            this.processMonthlyUpdates();
            this.updatePowerBalance();
            this.checkDisasters();
            render(this.canvas);
            this.updateUI();
        }, 10000); // 10 seconds = 1 month
    }
    placeFacility(facility, x, y) {
        if (!this.validatePlacement(facility, x, y)) {
            console.error("Invalid facility placement");
            return false;
        }
        if (this.money < facility.buildCost) {
            console.error("Insufficient funds");
            return false;
        }
        Planet.grid[y][x] = facility;
        this.facilities.push(facility);
        this.money -= facility.buildCost;
        render(this.canvas);
        return true;
    }
    validatePlacement(facility, x, y) {
        // Basic validation
        if (x < 0 || x >= 50 || y < 0 || y >= 50)
            return false;
        if (Planet.grid[y][x] instanceof Facility)
            return false;
        // Facility-specific rules
        switch (facility.facilityType) {
            case FacilityType.LuxuryResidential:
            case FacilityType.ComfortableResidential:
            case FacilityType.AffordableResidential:
                return this.hasEssentialServicesNearby(x, y);
            case FacilityType.Factory:
            case FacilityType.Warehouse:
                return this.hasPowerPlantNearby(x, y);
            case FacilityType.PDS:
                return !this.facilities.some(f => f.facilityType === FacilityType.PDS);
        }
        return true;
    }
    hasEssentialServicesNearby(x, y) {
        const requiredTypes = [
            FacilityType.EmergencyService,
            FacilityType.EducationCentre,
            FacilityType.MedicalCentre,
            FacilityType.Government,
            FacilityType.PowerPlant
        ];
        return requiredTypes.every(type => this.findFacilitiesInRadius(x, y, 8).some(f => f.facilityType === type));
    }
    hasPowerPlantNearby(x, y) {
        return this.findFacilitiesInRadius(x, y, 6)
            .some(f => f.facilityType === FacilityType.PowerPlant);
    }
    findFacilitiesInRadius(x, y, radius) {
        const facilities = [];
        for (let dy = -radius; dy <= radius; dy++) {
            for (let dx = -radius; dx <= radius; dx++) {
                const nx = x + dx;
                const ny = y + dy;
                if (nx >= 0 && nx < 50 && ny >= 0 && ny < 50) {
                    const cell = Planet.grid[ny][nx];
                    if (cell instanceof Facility) {
                        facilities.push(cell);
                    }
                }
            }
        }
        return facilities;
    }
    processMonthlyUpdates() {
        // Update all facilities
        this.facilities.forEach(facility => {
            facility.monthlyTick();
            // Update economy
            this.money += facility.revenue;
            this.money -= facility.maintenanceCost;
        });
    }
    updatePowerBalance() {
        this.power = this.facilities.reduce((balance, facility) => {
            if (facility.facilityType === FacilityType.PowerPlant) {
                balance.production += Math.abs(facility.powerCost);
            }
            else {
                balance.consumption += facility.powerCost;
            }
            return balance;
        }, { production: 0, consumption: 0 });
    }
    checkDisasters() {
        if (!this.hasPlanetaryDefense()) {
            const asteroidChance = Math.random() < 0.01;
            const alienChance = Math.random() < 0.01;
            if (asteroidChance || alienChance) {
                this.gameActive = false;
                alert(`Game Over! ${asteroidChance ? "Asteroid" : "Alien"} destroyed the planet!`);
            }
        }
    }
    hasPlanetaryDefense() {
        return this.facilities.some(f => f.facilityType === FacilityType.PDS);
    }
    updateUI() {
        document.getElementById('money').textContent = `$${this.money.toLocaleString()}`;
        document.getElementById('power').textContent =
            `${this.power.consumption}/${this.power.production}`;
        document.getElementById('month').textContent = this.month.toString();
    }
    calculateDist(x1, y1, x2, y2) {
        return Math.abs(x2 - x1) + Math.abs(y2 - y1);
    }
}
// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('gameCanvas');
    Planet.initialize(canvas);
    // Example facility placement
    const initialPowerPlant = new PowerPlantFacility(25, 25);
    Planet.instance.placeFacility(initialPowerPlant, 25, 25);
});
//# sourceMappingURL=main.js.map