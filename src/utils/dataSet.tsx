import StepIcon1 from "../icons/StepIcon1"
import StepIcon2 from "../icons/StepIcon2"
import StepIcon3 from "../icons/StepIcon3"
import DomesticIcon from "../icons/DomesticIcon"
import GardeningIcon from "../icons/GardeningIcon"
import HandymanIcon from "../icons/HandymanIcon"
import MobileStorageIcon from "../icons/MobileStorageIcon"
import StorageIcon from "../icons/StorageIcon"

export const categoryData = [
    {
        category: "CLEANING",
        services: [
            "End of Tenancy Cleaning",
            "Domestic Cleaning",
            "Oven/BBQ Cleaning",
            "Upholstery Cleaning",
            "Window Cleaning",
            "Carpet/Rug Cleaning",
            "Antiviral Sanitisation",
            "Pressure Washing",
            "Gutter Cleaning",
            "Ironing",
            "After Builders Cleaning",
            "Holiday Rental Cleaning",
            "Vehicle Sanitisation",
            "Hard Floor Cleaning",
            "Curtains and Blinds Cleaning"
        ]
    },
    {
        category: "GARDENING & LANDSCAPING",
        services: [
            "Garden Maintenance",
            "Garden Clearance",
            "Lawn Mowing",
            "Pressure Washing",
            "Landscaping Survey",
            "Tree Surgery"
        ]
    },
    {
        category: "REMOVALS",
        services: [
            "Removals",
            "Moving To Storage",
            "Man & Van",
            "Boxes Delivery",
            "Packing Service",
            "Furniture Assembly",
            "Office Removals Survey"
        ]
    },
    {
        category: "WASTE REMOVAL",
        services: [
            "Household Waste",
            "Green Waste Removal",
            "Builders Waste",
            "Office Clearance",
            "Loft/Cellar Clearance",
            "Christmas Tree Recycle",
            "Appliance Disposal"
        ]
    }
]

export const steps = [{
    text: 'Select a service and your desired timeslot',
    icon: <StepIcon1 />
}, {
    text: 'Pick the “Handy services” price (adds £89 to your total)',
    icon: <StepIcon2 />
}, {
    text: 'Enjoy £300 in credits and member-only rates',
    icon: <StepIcon3 />
}]

export const serviceData = [

    {
        category: "Domestic cleaning",
        icon: <DomesticIcon />
    },
    {
        category: 'Gardening',
        icon: <GardeningIcon />
    },
    {
        category: 'Mobile storage',
        icon: <MobileStorageIcon />
    },
    {
        category: 'Storage',
        icon: <StorageIcon />
    },
    {
        category: 'Handyman',
        icon: <HandymanIcon />
    }

]

