// src/core/main.ts
import { Facility } from "../facilities/facility";
import { GridSquare } from "./GridSquare";
import { render, setupHoverDebug } from "../render/renderer";

export enum FacilityType {
    EmergencyService = "emergency service",
    EducationCentre = "education centre",
    MedicalCentre = "medical centre",
    Government = "government",
    PowerPlant = "power plant",
    PDS = "planetary defense system",
    LuxuryResidential = "luxury residential",
    ComfortableResidential = "comfortable residential",
    AffordableResidential = "affordable residential",
    Factory = "factory",
    Warehouse = "warehouse",
    Environmental = "environmental",
    Store = "store",
    Restaurant = "restaurant",
    Office = "office"
};

export class Planet {
    static instance: Planet;
    static grid: Array<Array<GridSquare | Facility>>;
    
    private money: number = 5_000_000_000;
    private power: { production: number; consumption: number } = { production: 0, consumption: 0 };
    private month: number = 0;
    private facilities: Facility[] = [];
    private gameActive: boolean = true;

    private constructor(private canvas: HTMLCanvasElement) {
        this.initializeGrid();
        this.startGameLoop();
        setupHoverDebug(canvas, document.getElementById('debug-info')!);
    }

    public static initialize(canvas: HTMLCanvasElement): Planet {
        if (!Planet.instance) {
            Planet.instance = new Planet(canvas);
        }
        return Planet.instance;
    }

    private initializeGrid(): void {
        Planet.grid = Array.from({ length: 50 }, () => 
            Array.from({ length: 50 }, () => new GridSquare())
        );
    }

    private startGameLoop(): void {
        setInterval(() => {
            if (!this.gameActive) return;
            
            this.month++;
            this.processMonthlyUpdates();
            this.updatePowerBalance();
            this.checkDisasters();
            render(this.canvas);
            
            this.updateUI();
        }, 10000); // 10 seconds = 1 month
    }

    public placeFacility(facility: Facility, x: number, y: number): boolean {
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

    private validatePlacement(facility: Facility, x: number, y: number): boolean {
        // Basic validation
        if (x < 0 || x >= 50 || y < 0 || y >= 50) return false;
        if (Planet.grid[y][x] instanceof Facility) return false;

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

    private hasEssentialServicesNearby(x: number, y: number): boolean {
        const requiredTypes = [
            FacilityType.EmergencyService,
            FacilityType.EducationCentre,
            FacilityType.MedicalCentre,
            FacilityType.Government,
            FacilityType.PowerPlant
        ];

        return requiredTypes.every(type => 
            this.findFacilitiesInRadius(x, y, 8).some(f => f.facilityType === type)
        );
    }

    private hasPowerPlantNearby(x: number, y: number): boolean {
        return this.findFacilitiesInRadius(x, y, 6)
            .some(f => f.facilityType === FacilityType.PowerPlant);
    }

    private findFacilitiesInRadius(x: number, y: number, radius: number): Facility[] {
        const facilities: Facility[] = [];
        
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

    private processMonthlyUpdates(): void {
        // Update all facilities
        this.facilities.forEach(facility => {
            facility.monthlyTick();
            
            // Update economy
            this.money += facility.revenue;
            this.money -= facility.maintenanceCost;
        });
    }

    private updatePowerBalance(): void {
        this.power = this.facilities.reduce((balance, facility) => {
            if (facility.facilityType === FacilityType.PowerPlant) {
                balance.production += Math.abs(facility.powerCost);
            } else {
                balance.consumption += facility.powerCost;
            }
            return balance;
        }, { production: 0, consumption: 0 });
    }

    private checkDisasters(): void {
        if (!this.hasPlanetaryDefense()) {
            const asteroidChance = Math.random() < 0.01;
            const alienChance = Math.random() < 0.01;
            
            if (asteroidChance || alienChance) {
                this.gameActive = false;
                alert(`Game Over! ${asteroidChance ? "Asteroid" : "Alien"} destroyed the planet!`);
            }
        }
    }

    private hasPlanetaryDefense(): boolean {
        return this.facilities.some(f => f.facilityType === FacilityType.PDS);
    }

    private updateUI(): void {
        document.getElementById('money')!.textContent = `$${this.money.toLocaleString()}`;
        document.getElementById('power')!.textContent = 
            `${this.power.consumption}/${this.power.production}`;
        document.getElementById('month')!.textContent = this.month.toString();
    }

    public calculateDist(x1: number, y1: number, x2: number, y2: number): number {
        return Math.abs(x2 - x1) + Math.abs(y2 - y1);
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;
    Planet.initialize(canvas);
    
    // Example facility placement
    const initialPowerPlant = new PowerPlantFacility(25, 25);
    Planet.instance.placeFacility(initialPowerPlant, 25, 25);
});