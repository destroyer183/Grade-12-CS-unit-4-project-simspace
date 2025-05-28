// src/core/main.ts
import { Facility } from "../facilities/Facility";
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

    static grid: Array<Array<GridSquare | Facility>> = new Array(50).fill( new Array(50).fill(new GridSquare) );
    
    private money: number = 5_000_000_000;
    private month: number = 0;
    private facilities: Facility[] = [];
    private gameActive: boolean;

    public constructor(private canvas: HTMLCanvasElement) {

        if (Planet.instance !== undefined) throw new Error("Error! can't create more than one instance of a singleton class.");


        this.startGameLoop();

        setupHoverDebug(canvas, document.getElementById('debug-info')!);
    }



    private startGameLoop(): void {
        setInterval(() => {
            if (!this.gameActive) return;
            
            this.month++;
            this.processMonthlyUpdates();
            this.checkDisasters();
            render(this.canvas);
            
            // this.updateUI();
        }, 10000); // 10 seconds = 1 month
    }

    public placeFacility(facility: Facility) {



        // add a 'requirements' record to each facility that stores the maximum distance a facility can be from it
        // compare it with the data on the grid square
        // call 'validatePlacement'

        

        if (this.money < facility.buildCost) {
            console.error("Insufficient funds");
        }

        Planet.grid[facility.y][facility.x] = facility;

        this.facilities.push(facility);

        this.money -= facility.buildCost;

        render(this.canvas);

    }

    private validatePlacement(facility: Facility): boolean {

        if (facility.buildRequirements === undefined) return true;
        // Basic validation
        

        return true;
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

    // private updateUI(): void {
    //     document.getElementById('money')!.textContent = `$${this.money.toLocaleString()}`;
    //     document.getElementById('power')!.textContent = 
    //         `${this.power.consumption}/${this.power.production}`;
    //     document.getElementById('month')!.textContent = this.month.toString();
    // }

    public calculateDist(x1: number, y1: number, x2: number, y2: number): number {
        return Math.abs(x2 - x1) + Math.abs(y2 - y1);
    }
}

// Initialize when DOM is ready
// document.addEventListener('DOMContentLoaded', () => {
//     const canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;
//     Planet.initialize(canvas);
    
//     // Example facility placement
//     const initialPowerPlant = new PowerPlantFacility(25, 25);
//     Planet.instance.placeFacility(initialPowerPlant, 25, 25);
// });