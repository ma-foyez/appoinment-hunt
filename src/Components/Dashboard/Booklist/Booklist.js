import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import BooklistData from '../BooklistData/BooklistData';
import DashboardNav from '../DashboardNav/DashboardNav';
import SideMenu from '../SideMenu/SideMenu';
import * as ReactBootstrap from 'react-bootstrap';

const Booklist = () => {
    const [BookingData, setBookingData] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetch('https://young-shore-62919.herokuapp.com/loadAllOrders')
            .then(res => res.json())
            .then(data => {
                setBookingData(data);
                setLoading(true);
            })
    }, [BookingData]);


    return (
        <section>
            <DashboardNav></DashboardNav>
            <div className="row">
                <div className="col-md-2">
                    <SideMenu></SideMenu>
                </div>
                <div className="col-md-10 dashboard-container">
                    <h2 className="ml-4 pb-2 pt-4 font-weight-bold">Book-List</h2>
                    {
                        loading ?
                            <div className="shadow-sm p-3 ml-4 mr-4 mb-5 bg-white rounded">
                                <Table responsive className="table-bordered table-hover">
                                    <thead class="thead-light">
                                        <tr className="text-center">
                                            <th>Name</th>
                                            <th>Email ID</th>
                                            <th>Phone</th>
                                            <th>Message</th>
                                            <th>Status</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            BookingData.map(booking => <BooklistData key={booking._id} booking={booking}></BooklistData>)
                                        }
                                    </tbody>
                                </Table>
                            </div> :
                            <div className="text-danger m-5 d-flex align-items-center font-weight-bold">
                                <ReactBootstrap.Spinner animation="border" />
                                <span className="ml-3"> Loading service list...........</span>
                            </div>
                    }


                </div>
            </div>
        </section>
    );
};

export default Booklist;