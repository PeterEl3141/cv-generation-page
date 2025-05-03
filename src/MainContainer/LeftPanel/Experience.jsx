import React from "react";



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
            <label>
                Position:
                <input 
                type="text"
                name="position"
                value={experience.position}
                onChange={handleInputChange} />
            </label>

            <label>
                Start Date:
                <input 
                type="date"
                name="startDate"
                value={experience.startDate}
                onChange={handleInputChange} />
            </label>

            <label>
                End Date:
                <input 
                type="date"
                name="endDate"
                value={experience.endDate}
                onChange={handleInputChange} />
            </label>
            <label>
                Description:
                <textarea 
                type="text"
                name="description"
                value={experience.description}
                onChange={handleInputChange} />
            </label>


        </div>

    )
}



export default Experience;