import React from "react";


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
            <label>
                First Name:
                <input 
                type="text"
                name="name"
                value={generalInfo.name}
                onChange={handleInputChange}/>
            </label>

            <label>
                Surname:
                <input 
                type="text"
                name="surname"
                value={generalInfo.surname}
                onChange={handleInputChange}/>
            </label>

            <label>
                Email:
                <input 
                type="text"
                name="email"
                value={generalInfo.email}
                onChange={handleInputChange}/>
            </label>
            <label>
                Phone Number:
                <input 
                type="text"
                name="phoneNumber"
                value={generalInfo.phoneNumber}
                onChange={handleInputChange}/>
            </label>

            <label>
                Address:
                <input
                type="text"
                name="address"
                value={generalInfo.address}
                onChange={handleInputChange} 
                />
            </label>

            <label>
                Availability (from):
                <input
                type="date"
                name="availability"
                value={generalInfo.availability}
                onChange={handleInputChange} 
                />
            </label>


            
      
            
        </div>
    )
}

export default GeneralInfo;