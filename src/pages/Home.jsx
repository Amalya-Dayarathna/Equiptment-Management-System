import React, {useContext} from "react";
//import {Link} from 'react-router-dom';

import EquipmentContext from "../context/EquipmentContext";
//import CustomerContext from "../context/CustomerContext";


const Home = () => {

    //Use the context API
    const { equipment } = useContext (EquipmentContext);
    //const { customers } = useContext (CustomerContext);

    return (

        <div className='container'>
            <div class="container px-4 text-center">
                <div class="row gx-5">
                    <div class="col">
                        <div class="p-3">Equipment List</div>

                        <table className='table table-striped'>
                            <thead>
                            <tr>
                                <th>Equipment ID</th>
                                <th>Name</th>
                                
                            </tr>
                            </thead>
                            <tbody>
                                {
                                    equipment.map( eq => {
                                        return (
                                            <tr key = {eq.id}>
                                                <td>{eq.id}</td>
                                                <td>{eq.eName}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>

                        </table>
                    </div>
                    <div class="col">
                        <div class="p-3"> Customer List</div>
                        <table className='table table-striped'>
                            <thead>
                                <tr>
                                    <th>Customer ID</th>
                                    <th>Name</th>
                                    
                                </tr>
                            </thead>
                            {/* <tbody>
                                {
                                    customers.map( cus => {
                                        return (
                                            <tr key = {cus.id}>
                                                <td>{cus.id}</td>
                                                <td>{cus.cname}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>  */}
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;