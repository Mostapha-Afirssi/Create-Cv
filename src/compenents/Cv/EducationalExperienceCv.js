import "../Form.css";

function EducationalExperience(props){
    return (
    <div>
            <div>
                <label htmlFor="school-name">School name</label>
                <p>{props.schoolName}</p>
            </div>
            <div>
                <label htmlFor="title-of-study">Title of study</label>
                <p>{props.titleOfStudy}</p>
            </div>
            <div>
                <label htmlFor="date-of-study">Date of study</label>
                <p>{props.dateOfStudy}</p>
            </div>
            
    </div>
    )
}

export default EducationalExperience