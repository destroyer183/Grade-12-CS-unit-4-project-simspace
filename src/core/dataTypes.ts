import { EssentialServiceFacility } from "../facilities/EssentialService/EssentialService";
import { EmergencyServiceFacility } from "../facilities/EssentialService/EmergencyService";
import { EducationCentreFacility } from "../facilities/EssentialService/EducationCentre";
import { MedicalCentreFacility } from "../facilities/EssentialService/MedicalCentre";
import { GovernmentFacility } from "../facilities/EssentialService/Government";
import { PowerPlantFacility } from "../facilities/EssentialService/PowerPlant";
import { LuxuryResidentialFacility } from "../facilities/Residential/LuxuryResidential";
import { ComfortableResidentialFacility } from "../facilities/Residential/ComfortableResidential";
import { AffordableResidentialFacility } from "../facilities/Residential/AffordableResidential";
import { FactoryFacility } from "../facilities/Industrial/Factory";
import { WarehouseFacility } from "../facilities/Industrial/Warehouse";
import { EnvironmentalFacility } from "../facilities/Industrial/Environental";
import { StoreFacility } from "../facilities/Commercial/Store";
import { RestaurantFacility } from "../facilities/Commercial/Restaurant";
import { OfficeFacility } from "../facilities/Commercial/Office";



export enum FacilityType {
    EssentialService = "essential service",
    EmergencyService = "emergency service",
    EducationCentre = "education centre",
    MedicalCentre = "medical centre",
    Government = "government",
    PowerPlant = "power plant",
    PDS = "planetary defense system",
    Residential = "residential",
    LuxuryResidential = "luxury residential",
    ComfortableResidential = "comfortable residential",
    AffordableResidential = "affordable residential",
    Industrial = "industrial",
    Factory = "factory",
    Warehouse = "warehouse",
    Environmental = "environmental",
    Commercial = "commercial",
    Store = "store",
    Restaurant = "restaurant",
    Office = "office"
};

export type DistData = Record<FacilityType, number>;

export type EssentialServiceFacilities = (
    EssentialServiceFacility | 
    EmergencyServiceFacility | 
    EducationCentreFacility | 
    MedicalCentreFacility | 
    GovernmentFacility | 
    PowerPlantFacility
);

export type ResidentialFacilities = (
    LuxuryResidentialFacility |
    ComfortableResidentialFacility |
    AffordableResidentialFacility
);

export type IndustrialFacilities = (
    FactoryFacility |
    WarehouseFacility |
    EnvironmentalFacility
);

export type CommercialFacilities = (
    StoreFacility |
    RestaurantFacility |
    OfficeFacility
);
