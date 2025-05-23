import { FacilityType } from "../core/main";
import { FactoryFacility } from "./Industrial/Factory";

export class Facility {


    constructor(
        protected readonly _facilityType: FacilityType,
        protected _x: number,
        protected _y: number,
        protected _buildCost: number,
        protected _maintenanceCost: number,
        protected _powerCost: number,
        protected _revenue: number,
        protected _pollution: number
    ) {}

    protected set x(val: number) {
        this._x = val;
    }
    protected set y(val: number) {
        this._y = val;
    }
    protected set buildCost(val: number) {
        this._buildCost = val;
    }
    protected set maintenanceCost(val: number) {
        this._maintenanceCost = val;
    }
    protected set powerCost(val: number) {
        this._powerCost = val;
    }
    protected set revenue(val: number) {
        this._revenue = val;
    }
    protected set pollution(val: number) {
        this._pollution= val;
    }

    public get facilityType(): FacilityType {
        return this._facilityType;
    }
    public get x(): number {
        return this._x;
    } 
    public get y(): number {
        return this._y;
    } 
    public get buildCost(): number {
        return this._buildCost;
    } 
    public get maintenanceCost(): number {
        return this._maintenanceCost;
    } 
    public get powerCost(): number {
        return this._powerCost;
    } 
    public get revenue(): number {
        return this._revenue;
    }
    public get pollution(): number {
        return this._pollution;
    }

    public monthlyTick() {}

    public incramentRevenueFactor() {}
}