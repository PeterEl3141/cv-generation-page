import React from "react";
import './Experience.css'


function Experience({experience, setExperience}){

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setExperience({
            ...experience,
            [name]: value,
        })
    }

    return (
        <div className="form-section">
            <h2>Experience: </h2>
            <div className="form-row">
                <label htmlFor="position">Position: </label>
                <input
                id="position" 
                type="text"
                name="position"
                value={experience.position}
                onChange={handleInputChange} />
            </div>

            <div className="form-row">
                <label htmlFor="start-date">Start Date: </label>
                <input 
                id="start-date"
                type="date"
                name="startDate"
                value={experience.startDate}
                onChange={handleInputChange} />
            </div>

            <div className="form-row">
                <label htmlFor="end-date">End Date</label>
                <input 
                id="end-date"
                type="date"
                name="endDate"
                value={experience.endDate}
                onChange={handleInputChange} />
            </div>
            <div className="form-row">
                <label htmlFor="description">Description</label>
                <textarea 
                id="description"
                type="text"
                name="description"
                value={experience.description}
                onChange={handleInputChange} />
            </div>


        </div>

    )
}



export default Experience;