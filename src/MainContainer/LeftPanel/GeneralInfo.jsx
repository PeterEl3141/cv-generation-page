import React from "react";
import './GeneralInfo.css';

function GeneralInfo({generalInfo, setGeneralInfo}){

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setGeneralInfo({
            ...generalInfo,
            [name]: value,
        });
    };

    return(
        <div className="form-section">
            <h2>General Info: </h2>
            <div className="form-row">
                <label htmlFor="first-name">First Name: </label>
                <input 
                id="first-name"
                type="text"
                name="name"
                value={generalInfo.name}
                onChange={handleInputChange}/>
            </div>

            <div className="form-row">
                <label htmlFor="surname">Surname: </label>
                <input 
                id="surname"
                type="text"
                name="surname"
                value={generalInfo.surname}
                onChange={handleInputChange}/>
            </div>

            <div className="form-row">
                <label htmlFor="email">Email: </label>
                <input 
                type="text"
                name="email"
                value={generalInfo.email}
                onChange={handleInputChange}/>
            </div>
            <div className="form-row">
                <label htmlFor="phone-number">Phone Number: </label>
                <input 
                id="phone-number"
                type="text"
                name="phoneNumber"
                value={generalInfo.phoneNumber}
                onChange={handleInputChange}/>
            </div>

            <div className="form-row">
                <label htmlFor="address">Address: </label>
                <input
                id="address"
                type="text"
                name="address"
                value={generalInfo.address}
                onChange={handleInputChange} 
                />
            </div>

            <div className="form-row">
                <label htmlFor="available">Available (from): </label>
                <input
                id="available"
                type="date"
                name="availability"
                value={generalInfo.availability}
                onChange={handleInputChange} 
                />
            </div>


            
      
            
        </div>
    )
}

export default GeneralInfo;