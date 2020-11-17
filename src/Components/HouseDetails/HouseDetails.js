import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import banner from './../../images/images/Rectangle 13.png'
import './HouseDetails.css'
import * as ReactBootstrap from 'react-bootstrap';
import Navigation from '../Shareable/Navigation/Navigation';

const HouseDetails = () => {
    const { houseID } = useParams();
    const [houseRent, setHouseRent] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetch('https://apartment-hunts.herokuapp.com/houseDetails?ID=' + houseID)
            .then(res => res.json())
            .then(data => {
                setHouseRent(data)
            })
    }, [])

    console.log(houseRent)
    // find match data by id
    // const checkData = houseRent.find(data => data._id.toString() === houseID);
    return (
        <section className="house-details">
            <Navigation></Navigation>
            <div className="banner-top">
                <div className="container">
                    <h1 className="text-center pt-2 font-weight-bold">Apartment</h1>
                </div>
            </div>

            <div className="container pt-5">
                <div className="row">
                    <div className="col-md-8">
                        <div className="house p-3">
                            {/* {
                                loading ? <>
                                    <img className="img-fluid" src={`data:image/png;base64,${checkData.houseImage.img}`} alt="" />
                                    <h1>{checkData.serviceTitle}</h1>
                                </> :
                                    <div className="text-danger m-5 d-flex align-items-center font-weight-bold">
                                        <ReactBootstrap.Spinner animation="border" />
                                        <span className="ml-3"> Loading order summary...........</span>
                                    </div>
                            } */}
                            <h1>{houseID}</h1>
                        </div>
                    </div>
                    <div className="col-md-4">

                    </div>
                </div>
            </div>
        </section>
    );
};

export default HouseDetails;