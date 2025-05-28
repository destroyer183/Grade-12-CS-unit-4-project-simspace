import { FacilityType } from "../../core/main";
import { Facility } from "../facility";

export class CommercialFacility extends Facility{

    protected _maxDistanceFromResidential : number = 6

     constructor(facilityType: FacilityType,
        x: number,
        y: number,
        buildCost: number,
        maintenanceCost: number,
        powerCost: number,
        taxGained : number,
        pollution : number) {
            
        super(facilityType, x, y, buildCost, maintenanceCost, powerCost, taxGained, pollution);
    }


      protected set maxDistanceFromResidential(val: number) {
        this._maintenanceCost = val;
    }

    public get maxDistanceFromResidential(): number {
        return this._revenue * this._maxDistanceFromResidential;
    }

}