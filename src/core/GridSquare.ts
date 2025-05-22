

export class GridSquare {

    // change this to use a record instead of multiple variables for more efficient value updating and getting
    
    private _educationDist: number = 100;
    private _emergencyDist: number = 100;
    private _governmentDist: number = 100;
    private _medicalDist: number = 100;
    private _powerDist: number = 100;
    private _storeDist: number = 100;
    private _restaurantDist: number = 100;

    public set educationDist(val: number) {
        this._educationDist = (val < this._educationDist) ? val : this._educationDist;
    }
    public set emergencyDist(val: number) {
        this._emergencyDist = (val < this._emergencyDist) ? val : this._emergencyDist;
    }
    public set governmentDist(val: number) {
        this._governmentDist = (val < this._governmentDist) ? val : this._governmentDist;
    }
    public set medicalDist(val: number) {
        this._medicalDist = (val < this._medicalDist) ? val : this._medicalDist;
    }
    public set powerDist(val: number) {
        this._powerDist = (val < this._powerDist) ? val : this._powerDist;
    }
    public set storeDist(val: number) {
        this._storeDist = (val < this._storeDist) ? val : this._storeDist;
    }
    public set restaurantDist(val: number) {
        this._restaurantDist = (val < this._restaurantDist) ? val : this._restaurantDist;
    }

    public get educationDist(): number {
        return this._educationDist;
    }
    public get emergencyDist(): number {
        return this._emergencyDist;
    }
    public get governmentDist(): number {
        return this._governmentDist;
    }
    public get medicalDist(): number {
        return this._medicalDist;
    }
    public get powerDist(): number {
        return this._powerDist;
    }
    public get storeDist(): number {
        return this._storeDist;
    }
    public get restaurantDist(): number {
        return this._restaurantDist;
    }
}