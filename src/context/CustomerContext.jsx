import { createContext, useState } from "react";
const CustomerContext = createContext();

export function CustomerProvider ({ children }){

    const [customer, setCustomer] = useState([
        {
            id: 'C001',
            cName: 'Saman',
            address : 'Gampaha',
            phone : '07136584298',
            rentedEq : [
                {
                    eName : 'Compressor'
                }
            ]
        },
        {
            id: 'C002',
            cName: 'Kamal',
            address : 'Matara',
            phone : '07236514528',
            rentedEq : [
                {
                    eName : 'Chain Saw'
                }
            ]
        },
        {
            id: 'C003',
            cName: 'Anne',
            address : 'Nuwara Eliya',
            phone : '07136581258',
            rentedEq : [
                {
                    eName : 'Power Generator'
                }
            ]
        }

    ])

    //Display Customers 
    const getCustomerById = (id) => {
        const displayCustomer = customer.find(cus => cus.id === id);
        return displayCustomer;
    }

    return (
        <CustomerContext.Provider value = {{customer, getCustomerById}}>{children}</CustomerContext.Provider>
    )
}




export default CustomerContext; 