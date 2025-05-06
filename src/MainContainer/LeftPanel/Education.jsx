import React from "react";
import './Education.css';

function Education({education, setEducation}){


    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setEducation({
            ...education,
            [name]: value,
        })
    }


    return(
        <div className="form-section">
            <h2>Education: </h2>
            <div className="form-row">
                <label htmlFor="subject">Subject: </label>
                <input 
                id="subject"
                type="text" 
                name="educationSubject"
                value={education.educationSubject}
                onChange={handleInputChange} />
            </div>
            <div className="form-row">
                <label htmlFor="level">Level</label>
                <input 
                id="level"
                type="text"
                name="educationLevel"
                value={education.educationLevel}
                onChange={handleInputChange} />
            </div>

            <div className="form-row">
                <label htmlFor="grade">Grade</label>
                <input 
                id="grade"
                type="text"
                name="educationGrade"
                value={education.educationGrade}
                onChange={handleInputChange} />
            </div>
        </div>

    )
}

export default Education;