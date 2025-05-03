import React from "react";


function Preview({generalInfo, education, experience}){




    return(
        <div className="preview">
        <h2 className="title">{generalInfo.name} {generalInfo.surname}</h2>
        <p>Email: {generalInfo.email}</p>
        <p>Phone Number: {generalInfo.phoneNumber}</p>
        <p>Availability: {generalInfo.availability}</p>
        <hr />
        <h3>Education</h3>
        <p>Subject: {education.educationSubject}</p>
        <p>Level: {education.educationLevel}</p>
        <p>Grade: {education.educationGrade}</p>
        <hr />
        <h3>Experience</h3>
        <p>Position: {experience.position}</p>
        <p>Start Date: {experience.startDate}</p>
        <p>End Date: {experience.endDate}</p>
        <p>Description: {experience.description}</p>
        </div>
    );
}




export default Preview;