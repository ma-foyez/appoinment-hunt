import React, { useState } from 'react';
import DashboardNav from '../DashboardNav/DashboardNav';
import SideMenu from '../SideMenu/SideMenu';
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons'
const AddHouse = () => {

    const { register, handleSubmit, errors } = useForm();
    const [info, setInfo] = useState({})
    const [file, setFile] = useState(null);
    const handleBlur = (e) => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }
    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }
    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('serviceTitle', info.serviceTitle);
        formData.append('location', info.location);
        formData.append('bedroom', info.bedroom);
        formData.append('birthroom', info.birthroom);
        formData.append('price', info.price);

        fetch('https://apartment-hunts.herokuapp.com/addHouse', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert('New Record Added Successfully')
                }
                document.getElementById('serviceTitle').value = '';
                document.getElementById('location').value = '';
                document.getElementById('bedroom').value = '';
                document.getElementById('birthroom').value = '';
                document.getElementById('price').value = '';
            })
    };
    return (
        <section>
            <DashboardNav></DashboardNav>
            <div className="row">
                <div className="col-md-2">
                    <SideMenu></SideMenu>
                </div>
                <div className="col-md-10 dashboard-container">
                    <div className="add-service p-4">
                        <h3 className="font-weight-bold">Add House</h3>
                        <form onSubmit={handleSubmit(onSubmit)} className="m-3 form">
                            <div className="row rounded bg-white p-5 m-1">
                                <div className="col-md-6">
                                    <div class="form-group">
                                        <label for="service-title">Service Title</label>
                                        <input type="text" onBlur={handleBlur} className="form-control" id="serviceTitle" name="serviceTitle" ref={register({ required: true })} placeholder="Service Title" />
                                        {errors.serviceTitle && <span className="text-danger font-weight-bold">Please add new house with service title</span>}
                                    </div>
                                    <div class="form-group">
                                        <label for="service-title">Location</label>
                                        <input type="text" onBlur={handleBlur} className="form-control" id="location" name="location" ref={register({ required: true })} placeholder="Location" />
                                        {errors.location && <span className="text-danger font-weight-bold">Please add new house with location</span>}
                                    </div>
                                    <div class="form-group">
                                        <label for="service-title">Number of Bedrooms</label>
                                        <input type="number" onBlur={handleBlur} className="form-control" id="bedroom" name="bedroom" ref={register({ required: true })} placeholder="Number of bedrooms" />
                                        {errors.bedroom && <span className="text-danger font-weight-bold">Please add new house with number of bedrooms</span>}
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div class="form-group">
                                        <label for="service-title">Number of Birthroom</label>
                                        <input type="number" onBlur={handleBlur} className="form-control" id="birthroom" name="birthroom" ref={register({ required: true })} placeholder="Number of birthrooms" />
                                        {errors.birthroom && <span className="text-danger font-weight-bold">Please add new house with number of birthrooms</span>}
                                    </div>
                                    <div class="form-group">
                                        <label for="service-title">Price</label>
                                        <input type="number" onBlur={handleBlur} className="form-control" id="price" name="price" ref={register({ required: true })} placeholder="Enter Amount" />
                                        {errors.price && <span className="text-danger font-weight-bold">Please add new house with price</span>}
                                    </div>
                                    <div class="form-group">
                                        <label for="service-title">Thumbnail</label>
                                        <div class="custom-file">
                                            <label for="service-title">Thumbnail</label>
                                            <input type="file" onChange={handleFileChange} class="custom-file-input" id="customFile" name="image" />
                                            <label class="custom-file-label alert-success" for="customFile"> <FontAwesomeIcon icon={faCloudUploadAlt} />  Upload image</label>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <button className="btn brand-btn float-right mt-3" type="Submit">Add House</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddHouse;