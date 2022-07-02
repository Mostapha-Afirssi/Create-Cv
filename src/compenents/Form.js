import GeneralInformation from "./Form/GenerealInformation";
import EducationalExperience from "./Form/EducationalExperience";
import PracticalExperience from "./Form/PracticalExperience";


function Form(props){

  const getGeneralInfo = (data) =>{
    props.onSubmit(data,1);
  }

  const getEducationalInfo = (data) =>{
    props.onSubmit(data,2);
  }

  const getPracticalInfo = (data) =>{
    props.onSubmit(data,3);
  }
  

  return (
  <div>
    <div>
      <h2>General Information</h2>
      <GeneralInformation onSubmit={getGeneralInfo}/>
    </div>
    <div>
      <h2>Practical Experiences</h2>
      <PracticalExperience onSubmit={getPracticalInfo} deletePractical={props.deletePractical}/>
    </div>
    <div>
      <h2>Eductaional Experiences</h2>
      <EducationalExperience onSubmit={getEducationalInfo} deleteEducational={props.deleteEducational}/>
    </div>
  </div>
  )
}

export default Form;