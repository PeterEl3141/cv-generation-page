import React from "react";
import "./Preview.css";
import html2pdf from "html2pdf.js";

function Preview({ generalInfo, education, experience }) {
  
  function handleDownloadPDF() {
    const element = document.getElementById("preview");
    const button = document.querySelector('.no-print');

    button.style.display = 'none';

    const opt = {
      margin: 0,
      filename: "cv.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "pt", format: "a4", orientation: "portrait" },
    };

    html2pdf().set(opt).from(element).save().then(()=>{
      button.style.display = 'inline-block';
    });
  }

  return (
    <div className="preview" id="preview">
      <h2 className="title">
        {generalInfo.name} {generalInfo.surname}
      </h2>
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
      <button className="no-print" onClick={handleDownloadPDF}>
        Download as PDF
      </button>
    </div>
  );
}

export default Preview;
