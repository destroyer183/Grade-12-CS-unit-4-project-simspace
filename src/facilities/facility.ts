import { FacilityType, DistData } from "../core/dataTypes";



export class Facility {

    protected _facilityType: FacilityType;
    protected _parentType: FacilityType;
    protected _x: number;
    protected _y: number;
    protected _buildCost: number;
    protected _maintenanceCost: number;
    protected _powerCost: number;
    protected _revenue: number;
    protected _pollution: number;
    protected _buildRequirements: Record<FacilityType, number>;

    constructor(
        facilityType: FacilityType,
        parentType: FacilityType,
        x: number,
        y: number,
        buildCost: number,
        maintenanceCost: number,
        powerCost: number,
        revenue: number,
        pollution: number,
        buildRequirements?: DistData
    ) {
        this._facilityType = facilityType;
        this._parentType = parentType;
        this._x = x;
        this._y = y;
        this._buildCost = buildCost;
        this._maintenanceCost = maintenanceCost;
        this._powerCost = powerCost;
        this._revenue = revenue;
        this._pollution = pollution;
        if (buildRequirements !== undefined) this._buildRequirements = buildRequirements;
    }

    public get facilityType(): FacilityType {
        return this._facilityType;
    }
    public get parentType(): FacilityType {
        return this._parentType;
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
    public get buildRequirements(): Record<FacilityType, number> {
        return this._buildRequirements;
    }

    public monthlyTick() {}

    public incramentRevenueFactor() {}
}