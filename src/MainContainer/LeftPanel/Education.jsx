import React from "react";


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
            <label>
                Subject:
                <input 
                type="text" 
                name="educationSubject"
                value={education.educationSubject}
                onChange={handleInputChange} />
            </label>
            <label>
                Level:
                <input 
                type="text"
                name="educationLevel"
                value={education.educationLevel}
                onChange={handleInputChange} />
            </label>

            <label>
                Grade:
                <input 
                type="text"
                name="educationGrade"
                value={education.educationGrade}
                onChange={handleInputChange} />
            </label>
        </div>

    )
}

export default Education;