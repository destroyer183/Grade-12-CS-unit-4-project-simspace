import { Facility } from "../facilities/Facility";
import { GridSquare } from "./GridSquare";
import { render, setupHoverDebug } from "../render/renderer";
import { FacilityType, EssentialServiceFacilities, ResidentialFacilities, IndustrialFacilities, CommercialFacilities } from "./dataTypes";
import { LuxuryResidentialFacility } from "../facilities/Residential/LuxuryResidential";



export class Planet {

    static instance: Planet;

    static grid: Array<Array<GridSquare | EssentialServiceFacilities | ResidentialFacilities | IndustrialFacilities | CommercialFacilities>> = new Array(50).fill(new Array(50));
    
    private money: number = 5_000_000_000;
    private month: number = 0;
    private facilities: Facility[] = [];
    private gameActive: boolean;
    private hasPDS: boolean = false;

    public constructor(private canvas: HTMLCanvasElement) {

        if (Planet.instance !== undefined) throw new Error("Error! can't create more than one instance of a singleton class.");

        this.initializeGrid();

        this.startGameLoop();

        setupHoverDebug(canvas, document.getElementById('debug-info')!);
    }



    private initializeGrid() {
        for (let i = 0; i < Planet.grid.length; i++) {
            for(let j = 0; j < Planet.grid[i].length; j++) {
                Planet.grid[i][j] = new GridSquare(j, i);
            }
        }
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

        Planet.grid[facility.y][facility.x] = facility;

        this.facilities.push(facility);

        this.money -= facility.buildCost;

        for (let row of Planet.grid) {
            for (let square of row) {

                let distance: number = Planet.calculateDist(facility, square);

                if (square instanceof GridSquare) {
                    (<GridSquare>square).dist[facility.facilityType] = Math.min(distance, (<GridSquare>square).dist[facility.facilityType]);
                    (<GridSquare>square).dist[facility.parentType] = Math.min(distance, (<GridSquare>square).dist[facility.parentType]);

                } else if (square instanceof LuxuryResidentialFacility && facility.facilityType === FacilityType.Store && distance === 1) {
                    (<LuxuryResidentialFacility>square).adjacentStore = true;

                } else if (square instanceof LuxuryResidentialFacility && facility.facilityType === FacilityType.Restaurant && distance === 1) {
                    (<LuxuryResidentialFacility>square).adjacentRestaurant = true;

                }
            }
        }

        render(this.canvas);
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

    public static calculateDist(p1: Facility | GridSquare, p2: Facility | GridSquare): number {
        return Math.abs(p2.x - p1.x) + Math.abs(p2.y - p1.y);
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