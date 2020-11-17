import React, { useState } from 'react';
import './BooklistData.css'
const BooklistData = ({ booking }) => {
    const [status, setStatus] = useState({});
    const handleStatusChange = (e) => {
        const newStatus = e.target.value;
        fetch(`http://localhost:5000/updateStatus?id=` + booking._id, {
            method: "PATCH",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ status: newStatus })
        })
            .then(res => res.json())
            .then(data => {
                alert('Status updated')
            })
    }

    return (
        <>
            <tr>
                <td>{booking.name}</td>
                <td>{booking.email}</td>
                <td>{booking.service}</td>
                <td>{booking.projectDetails}</td>
                <td>
                    <>
                        <select onChange={handleStatusChange} className={`status color-${booking.status}`}>
                            {
                                booking.status === "Panding" &&
                                <>
                                    <option selected value={booking.status}>{booking.status}</option>
                                    <option value="On-going">On going</option>
                                    <option value="Done">Done</option>
                                </>
                            }
                            {
                                booking.status === "On-going" &&
                                <>
                                    <option selected value={booking.status}>{booking.status}</option>
                                    <option value="Panding">Panding</option>
                                    <option value="Done">Done</option>
                                </>
                            }
                            {
                                booking.status === "Done" &&
                                <>
                                    <option selected value={booking.status}>{booking.status}</option>
                                    <option value="Panding">Panding</option>
                                    <option value="On-going">On going</option>
                                </>
                            }

                        </select>
                    </>
                </td>
               
            </tr>
        </>
    );
};

export default BooklistData;