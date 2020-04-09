import React from 'react'

const Customers = ({ customers }) => {
    return (
    <div>
        <center><h1>Customer List</h1></center>
        <table id="dtBasicExample" className="table table-striped table-bordered table-sm" cellSpacing="0" width="100%">
            <thead>
                <tr>
                    <th className="th-sm">CustomerId
            
                    </th>
                    <th className="th-sm">Customer Name
            
                    </th>
                    <th className="th-sm">Customer Email
            
                    </th>
                    <th className="th-sm">Customer Phone
            
                    </th>
                </tr>
            </thead>
            <tbody>
            {customers.map((customer) => (
                <tr key={customer.customerId}>
                    <td>{customer.customerId}</td>
                    <td>{customer.firstName} {customer.lastName}</td>
                    <td>{customer.email}</td>
                    <td>{customer.phoneNumber}</td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
    )
};

export default Customers