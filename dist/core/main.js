import { GridSquare } from "./GridSquare";
import { render, setupHoverDebug } from "../facilities/render/renderer";
import { FacilityType } from "./dataTypes";
import { LuxuryResidentialFacility } from "../facilities/Residential/LuxuryResidential";
import { PowerPlantFacility } from "../facilities/EssentialService/PowerPlant";
export class Planet {
    constructor(canvas) {
        this.canvas = canvas;
        this.money = 5000000000;
        this.month = 0;
        this.facilities = [];
        this.power = 0;
        this.hasPDS = false;
        if (Planet.instance !== undefined)
            throw new Error("Error! can't create more than one instance of a singleton class.");
        this.initializeGrid();
        this.startGameLoop();
        setupHoverDebug(canvas, document.getElementById('debug-info'));
    }
    initializeGrid() {
        for (let i = 0; i < Planet.grid.length; i++) {
            for (let j = 0; j < Planet.grid[i].length; j++) {
                Planet.grid[i][j] = new GridSquare(j, i);
            }
        }
    }
    startGameLoop() {
        setInterval(() => {
            if (!this.gameActive)
                return;
            this.month++;
            this.processMonthlyUpdates();
            this.checkDisasters();
            render(this.canvas);
            // this.updateUI();
        }, 10000); // 10 seconds = 1 month
    }
    placeFacility(facility) {
        Planet.grid[facility.y][facility.x] = facility;
        if (facility instanceof PowerPlantFacility)
            this.powerFacilities.push(facility);
        else
            this.facilities.push(facility);
        this.money -= facility.buildCost;
        for (let row of Planet.grid) {
            for (let square of row) {
                let distance = Planet.calculateDist(facility, square);
                if (square instanceof GridSquare) {
                    square.dist[facility.facilityType] = Math.min(distance, square.dist[facility.facilityType]);
                    square.dist[facility.parentType] = Math.min(distance, square.dist[facility.parentType]);
                }
                else if (square instanceof LuxuryResidentialFacility && facility.facilityType === FacilityType.Store && distance === 1) {
                    square.adjacentStore = true;
                }
                else if (square instanceof LuxuryResidentialFacility && facility.facilityType === FacilityType.Restaurant && distance === 1) {
                    square.adjacentRestaurant = true;
                }
            }
        }
        render(this.canvas);
    }
    processMonthlyUpdates() {
        // Update all facilities
        [...this.powerFacilities, ...this.facilities].forEach(facility => {
            facility.monthlyTick();
            this.power = (this.power - facility.powerCost <= 0) ? 0 : this.power - facility.powerCost;
            // Update economy
            if (this.power)
                this.money += facility.revenue - facility.maintenanceCost;
            else
                this.money -= facility.maintenanceCost;
        });
    }
    checkDisasters() {
        if (!this.hasPDS) {
            const asteroidChance = Math.random() < 0.01;
            const alienChance = Math.random() < 0.01;
            if (asteroidChance || alienChance) {
                this.gameActive = false;
                alert(`Game Over! ${asteroidChance ? "Asteroid" : "Alien"} destroyed the planet!`);
            }
        }
    }
    // private updateUI(): void {
    //     document.getElementById('money')!.textContent = `$${this.money.toLocaleString()}`;
    //     document.getElementById('power')!.textContent = 
    //         `${this.power.consumption}/${this.power.production}`;
    //     document.getElementById('month')!.textContent = this.month.toString();
    // }
    static calculateDist(p1, p2) {
        return Math.abs(p2.x - p1.x) + Math.abs(p2.y - p1.y);
    }
}
Planet.grid = new Array(50).fill(new Array(50));
// Initialize when DOM is ready
// document.addEventListener('DOMContentLoaded', () => {
//     const canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;
//     Planet.initialize(canvas);
//     // Example facility placement
//     const initialPowerPlant = new PowerPlantFacility(25, 25);
//     Planet.instance.placeFacility(initialPowerPlant, 25, 25);
// });
//# sourceMappingURL=main.js.map