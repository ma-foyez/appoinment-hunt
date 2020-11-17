import React from 'react';

const MyRentData = ({booking}) => {
    console.log(booking)
    return (
        <tr className="text-center">
            <td>{booking.serviceTitle}</td>
            <td>$ {booking.price}</td>
            <td> <button className="btn brand-btn">View Details</button> </td>
        </tr>
    );
};

export default MyRentData;