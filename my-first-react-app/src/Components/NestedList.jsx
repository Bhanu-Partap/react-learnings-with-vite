// import React from 'react'
import { Table } from "react-bootstrap"

export default function Map() {

    const Brands = [
        {
            Name: "BMW", Model: "M5", Year: "2019", Address: [
                { Engine_No: "25436ad865", Origin: "Germany" },
                { Engine_No: "25436ad866", Origin: "Germany" },
                { Engine_No: "25436ad867", Origin: "Germany" },
                { Engine_No: "25436ad868", Origin: "Germany" }
            ]
        },
        {
            Name: "Lamborghini", Model: "SVJ", Year: "2019", Address: [
                { Engine_No: "78456SVJ5756", Origin: "Italy" },
                { Engine_No: "78456SVJ5757", Origin: "Italy" },
                { Engine_No: "78456SVJ5758", Origin: "Italy" },
                { Engine_No: "78456SVJ5759", Origin: "Italy" }
            ]
        },
        {
            Name: "Nissan", Model: "R-34", Year: "2015", Address: [
                { Engine_No: "GTR58755", Origin: "Japan" },
                { Engine_No: "GTR58756", Origin: "Japan" },
                { Engine_No: "GTR58757", Origin: "Japan" },
                { Engine_No: "GTR58758", Origin: "Japan" }
            ]
        }
    ];

    return (
        <div className="container">
            <h1>List with nested array</h1>
            <Table>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>Model</td>
                        <td>Year</td>
                        <td>Address</td>
                    </tr>
                </tbody>
                {
                    Brands.map((item) =>

                        <tr>
                            <td>{item.Name}</td>
                            <td>{item.Model}</td>
                            <td>{item.Year}</td>
                            <td>{
                                item.Address.map((data)=>
                                <tr>
                                <td>{data.Engine_No}</td>
                                <td>{data.Origin}</td>
                                </tr>
                                )
                            }</td>
                        </tr>
                    
                    )
                }
            </Table>
        </div>
    )
}
