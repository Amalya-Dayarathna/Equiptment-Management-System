import { createContext, useState} from "react";
const EquipmentContext = createContext();

export function EquipmentProvider ({children}) {

    const [equipment, setEquipment] = useState([
        {
            id: 'E001',
            eName: 'Compressor',
            description : 'High quality Compressor',
            price : 'Rs.5000',
            availability : '10'
        },
        {
            id: 'E002',
            eName: 'Power Generator',
            description : 'High quality Power Generator',
            price : 'Rs.10000',
            availability : '3'
        },
        {
            id: 'E003',
            eName: 'Chain Saw',
            description : 'High quality Chain Saw',
            price : 'Rs.3000',
            availability : '12'
        }

    ]);

    //Display Equipments 
    const getEquipmentById = (id) => {
        const displayEquipment = equipment.find(eq => eq.id == id);
        return displayEquipment;
    }

    return (
        <EquipmentContext.Provider value = {{equipment, getEquipmentById}}>{children}</EquipmentContext.Provider>
    )
}

export default EquipmentContext;