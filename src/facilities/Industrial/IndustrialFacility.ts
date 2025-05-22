import { Facility } from "../facility";

export class IndustrialFacility extends Facility{
  
    protected _xInputFromPowerPlant : number = 6;
    protected _yInputFromPowerPlant : number = 6;
    protected _reducedAmountOfPollution : number
    protected _timeTofullRevenueFactory : number = 5
    protected _firstRevenue : number = 0;
    protected _secondRevenue : number = 1000000;
    protected _thirdRevenue : number = 2000000;
    protected _forthRevenue : number =  3000000;
    protected _fifthRevenue : number = 4000000;
    protected _sixthRevenue : number = 5000000;
    protected _maxDistanceEnvironmental : number = 10;

    constructor(
        xInput : number,
        yInput : number,
        buildCost : number,
        maintenanceCost : number,
        powerCost : number,
        gainedRevenue : number,
        pollutionProduced : number,
        pollutionReduced : number
    ){
        super(xInput, yInput, buildCost, maintenanceCost, powerCost, gainedRevenue)
    }

     public get xInputFromPowerPlant(): number {
        return this._xInputFromPowerPlant;
    }

     public get yInputFromPowerPlant(): number {
        return this._yInputFromPowerPlant;
    }

     public get reducedAmountOfPollution(): number {
        return  this._reducedAmountOfPollution;
    }
    
     public get timeToFullRevenueFactory(): number {
        return  this._timeTofullRevenueFactory;
    }
    
     public get firstRevenue(): number {
        return  this._firstRevenue;
    }
    
     public get secondRevenue(): number {
        return  this._secondRevenue
    }
    
     public get thirdRevenue(): number {
        return  this._thirdRevenue;
    }
    
     public get forthRevenue(): number {
        return  this._forthRevenue;
    }
    
     public get fifthRevenue(): number {
        return  this._fifthRevenue;
    }
    
     public get sixthRevenue(): number {
        return  this._sixthRevenue;
    }

    public get maxDistanceEnvironmental() : number {
        return this._maxDistanceEnvironmental
    }


    protected set xInputFromPowerPlant(val: number) {
        this._xInputFromPowerPlant = val;
    }
    
    protected set yInputFromPowerPlant(val: number) {
        this._yInputFromPowerPlant = val;
    }
    
    protected set reducedAmountOfPollution(val: number) {
        this._reducedAmountOfPollution = val;
    }
    
    protected set timeOfFullRevenueFactory(val: number) {
        this._timeTofullRevenueFactory = val;
    }
    
    protected set firstRevenue(val: number) {
        this._firstRevenue = val;
    }
    
    protected set secondRevenue(val: number) {
        this._secondRevenue = val;
    }
    
    protected set thirdRevenue(val: number) {
        this._thirdRevenue = val;
    }
    
    protected set forthRevenue(val: number) {
        this._forthRevenue = val;
    }
    
    protected set fifthRevenue(val: number) {
        this._fifthRevenue = val;
    }
    
    protected set sixthRevenue(val: number) {
        this._sixthRevenue = val;
    }

    protected set maxDistanceEnvironmental(val : number){
        this._maxDistanceEnvironmental = val
    }
    
    

}