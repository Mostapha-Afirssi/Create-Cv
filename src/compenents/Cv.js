import GeneralInformation from "./Cv/GenerealInformationCv";
import EducationalExperience from "./Cv/EducationalExperienceCv";
import PracticalExperience from "./Cv/PracticalExperienceCv";




function Cv(props){
    return (
    <div>
      <div>
        <h2>General Information</h2>
        <GeneralInformation {...props.gen} />
      </div>
      <div className="cv-diplay">
        <h2>Eductaional Experiences</h2>
        <EducationalExperience {...props.edu}/>
      </div>
      <div className="cv-diplay">
        <h2>Practical Experiences</h2>
        <PracticalExperience {...props.pra}/>
      </div>
    </div>
    )
}

export default Cv;