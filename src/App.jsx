import { useState } from 'react'
import GeneralInfo from './MainContainer/LeftPanel/GeneralInfo'
import Experience from './MainContainer/LeftPanel/Experience'
import Education from './MainContainer/LeftPanel/Education'
import Preview from './MainContainer/RightPanel/Preview'
import Title from './MainContainer/Header/Header'
import './App.css'


function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    surname: '',
    email: '',
    phoneNumber: '',
    address: '',
    availibility: '',  
  });

  const [experience, setExperience] = useState({
    position: '',
    startDate: '',
    endDate: '',
    description: ''
  })

  const [education, setEducation] = useState({
    educationSubject: '',
    educationLevel: '',
    educationGrade: '',
  })



  return (
    <div className='App'>
      <Title/>
      <form className="left-panel">
        <GeneralInfo 
          generalInfo={generalInfo}
          setGeneralInfo={setGeneralInfo}
        />

        <hr />

        <Education 
          education={education}
          setEducation={setEducation}/>

        <hr />

        <Experience 
          experience={experience}
          setExperience={setExperience}
        />

        <hr />

        
      </form>
      <div className='right-panel'>
          <Preview
          generalInfo={generalInfo}
          education={education}
          experience={experience}/>
        </div>
    </div>
  );
}
  

export default App
