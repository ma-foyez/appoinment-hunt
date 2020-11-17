import React, { useEffect, useState } from 'react';
import HouseRentCard from '../HouseRentCard/HouseRentCard';
import * as ReactBootstrap from 'react-bootstrap';

const HouseRent = () => {
    const [houseRent, setHouseRent] = useState([]);
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        fetch('https://apartment-hunts.herokuapp.com/loadHouse')
            .then(res => res.json())
            .then(data => {
                setHouseRent(data)
                setLoading(true);
            })
    }, [])
    return (
        <React.Fragment>
            <div className="container text-center mt-5">
                <p className="text-secondary font-weight-bold">House Rent</p>
                <h2 className="brand-text">Discover the latest Rent <br />
                  available today</h2>

                <div className="row m-3 pt-5">
                    {
                        loading ? houseRent.map(data => <HouseRentCard key={data._id} houseData={data} ></HouseRentCard>) :
                            <div className="text-danger m-5 row text-center align-items-center font-weight-bold">
                                <ReactBootstrap.Spinner animation="border" />
                                <span className="ml-3">Loading service...........</span>
                            </div>
                    }
                </div>
            </div>
        </React.Fragment>
    );
};

export default HouseRent;


